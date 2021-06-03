package com.akrck02.lss.lib.bean;

import java.util.Optional;

public class Variable extends Property implements Compilable{

    /**
     * Constructor for a variable
     * @param name - The variable name (Without '--')
     * @param value - The value for this varaible
     */
    public Variable(String name, String value){
        this.name = Optional.ofNullable(name);
        this.value = Optional.ofNullable(value);
    }

    /**
     * Format a variable in CSS
     * @param name - The variable name
     * @return Formatted variable
     */
    public static String format(String name) {
        return "var(" + name + ");";
    }

    /**
     * Format a variable in CSS
     * @return Formatted variable
     */
    public String format() {
        return format(this.name.orElse("?"));
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

    @Override
    public String toString() {
        return this.compile(new ConfigurationSet());
    }
}
