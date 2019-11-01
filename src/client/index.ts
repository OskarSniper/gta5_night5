import alt from "alt";

alt.log("Hey!");

alt.setInterval(() => {
    alt.log("Sending test event!");
    alt.emitServer("5", [JSON.stringify([{"test": "test"}, true])] );
}, 1000);

alt.onServer("Framework::Sync", (syncTree:JSON) => {
    alt.log(syncTree);
});