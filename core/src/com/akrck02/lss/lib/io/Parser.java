package com.akrck02.lss.lib.io;

import com.akrck02.lss.lib.bean.*;
import com.akrck02.lss.lib.toollkit.JsonUtils;
import com.akrck02.lss.lib.toollkit.Logger;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class Parser {
    ConfigurationSet config;
    List<LssCoreComponent> components;

    public Parser(ConfigurationSet config){
        this.config = config;
        this.components  = new ArrayList<>();
    }

    public void access(String path){
        File current = new File(path);
        boolean directory = current.isDirectory();

        if(directory){
            if(path.contains("dist")) return;
            if(path.charAt(path.length()-1) != '/') path += "/";

            String[] contentList = current.list();
            if(contentList != null)
                for (String content : contentList) {
                    access(path + content);
                }
        }else {
            String name = current.getName();
            int dotIndex = name.lastIndexOf(".");
            String extension = name.substring(dotIndex != -1 ? dotIndex + 1 : 0);

            if(config.getFormats().contains(extension)) {
                System.out.println("\nFILE: " + path);
                Logger.line();
                parse(path);
            }
        }
    }

    /**
     * Parse a file
     * @param path - The file path
     */
    public void parse(String path){
        JSONObject json = JsonUtils.parse(path);
        if(json == null){
            Logger.error("Parser", "Syntax error.");
            return;
        }

        String type = "component";
        try {
            type = (String) json.get("type");
        }catch (JSONException e){
            Logger.warning("Parser","No type specified, parsing as component.");
        }

        switch (type) {
            case "component":
                parseComponent(json);
                break;
            default:
                break;

        }
        Logger.info("Parser","DONE.");
    }

    /**
     * Parse a component
     * @param json Json object
     */
    public void parseComponent(JSONObject json){
        try {
            String name = json.getString("name");
            String type = json.getString("type");

            Component.ComponentType compType =  Component.ComponentType.COMPONENT;
            try {
                compType = Component.ComponentType.valueOf(type.toUpperCase());
            }catch (IllegalArgumentException ignore){}
            Component comp = new Component(name,compType);

            /**
             * Parsing styles
             */
            JsonUtils.runIgnoring( () -> {
                JSONObject styles = json.getJSONObject("styles");
                styles.keySet().forEach(styleName -> comp.addStyle(new Style(styleName, styles.get(styleName) + "")));
            });

            /**
             * Parsing variables
             */
            JsonUtils.runIgnoring( () -> {
                JSONObject variables = json.getJSONObject("variables");
                variables.keySet().forEach(variableName -> comp.addVariable(new Variable(variableName, variables.get(variableName) + "")));
            });

            /**
             * Parsing actions
             */
            JsonUtils.runIgnoring(() -> {
                JSONObject actions = json.getJSONObject("actions");
                actions.keySet().forEach(actionName ->{
                    Action action = new Action();
                    action.setName(actionName);
                    action.setParentName(name);

                    JsonUtils.runIgnoring(() -> {
                        JSONObject actionVariables = actions.getJSONObject(actionName).getJSONObject("variables");
                        actionVariables.keySet().forEach(
                                variableName -> action.addVariable(new Variable(variableName,actionVariables.getString(variableName)))
                        );
                    });

                    JsonUtils.runIgnoring(() -> {
                        JSONObject actionStyles = actions.getJSONObject(actionName).getJSONObject("styles");
                        actionStyles.keySet().forEach(
                            styleName -> action.addStyle(new Style(styleName,actionStyles.getString(styleName)))
                        );
                    });


                    comp.addActions(action);
                });
            });

            components.add(comp);
        }catch (JSONException e){
            Logger.error("Parser","Component has no name, ignoring.");
        }
    }

    /**
     * Get component list
     * @return component list
     */
    public List<LssCoreComponent> getComponents() {
        return components;
    }
}
