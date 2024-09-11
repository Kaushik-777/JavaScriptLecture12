function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Data", dataId);
        resolve("Success");
        if(getNextData) {
            getNextData();
        }
    }, 5000);
  });
}

let promise = getData(1);
promise.then((res) => {
  console.log(res);
})



//FIXME: second example
/*const getPromise = () => {
  return new Promise((res, reject) => {
    console.log("I am a Promise");
    res("Success");
   // reject("Error");
  });
}

let promise = getPromise();
promise.then((res) => {
  console.log("Promise fulfield", res);
});*/
