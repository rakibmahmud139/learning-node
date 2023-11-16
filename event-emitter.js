const EventEmitter = require("events");

const myEmitter = new EventEmitter();

//Listener

myEmitter.on("birthDay", () => {
    console.log("HAPPY BIRTHDAY TO YOU");
})


myEmitter.on("birthDay", (gift) => {
    console.log(`I will send a ${gift}`);
})



myEmitter.emit("birthDay", "watch")