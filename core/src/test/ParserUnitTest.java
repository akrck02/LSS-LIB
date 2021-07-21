package test;

import com.akrck02.lss.lib.toollkit.Logger;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TestName;

import java.util.Locale;

public class ParserUnitTest {

    @Rule
    public TestName name = new TestName();

    @Before
    public void start(){
        Logger.jump();
        Logger.emptylog(name.getMethodName().toUpperCase(Locale.ROOT));
        Logger.line();
    }

    @Test
    public void componentCachéTest(){

    }

}
