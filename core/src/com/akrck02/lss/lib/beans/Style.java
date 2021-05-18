package com.akrck02.lss.lib.beans;

import java.util.Optional;

public class Style extends Property implements Compilable{

    /**
     * Constructor of a style
     * @param name - The name of style
     * @param value - The value
     */
    Style(String name,String value){
        this.name = Optional.ofNullable(name);
        this.value = Optional.ofNullable(value);
    }

    /**
     * Empty constructor for a Style
     */
    Style(){
        this.name = Optional.empty();
        this.value = Optional.empty();
    }

    @Override
    public String compile(ConfigurationSet config) {
        String compiled = "";

        if(this.name.orElse("").trim().equals("")){

            return "";
        }
        compiled += this.name.orElse("ERROR");
        compiled += " : ";
        compiled += this.value.orElse("none") + ";";

        return compiled;
    }
}
