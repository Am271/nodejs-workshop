events = require("events");
eventEmitter = new events.EventEmitter();

eventEmitter.on("cry", function() {
    console.log("i hear the cry");
}); //setup listener for the "cry" event

eventEmitter.emit("cry");
//generates the "cry" event