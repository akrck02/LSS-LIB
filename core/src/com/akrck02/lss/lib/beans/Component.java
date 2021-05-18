package com.akrck02.lss.lib.beans;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * This class represents a CSS component
 */
public class Component implements Compilable{

    private Optional<String> name;
    private List<Style> styles;
    private List<Action> actions;
    private List<Variable> variables;

    public Component(String name){
        this.name = Optional.ofNullable(name);
        this.styles = new ArrayList<>();
        this.actions = new ArrayList<>();
        this.variables = new ArrayList<>();
    }

    /**
     * Add a new style
     * @param style - The style
     */
    public void addStyle(Style style){
        this.styles.add(style);
    }

    /**
     * Add a new action
     * @param action - The action
     */
    public void addActions(Action action){
        this.actions.add(action);
    }

    /**
     * Add a new variable
     * @param variable - The variable
     */
    public void addVariable(Variable variable){
        this.variables.add(variable);
    }

    /**
     * Compile a component
     * @return The conmpiled CSS
     */
    @Override
    public String compile(ConfigurationSet config) {
        String compiled = "";




        return this.toString();
    }
}
