import ActionBuilder, { Action } from "../classes/action";
import ComponentBuilder, { Component } from "../classes/component";
import StyleBuilder, { Style } from "../classes/style";
import ThemeBuilder, { Theme } from "../classes/theme";
import VariableBuilder, { Variable } from "../classes/variable";
import { FILE_TYPE } from "../data/enums";
import LssError from "../errors/errors";
import Compilable from "../interfaces/compilable";
import { NumberedList } from "../interfaces/datastructure";
import IHandler from "./handler";
import Logger, { LogActor, LogStatus } from "./logger";

export abstract class AParser {
    protected logger: Logger;
    protected handler: IHandler;

    constructor(logger: Logger, handler: IHandler) {
        this.logger = logger;
        this.handler = handler;
    }

    abstract parse(subject: NumberedList): Array<Compilable>;
}

export class Parser extends AParser {
    parse(subject: NumberedList): Array<Compilable> {
        this.logger.log(LogActor.PARSER, LogStatus.RUN, "Starting.");

        let result: Array<Compilable> = [];

        for (const key in subject) {
            const object = subject[key];

            if (object.fileType) {
                switch (object.fileType) {
                    case FILE_TYPE.COMPONENT:
                        result.push(this.parseComponent(object));
                        break;
                
                    case FILE_TYPE.VARIABLE:
                        result.push(this.parseVariable(object));
                        break;
                    
                    case FILE_TYPE.STYLE:
                        result.push(this.parseStyle(object));
                        break;
                        
                    case FILE_TYPE.THEME:
                        result.push(this.parseTheme(object));
                        break;

                    case FILE_TYPE.ACTION:
                        result.push(this.parseAction(object));
                        break;
                    
                }
            }
        }

        console.log(result);
        this.logger.log(LogActor.PARSER, LogStatus.RUN, "Done.");
        return result;
    }

    parseComponent(comp: any): Component {
        const builder = new ComponentBuilder();

        if(!comp.uid) throw new LssError("Component with no UID.");
        if(!comp.name) throw new LssError("Component with no name.");
        if(!comp.type) throw new LssError("Component with no type.");

        builder.setUid(comp.uid);
        builder.setName(comp.name);
        builder.setType(comp.type);

        if(comp.styles) 
            builder.setStyles(comp.styles);

        if(comp.variables)
            builder.setVariables(comp.variables);

        if(comp.actions)
            builder.setActions(comp.actions);

        if(comp.variations)
            builder.setVariations(comp.variations);

        return new Component(builder);
    }
    parseVariable(variable: any): Variable {
        const builder = new VariableBuilder();

        if(!variable.uid) throw new LssError("Variable with no UID.");
        if(!variable.name) throw new LssError("Variable with no name.");
        if(!variable.value) throw new LssError("Variable with no value.");

        builder.setUid(variable.uid);
        builder.setName(variable.name);
        builder.setValue(variable.value);

        return new Variable(builder);
    }

    parseStyle(style: any): Style {
        const builder = new StyleBuilder();

        if(!style.uid) throw new LssError("Style with no UID.");
        if(!style.name) throw new LssError("Style with no name.");
        if(!style.value) throw new LssError("Style with no name.");
        
        builder.setUid(style.uid);
        builder.setName(style.name);
        builder.setValue(style.value);

        return new Style(builder);
    }

    parseTheme(theme: any): Theme {
        const builder = new ThemeBuilder();

        return new Theme(builder);
    }

    parseAction(action: any): Action {
        const builder = new ActionBuilder();
        
        return new Action(builder);
    }
}
