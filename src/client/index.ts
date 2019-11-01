import alt, { gameControlsEnabled } from "alt";
import game from "natives";

import { Client } from "./include/client/index";
let c:Client = new Client();
export {
    c
};

/*
alt.setInterval(() => {
    alt.log("Sending test event!");
    alt.emitServer("5", [JSON.stringify([{"test": "test"}, true])] );
}, 1000);
*/

alt.emitServer("3", [JSON.stringify([{"test": "test"}, true])] );
alt.emitServer("3", [JSON.stringify([{"test": "test"}, true])] );

// TODO: Move to dev!
alt.on("consoleCommand", (...data:any) => {
    alt.emitServer("consoleCommand", [JSON.stringify(data)] );
});