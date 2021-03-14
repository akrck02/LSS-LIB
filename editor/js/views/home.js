import { create } from "../lib/component.js";

export const show = () =>{

    window.title = 'LSS Maker - Home';
    document.title ='LSS Maker - Home';

    create({
        type : 'h1',
        text : 'LSS Maker v0.1'
    })
    .appendTo(document.body);


    create({
        type : 'p',
        text : 'Coming soon 💙'
    })
    .appendTo(document.body);

}