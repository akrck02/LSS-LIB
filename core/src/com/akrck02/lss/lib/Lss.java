package com.akrck02.lss.lib;

import com.akrck02.lss.lib.bean.ConfigurationSet;
import com.akrck02.lss.lib.bean.LssCoreComponent;
import com.akrck02.lss.lib.io.Parser;
import com.akrck02.lss.lib.toollkit.Logger;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class Lss {

    public static void main(String[] args) {

        ConfigurationSet set = new ConfigurationSet();
        set.addFormat("lss");
        set.setMinify(false);
        set.addModule("lssOne");
        set.addModule("lssTwo");
        set.setInput("C:/Users/akrck02/Desktop/github/LSS_LIB/fake/");

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
