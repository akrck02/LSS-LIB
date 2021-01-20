package com.akstrap.compiler;

import javax.swing.*;
import java.io.*;

public class Compiler {
    public static BufferedWriter master;
    public static JTextArea console_out;

    public static void compile(String path, String out, JTextArea out_txt){
        try {
            File dir = new File(path);
            File output_file = new File(out);
            console_out = out_txt;

            if(!output_file.exists()) output_file.createNewFile();
            master = new BufferedWriter(new FileWriter(output_file));
            access(dir);
            master.close();
            log("\n>> Done.");
        } catch (IOException e) {log("Cannot compile this version.");}
    }

    public static void compile(String path,String out){
        try {
            File dir = new File(path);
            File output_file = new File(out);

            if(!output_file.exists()) output_file.createNewFile();
            master = new BufferedWriter(new FileWriter(output_file));
            access(dir);
            master.close();
        } catch (IOException e) {log("Cannot compile this version.");}
    }

    public static void access(File f){
        if(f.isDirectory()){
            if(f.getName().equals("js") || f.getName().equals("routes")) return;
            String[] children = f.list();
            for (String child : children){
                log(f.getPath() + "\\" + child);
                File ch = new File(f.getPath() + "\\" + child);
                if(ch.isDirectory()) access(ch);
                else add_to_master(ch);
            }
        } else add_to_master(f);
    }

    public static void add_to_master(File ch){
        try {
            BufferedReader br = new BufferedReader(new FileReader(ch.getAbsoluteFile()));
            String line = "";
            while(line != null){
                if(!line.contains("@import \".")) master.write(line);
                line = br.readLine();
            }
            br.close();
        } catch (FileNotFoundException e) {
            log(e.getStackTrace().toString());
        }
        catch (IOException ignored) {}
    }

    public static void log(String msg){
        if(console_out != null) console_out.setText(console_out.getText() + "\n " + msg);
        System.out.println(msg);
    }

    public static void main(String[] args) {
        compile("C:/Users/akrck02/Desktop/out/akstrap_v1.0/","C:/Users/akrck02/Desktop/out/akstrap_v1.0.css");
    }

}