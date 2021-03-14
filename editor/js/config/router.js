import * as home from "../views/home.js";
import * as not_found from "../views/not_found.js";


export const PATHS = {
    home :          {show: () => home.show()},
    not_found :     {show: () => not_found.show()},
};

export function load(){
    const params = get_params(window.location.hash.slice(1).toLowerCase());
    document.body.innerHTML = '';

    switch(params[0]){
        case "":     
        case undefined:     PATHS.home.show();                          break;    
        default:            PATHS.not_found.show(params.slice(1));      break;
    }

}


function get_params(url){
    const params = url.split('/');
    return params.slice(1);
}