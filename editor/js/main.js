import { load } from "./config/router.js";

window.onload = load;
window.onhashchange = load;

location = "/editor/#/";