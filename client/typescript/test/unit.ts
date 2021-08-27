import LSSObject from '../interfaces/lssobject.ts';
import Component from '../classes/component.ts';
import Variable from '../classes/variable.ts';
import Style from '../classes/style.ts';
import Action from '../classes/action.ts';
import Theme from '../classes/theme.ts';
import Lss from '../api/lss.ts';
import { COMPONENT_TYPES , ACTION_TYPES } from '../data/lssContext.ts';

const lss = new Lss();

const materialButton = new Component("MaterialButton" , COMPONENT_TYPES.CLASS ); 
lss.add(materialButton);

const backgroundVar = new Variable("background" , "red" );
lss.add(backgroundVar);

const accentColorVar = new Variable("accentColor" , "#4a00ff" );
lss.add(accentColorVar);

const backgroundStyle = new Style("background",backgroundVar.cssVar());
lss.add(backgroundStyle);

const backgroundStyle2 = new Style("background","pink");
lss.add(backgroundStyle2);

const hover = new Action(ACTION_TYPES.PSEUDOCLASS, materialButton.uid, "hover");
lss.add(hover);

hover.addStyle(backgroundStyle2.uid);

materialButton.addVariable(backgroundVar.uid);
materialButton.addVariable(accentColorVar.uid);

materialButton.addStyle(backgroundStyle.uid);

//for each object in the array, log compile() method output
console.log("\n", "COMPILED LSS FILES", "\n------------------------");

lss.objects.forEach(object => {
    console.log(JSON.parse(object.compile()));
});
