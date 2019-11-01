import alt, { gameControlsEnabled } from "alt";
import game from "natives";

alt.log("Hey!");

alt.setInterval(() => {
    alt.log("Sending test event!");
    alt.emitServer("5", [JSON.stringify([{"test": "test"}, true])] );
}, 1000);

alt.onServer("Framework::Sync", (syncTree:JSON) => {
    // TODO: read sync tree & parse to internal array. so we can share client & server-side packages via packages.d.ts files!
    alt.log(syncTree);
});