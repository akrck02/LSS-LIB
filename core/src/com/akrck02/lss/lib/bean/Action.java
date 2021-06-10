package com.akrck02.lss.lib.bean;

import com.akrck02.lss.lib.exception.MalformedObjectException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class Action implements Compilable {

    private Optional<String> parentName;
    private Optional<String> name;

    private List<Style> styles;
    private List<Variable> variables;

    public Action(){
        styles = new ArrayList<>();
        variables = new ArrayList<>();
    }

    public String getParentName() {
        return parentName.orElse("?");
    }

    public void setParentName(String parentName) {
        this.parentName = Optional.ofNullable(parentName);
    }

    public String getName() {
        return name.orElse("?");
    }

    public void setName(String name) {
        this.name = Optional.ofNullable(name);
    }

    /**
     * Add a new style
     * @param style - The style
     */
    public void addStyle(Style style){
        this.styles.add(style);
    }

    /**
     * Add a new variable
     * @param variable - The variable
     */
    public void addVariable(Variable variable){
        this.variables.add(variable);
    }

    @Override
    public String toString() {
        return this.compile(new ConfigurationSet());
    }

    @Override
    public String compile(ConfigurationSet config) {
        StringBuilder compiled = new StringBuilder();

        if( variables.size() == 0 && styles.size() == 0 )
            return "";

        compiled.append(this.getParentName()).append(":");
        compiled.append(this.getName()).append(" { ");

        if(!config.isMinify())
           compiled.append("\n");


        for (Variable v : variables) {
            if(!config.isMinify())
                compiled.append("\t");

            compiled.append(v.compile(config));

            if(!config.isMinify())
                compiled.append("\n");
        }
        for (Style s : styles) {
            if(!config.isMinify())        
                compiled.append("\t");                

            compiled.append(s.compile(config));
            if(!config.isMinify())
                compiled.append("\n");
        }


       if(config.isMinify())
           compiled.append(" ");

       compiled.append("}");
       return compiled.toString();
    }
}
