package com.akrck02.lss.lib;

import com.akrck02.lss.lib.bean.ConfigurationSet;
import com.akrck02.lss.lib.bean.LssCoreComponent;
import com.akrck02.lss.lib.io.Parser;
import com.akrck02.lss.lib.toollkit.Logger;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class Lss {

    public static void main(String[] args) {

        List<String> arguments = Arrays.asList(args);
        boolean minify = false;

        /** Setting runtime data **/
        ConfigurationSet set = new ConfigurationSet();
        set.addFormat("lss");
        set.setMinify(minify);

        if(arguments.contains("-i")){
            int index = arguments.indexOf("-i") + 1;
            try {
                set.setInput(arguments.get(index));
            }catch (IndexOutOfBoundsException e) {Logger.warning("Input","No value  present. Setting default value.");}
        }

        if(arguments.contains("-o")){
            int index = arguments.indexOf("-o") + 1;
            try {
               //set.setOutput(arguments.get(index));
            }catch (IndexOutOfBoundsException e) {Logger.warning("Output","No value  present. Setting default value.");}
        }

        if(arguments.contains("-m")){
          set.setMinify(true);
        }

        /** Showing runtime data **/
        Logger.jump();
        Logger.line("#");
        Logger.emptylog(" LSS Parser v1.0");
        Logger.line("#");

        Logger.emptylog(" Input : " + set.getInput());
        Logger.emptylog(" Output : " + set.getOutput());
        Logger.emptylog(" Version : " + set.getVersion());
        Logger.emptylog(" Minify : " + set.isMinify());
        Logger.emptylog(" Formats : " + set.getFormats());
        Logger.emptylog(" Modules : " + set.getModules());
        Logger.line("#");

        /** Starting parser **/
        Parser parser = new Parser(set);
        parser.access(set.getInput());

        /** Generating css **/
        List<LssCoreComponent> components = parser.getComponents();

        Logger.jump();
        Logger.line();
        System.out.println(" Generating CSS file.");
        Logger.line();
        try {
            if (components.size() == 0) {
                Logger.log(Logger.Status.INFO, "Generator", "Nothing to generate.");
                return;
            }
            File out = new File(set.getOutput());
            File dir = new File(set.getOutput().substring(0,set.getOutput().lastIndexOf('/')));
            dir.mkdirs();

            BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(out));


            for (LssCoreComponent comp: components) {
                bufferedWriter.write(comp.compile(set));
                if(!set.isMinify())
                    bufferedWriter.newLine();
            }
            bufferedWriter.close();
        } catch (IOException e) {
            Logger.error("Writer","Cannot write on disk.");
        }
    }
}
