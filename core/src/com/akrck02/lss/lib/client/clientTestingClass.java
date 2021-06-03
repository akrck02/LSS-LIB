package com.akrck02.lss.lib.client;

import com.akrck02.lss.lib.bean.Component;
import com.akrck02.lss.lib.bean.ConfigurationSet;
import com.akrck02.lss.lib.bean.Style;
import com.akrck02.lss.lib.bean.Variable;

public class clientTestingClass {

    public String realCaseStuff(){

        String compiled = "";

        Component button = new Component("epic_button");
        Variable bg = new Variable("bg","#f1f1f1");
        Variable color = new Variable("color","#404040");

        button.addVariable(bg);
        button.addVariable(color);

        Style background = new Style("background", bg.format());

        button.addStyle(background);
        compiled = button.compile(new ConfigurationSet());

        return compiled;
    }


    public static void main(String[] args) {

    }
}
