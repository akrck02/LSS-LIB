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

        String input = "./";
        String output = "";
        boolean minify = true;

        if(arguments.contains("-i")){
            System.out.println("Contains input!");
        }

        if(arguments.contains("-o")){
            System.out.println("Contains output!");
        }


        ConfigurationSet set = new ConfigurationSet();
        set.addFormat("lss");
        set.setMinify(minify);
        set.setInput(input);
        Parser parser = new Parser(set);
        parser.access(set.getInput());

        List<LssCoreComponent> components = parser.getComponents();

        Logger.jump();
        Logger.line();
        System.out.println(" Generating CSS file.");
        Logger.line();
        try {
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
