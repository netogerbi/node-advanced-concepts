// node myFle.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // check one: Any setTime, setInterval, setImmediate
    // check two: any pending OS tasks (eg. server listening ports)
    // check three: Any pending long run operations (eg. fs module)
    return pendingTimers.length || pendingOsTasks.length || pendingOperations.length;
}

// entire body executes in one 'tick'
while (shouldContinue()) {
    // 1) Node looks at any pendingTimers and sees if any function are ready to be called.
    // 2) Node looks at pendingOsTasks and pendingOperations and call relevant callbacks.
    // 3) Pause execution. Continues when:
    //  - a new pendingOSTask is done;
    //  - a new pendingOperation is done;
    //  - a timer is about to complete;
    // 4) Look at pendingTiemrs, call any setImmediate;
    // 5) handle any 'close' events
}
// exit back to terminal