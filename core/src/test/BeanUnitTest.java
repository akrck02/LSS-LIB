package test;

import com.akrck02.lss.lib.bean.*;
import com.akrck02.lss.lib.toollkit.Logger;
import org.junit.*;
import org.junit.rules.TestName;

import java.util.Locale;

public class BeanUnitTest  {

    @Rule
    public TestName name = new TestName();

    @Before
    public void start(){
        Logger.jump();
        Logger.emptylog(name.getMethodName().toUpperCase(Locale.ROOT));
        Logger.line();
    }

    @Test
    public void StyleTest(){
        String name = "background";
        String value = "#f1f1f1";
        Style style = new Style(name,value);
        String compiled = style.compile(new ConfigurationSet());

        Logger.log(Logger.Status.SET,"Style","background = #f1f1f1");
        Logger.log(Logger.Status.COMPARE, compiled,name + " : " + value + ";");
        Assert.assertEquals(compiled,name + " : " + value + ";");
        Logger.log(Logger.Status.TEST,"Style","DONE.");
    }

    @Test
    public void componentTest () {

        Component component = new Component("myComponent", Component.ComponentType.COMPONENT, "0000000000a");
        Logger.log(Logger.Status.CREATE,"Component","DONE.");

        /** Adding variables to the component **/
        component.addVariable(new Variable("text-color","#fff"));
        Logger.log(Logger.Status.SET,"Variable","text-color = #ffff");

        /** Adding styles to the component **/
        component.addStyle(new Style("background","#404040"));
        Logger.log(Logger.Status.SET,"Style","background = #404040");

        component.addStyle(new Style("color","var(--text-color)"));
        Logger.log(Logger.Status.SET,"Style","color = var(--text-color)");

        /** Adding actions to the component **/
        Action hover = new Action();
        Logger.jump();
        Logger.log(Logger.Status.CREATE,"Action","DONE.");

        hover.setParentName(component.getName());
        hover.setName("hover");
        Logger.log(Logger.Status.SET,"Name","hover");

        hover.addStyle(new Style("--text-color","blue"));
        Logger.log(Logger.Status.SET,"Style","color = blue");
        component.addActions(hover);

        String compiled = component.compile(new ConfigurationSet());
        Logger.jump();
        Logger.log(Logger.Status.COMPARE, compiled.trim(),"myComponent { --text-color : #fff;background : #404040;color : var(--text-color); } myComponent:hover { --text-color : blue; }");
        org.junit.Assert.assertEquals("Compiled version does not match requirements:\n " + compiled,
                compiled.trim(),
                "myComponent { --text-color : #fff;background : #404040;color : var(--text-color); } myComponent:hover { --text-color : blue; }"
        );

        Logger.log(Logger.Status.TEST,"Component","DONE.");
    }

}
