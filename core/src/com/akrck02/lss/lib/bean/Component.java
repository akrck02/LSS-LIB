package com.akrck02.lss.lib.bean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * This class represents a CSS component
 */
public class Component implements Compilable , LssCoreComponent{

    private String  uid;
    private Optional<String> name;
    private ComponentType type;
    private List<Style> styles;
    private List<Action> actions;
    private List<Variable> variables;
    private List<String> comments;
    private List<Component> inside;

    public static enum ComponentType {
        COMPONENT("component",""),
        CLASS("class","."),
        ID("id","#"),
        OTHER("","")
        ;

        private String name;
        private String suffix;

        ComponentType(String name,String suffix){
            this.name = name;
            this.suffix = suffix;
        }

        public String getName(){
            return name;
        }
        public String getSuffix(){
            return this.suffix;
        }
    }

    public Component(String name, String id){
        this.uid = id;
        this.name = Optional.ofNullable(name);
        this.type = ComponentType.COMPONENT;
        this.styles = new ArrayList<>();
        this.actions = new ArrayList<>();
        this.variables = new ArrayList<>();
        this.comments = new ArrayList<>();
    }

    public Component(String name,ComponentType type,String id){
        this.uid = id;
        this.name = Optional.ofNullable(name);
        this.type = type;
        this.styles = new ArrayList<>();
        this.actions = new ArrayList<>();
        this.variables = new ArrayList<>();
        this.comments = new ArrayList<>();
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
     * Set the component type
     * @param type - The component type
     */
    public void setType(ComponentType type){ this.type = type; }

    /**
     * Add a comment to the component
     * @param comment - The comment to add
     */
    public void addComment(String comment) {
        comments.add(comment);
    }

    /**
     * Compile a component
     * @return The compiled CSS
     */
    @Override
    public String compile(ConfigurationSet config) {
        StringBuilder compiled = new StringBuilder();
        if(config.isMinify())
            compiled.append(" ");

        if(!config.isMinify()) {
            if(comments.size() > 0){
                compiled.append("/*");
                for (String comment : comments) {
                    compiled.append("\n\t" + comment);
                }
                compiled.append("\n*/\n");
            }
        }

        if( variables.size() == 0 && styles.size() == 0 )
            return "";

        compiled.append(this.type.getSuffix())
                .append(this.getName())
                .append(" { ");

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
        if(config.isMinify()) compiled.append(" ");
        compiled.append("}");

        if(!config.isMinify())
            compiled.append("\n");

        for (Action a : actions){
            if(config.isMinify())
                compiled.append(" ");

            compiled.append(a.compile(config));

            if(!config.isMinify())
                compiled.append("\n");
        }
        return compiled.toString();
    }

    public String getName() {
        return name.orElse("unknown");
    }

    public List<Style> getStyles() {
        return styles;
    }

    public List<Action> getActions() {
        return actions;
    }

    public String getUid(){
        return uid;
    }

    public List<Variable> getVariables() {
        return variables;
    }


    @Override
    public String toString() {
        return "Component{" +
                " \nname=" + name.orElse("unknown") +
                ", \nstyles=" + styles +
                ", \nactions=" + actions +
                ", \nvariables=" + variables +
                "\n}";
    }
}
