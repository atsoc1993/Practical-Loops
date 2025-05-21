function CallerThree() {
    console.log("Hello Caller #3! Please hold!")
}
function CallerTwo() {
    console.log("Hello Caller #2! Please hold!")
    CallerThree();
}
function CallerOne() {
    console.log("Hello Caller #1! Please hold!")
    CallerTwo();
    console.log("Sorry about the wait Caller #1, how can I help you?")
}

CallerOne();