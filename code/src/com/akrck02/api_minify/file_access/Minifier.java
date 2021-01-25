package com.akrck02.api_minify.file_access;

import com.akrck02.api_minify.Console;

import javax.swing.*;
import java.io.*;
import java.util.Optional;

public class Minifier {

    public static JTextArea out_print;

    public static void set_console_out(JTextArea txt){
        out_print = txt;
    }

    public static void minifyCSS(String path, String out){
        CssMinifier.minify(path,out,out_print);
    }





    /*public static void main(String[] args) {
        minify("C:/Users/akrck02/Desktop/out/akstrap_v1.0/","C:/Users/akrck02/Desktop/out/akstrap_v1.0.css");
    }*/

}