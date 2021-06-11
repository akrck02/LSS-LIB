package test;

import com.akrck02.lss.lib.bean.*;
import org.junit.Assert;
import org.junit.Test;

public class BeanUnitTest  {

    @Test
    public void StyleTest(){
        String name = "background";
        String value = "#f1f1f1";
        Style style = new Style(name,value);
        Assert.assertEquals(style.compile(new ConfigurationSet()),name + " : " + value + ";");
    }

    @Test
    public void componentTest () {

        Component component = new Component("myComponent", Component.ComponentType.COMPONENT);

        /** Adding variables to the component **/
        component.addVariable(new Variable("text-color","#fff"));

        /** Adding styles to the component **/
        component.addStyle(new Style("background","#404040"));
        component.addStyle(new Style("color","var(--text-color)"));

        /** Adding actions to the component **/
        Action hover = new Action();
        hover.setParentName(component.getName());
        hover.setName("hover");
        hover.addStyle(new Style("--text-color","blue"));
        component.addActions(hover);

        String compiled = component.compile(new ConfigurationSet());

        org.junit.Assert.assertEquals("Compiled version does not match requirements:\n " + compiled,
                compiled.trim(),
                "myComponent { --text-color : #fff;background : #404040;color : var(--text-color); } myComponent:hover { --text-color : blue; }"
        );
    }

}
