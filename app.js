console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let watching = new Promise((resolve, reject) => { //declare variable 'watching' assign new promise object
    let userWatchingLiveStream = false; //inside constructor declare variable 'userWatchingLiveStream'

    if (userWatchingLiveStream == true) {

        resolve("Thumbs up and Subscribe"); //resolve method calls with msg if true

    } else {

        reject("User left"); //reject method calls with msg if false
    }

});

// ^^^ promise object ^^^ represents eventual completion or failure of asynch operation and the value from it

watching //call 'watching'. Then add promise chain (.then, .catch)
    .then((message) => console.log(message)) // take in a message and console.logs the message
    .catch((error) => console.log(error)); // take in an error and console.logs the error




/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function watchTurorialCallback(callback, errorCallback) {
  let userLeft = false;

  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

watchTurorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

*/

/*Ben's

---------------------------------------------------------------------------

let watching = new Promise ((resolve, reject) => {

    let userLeft = Math.round(Math.random());

    if (userLeft ) { // or : if (userLeft == 1)
        reject({
            name: "User Left",
            message: ":(",
        });
    }else{
        resolve("Thumbs up and Subscribed");
    }
});

watching.then ((res) => alert (res))
.catch((err) => console.error(`${err.name} ${err.message}`));


--------------------------------------------------------------------------

*/

/*
async function watching() {
    let userLeft = Math.round(Math.random());

    if (userLeft) {
        throw new Error("User LEft :(");
    } else {
        return "Thumbs up and Subscribe";
    }
}


try {
    watching();
} catch (error) {
    console.error(`${error.name} ${error.message}`);
}

*/