package com.akrck02.lss.lib.bean;

/**
 * This interface represents any
 * object that can be compiled.
 */
public interface Compilable {

    /**
     * compile string
     * @return compiled version
     */
    public String compile(ConfigurationSet config);
}
