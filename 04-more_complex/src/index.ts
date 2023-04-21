import { WAFunctions } from "./types";

const getWAFunctions = (): WAFunctions => {
    return {
        // @ts-ignore
        version: Module.cwrap("version", "number")
    };
}

const onFileSelected = async (e: Event) => {
    const { version } = await getWAFunctions();
    console.log(version());
}

const init = async () => {
    const $file = document.querySelector("#file");

    $file?.addEventListener("input", onFileSelected, false);
}

window.addEventListener("DOMContentLoaded", init, false);
