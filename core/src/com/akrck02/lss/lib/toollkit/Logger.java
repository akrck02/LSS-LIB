package com.akrck02.lss.lib.toollkit;

public class Logger {

    public enum Status {

        INFO("Info","001"),
        ERROR("Error","002"),
        WARNING("Warning","003"),
        TEST("Test","004"),
        WAITING("Waiting","005"),
        START("Start","006"),
        KILL("Kill","007"),
        CONNECT("Connect","008"),
        DISCONNECT("Disconnect","009"),
        SEARCH("Search","010")
        ;

        String name;
        String code;

        private Status(String name, String code){
            this.name = name;
            this.code = code;
        }

        public String getName(){
            return this.name;
        }

        public String getCode(){
            return this.code;
        }
    }

    /**
     * Log something through console
     * @param status - The status of the log
     * @param title - The title
     * @param message - The message
     * @return String with the log (For secondary output channels)
     */
    public static String log(Status status, Object title, Object message){
        String result = "[" + status.getName() + "] ";

        //Little checks
        if(title == null) title = "?";
        if(message == null) message = "!";

        result += title + " >> " + message;

        System.out.println(result);
        return result;
    }


    public static String emptylog(Object message){
        String result = "";

        //Little checks
        if(message == null) message = "!";
        result += message;

        System.out.println(result);
        return result;
    }


    /**
     * Log an info message
     * @param message - The message
     */
    public static String info(Object title, Object message) {
        return log(Status.INFO,title,message);
    }

    /**
     * Log an warning message
     * @param message - The message
     */
    public static String warning(Object title, Object message) {
       return log(Status.WARNING,title,message);
    }

    /**
     * Log an error message
     * @param message - The message
     */
    public static String error(Object title, Object message) {
      return log(Status.ERROR,title,message);
    }

    /**
     * Draws a line in console
     */
    public static void line() {
        System.out.println("-----------------------------------------------------------------------------");
    }

    /**
     * Draws a line in console
     */
    public static void line(String str) {
        String base = "-----------------------------------------------------------------------------";
        String line = "";

        for (int i = 0; i < base.length(); i++) {
            line += str;
        }

        System.out.println(line);
    }

    /**
     * Jumps once
     */
    public static void jump() {
        System.out.println();
    }
}
