package com.akrck02.lss.lib;

import com.akrck02.lss.lib.beans.Component;
import com.akrck02.lss.lib.beans.ConfigurationSet;
import com.akrck02.lss.lib.io.Parser;

public class Lss {

    public static void main(String[] args) {

        ConfigurationSet set = new ConfigurationSet();
        set.addFormat("lss");
        //set.addFormat("json");

        set.addModule("lssOne");
        set.addModule("lssTwo");

        Parser parser = new Parser(set);
        parser.access("C:/Users/akrck02/Desktop/github/LSS_LIB/fake/");

    }
}
