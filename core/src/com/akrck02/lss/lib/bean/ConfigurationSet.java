package com.akrck02.lss.lib.bean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class ConfigurationSet {

    private List<String> modules;
    private List<String> formats;

    private Optional<String> version;
    private Optional<String> input;
    private Optional<String> output;

    private boolean minify;
    private boolean log;

    public ConfigurationSet(){
        modules = new ArrayList<>();
        formats = new ArrayList<>();

        version = Optional.of("v1.0");
        input = Optional.of("./");
        output = Optional.of("./dist/master.css");

        minify = true;
        log = true;
    }

    public void addModule(String module) {
        this.modules.add(module);
    }

    public void addFormat(String format) {
        this.formats.add(format);
    }

    public void setVersion(String version) {
        this.version = Optional.ofNullable(version);
    }

    public void setInput(String input) {
        Optional<String> optIn = Optional.ofNullable(input);
        this.input = optIn.isEmpty() ? Optional.of("./") : optIn;
    }

    public void setOutput(String output) {
        Optional<String> optOut = Optional.ofNullable(output);
        this.output = optOut.isEmpty() ? Optional.of("./dist/master.css") : optOut;
    }

    public void setMinify(boolean minify) {
        this.minify = minify;
    }

    public void setLog(boolean log) {
        this.log = log;
    }

    public List<String> getModules() {
        return modules;
    }

    public List<String> getFormats() {
        return formats;
    }

    public String getVersion() {
        return version.orElse("v1.0");
    }

    public String getInput() {
        return input.orElse("./");
    }

    public String getOutput() {
        return output.orElse("./dist/master.css");
    }

    public boolean isMinify() {
        return minify;
    }

    public boolean isLog() {
        return log;
    }

    @Override
    public String toString() {
        return "ConfigurationSet{" +
                "\nmodules=" + modules +
                ", \nformats=" + formats +
                ", \nversion=" + version +
                ", \ninput=" + input +
                ", \noutput=" + output +
                ", \nminify=" + minify +
                ", \nlog=" + log +
                "\n}";
    }
}
