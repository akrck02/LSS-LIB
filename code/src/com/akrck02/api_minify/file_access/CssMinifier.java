package com.akrck02.api_minify.file_access;

import com.akrck02.api_minify.Console;
import javax.swing.*;
import java.io.*;

public class CssMinifier {

    public static BufferedWriter master;
    public static String extension;

    public static void minify(String path, String out, JTextArea out_txt){
            Console.setConsole_out(out_txt);
            extension = ".css";
            minify(path,out);
            Console.log("\n>> Done.");
    }

    public static void minify(String path, String out){
        try {
            File dir = new File(path);
            File output_file = new File(out);

            if(!output_file.exists()) output_file.createNewFile();
            master = new BufferedWriter(new FileWriter(output_file));
            access(dir);
            master.close();
        } catch (IOException e) {Console.log("Cannot compile this version.");}
    }

    public static void access(File f){
        if(f.isDirectory()){
            if(f.getName().equals("routes")) return;
            String[] children = f.list();
            for (String child : children){
                Console.log(f.getPath() + "\\" + child);
                File ch = new File(f.getPath() + "\\" + child);
                if(ch.isDirectory()) access(ch);
                else add_to_master(ch);
            }
        } else add_to_master(f);
    }

    public static void add_to_master(File ch){
        if(!ch.getAbsolutePath().contains(extension)) return;
        try {
            BufferedReader br = new BufferedReader(new FileReader(ch.getAbsoluteFile()));
            String line = "";
            while(line != null){
                if(!line.contains("@import \".")) master.write(line);
                line = br.readLine();
            }
            br.close();
        } catch (FileNotFoundException e) {
            Console.log(e.getCause().getMessage());
        }
        catch (IOException ignored) {}
    }



}
