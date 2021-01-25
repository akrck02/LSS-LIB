package com.akrck02.api_minify;

import javax.swing.*;

public class Console {

    public static JTextArea out;

    public static void setConsole_out(JTextArea txt){
        out = txt;
    }


    public static void log(String msg){
        if(out != null) out.setText(out.getText() + "\n " + msg);
        System.out.println(msg);
    }
}
