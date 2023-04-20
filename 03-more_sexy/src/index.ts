import { WAFunctions } from "./types";

let waFuncs: WAFunctions|null = null;

const getWAFunctions = async () => {
    if (waFuncs === null) {
        
    }
    
    return waFuncs;
}

const onButtonClick = async (e: Event) => {
    e.preventDefault();
}

const init = async () => {
    const $button = document.querySelector("#button");

    $button?.addEventListener("click", onButtonClick, false);
}

window.addEventListener("DOMContentLoaded", init, false);
