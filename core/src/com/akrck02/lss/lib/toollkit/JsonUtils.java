package com.akrck02.lss.lib.toollkit;

import org.json.JSONObject;
import org.json.JSONTokener;
import java.io.FileInputStream;

public class JsonUtils {
    public static JSONObject parse(String url){
        try {
            JSONTokener tokener = new JSONTokener(new FileInputStream(url));
            JSONObject root = new JSONObject(tokener);
            return root;
        } catch (Exception e ) {
            Logger.error("Json parse","Lss cannot parse " + url);
            return  null;
        }
    }
}
