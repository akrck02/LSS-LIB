import { ACTION_TYPES } from '../data/lssContext.ts';
import UIObject from './uiobject.ts';

export default interface Action extends UIObject {
    type: ACTION_TYPES;
    subject : UIObject;
}
