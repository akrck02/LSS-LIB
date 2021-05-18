package com.akrck02.lss.lib.beans;

import java.util.Optional;

public class Variable extends Property implements Compilable{

    /**
     * Constructor for a variable
     * @param name - The variable name (Without '--')
     * @param value - The value for this varaible
     */
    Variable(String name, String value){
        this.name = Optional.ofNullable(name);
        this.value = Optional.ofNullable(value);
    }

    /**
     * Compile the variable
     * @return The compiled variable
     */
    @Override
    public String compile(ConfigurationSet config) {

        String compiled = "";
        compiled += "--" + this.name.orElse("variable");
        compiled += " : ";
        compiled += this.value.orElse("none") + ";";

        return compiled;
    }
}
