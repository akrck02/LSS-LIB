package com.akrck02.lss.lib.io;

import com.akrck02.lss.lib.beans.ConfigurationSet;
import com.akrck02.lss.lib.toollkit.JsonUtils;
import com.akrck02.lss.lib.toollkit.Logger;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;

public class Parser {
    ConfigurationSet config;

    public Parser(ConfigurationSet config){
        this.config = config;
    }

    public void access(String path){
        File current = new File(path);
        boolean directory = current.isDirectory();
        if(directory){
            if(path.charAt(path.length()-1) != '/') path += "/";

           // System.out.println("DIR: " + path);
            String[] contentList = current.list();
            for (String content : contentList) {
                access(path + content);
            }
        }else {
            String name = current.getName();
            int dotIndex = name.lastIndexOf(".");
            String extension = name.substring(dotIndex != -1 ? dotIndex + 1 : 0);

            if(config.getFormats().contains(extension)) {
                System.out.println("FILE: " + path);
                parse(path);
            }
        }

    }

    public void parse(String path){
        JSONObject json = JsonUtils.parse(path);

        String type = "component";
        try {
            type = (String) json.get("type");
        }catch (JSONException e){
            Logger.warning("Parser","No type specified, parsing as component.");
        }

        switch (type) {
            case "component":
                Logger.info("","here");
                break;
            default:
                break;

        }

    }
}
