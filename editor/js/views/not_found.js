import { create } from "../lib/component.js";

export const show = () => {

    window.title = 'LSS Maker - Not found';
    document.title ='LSS Maker - Not found';

    create({
        type : 'h1',
        text : '404 : Not found'
    })
    .appendTo(document.body);

    create({
        type : 'p',
        text : 'This page is no longer alive :('
    })
    .appendTo(document.body);


}