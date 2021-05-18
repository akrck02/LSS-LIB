package com.akrck02.lss.lib.toollkit;

public class Logger {

    /**
     * Log an info message
     * @param message - The message
     */
    public static void info(Object title, Object message) {
        String result = "[info] ";

        //Little checks
        if(title == null) title = "?";
        if(message == null) message = "!";

        result += title + " >> " + message;

        System.out.println(result);
    }

    /**
     * Log an warning message
     * @param message - The message
     */
    public static void warning(Object title, Object message) {
        String result = "[warning] ";

        //Little checks
        if(title == null) title = "?";
        if(message == null) message = "!";

        result += title + " >> " + message;

        System.out.println(result);
    }

    /**
     * Log an error message
     * @param message - The message
     */
    public static void error(Object title, Object message) {
        String result = "[error] ";

        //Little checks
        if(title == null) title = "?";
        if(message == null) message = "!";

        result += title + " >> " + message;

        System.out.println(result);
    }
}
