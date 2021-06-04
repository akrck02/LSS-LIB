package test;

import com.akrck02.lss.lib.bean.ConfigurationSet;
import com.akrck02.lss.lib.bean.Style;
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

}
