function api(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data = ", dataId);
            resolve("Success");
        }, 2000);
    });
}

async function getWeatherData() {
    console.log("Getting data1...");
    await api(1);
    console.log("Getting data2...");
    await api(2);
    console.log("Getting data3...");
    await api(3);
    console.log("Getting data4...");
    await api(4);
 }
//TODO: IIFE EXAMPLE

(async function () {
   console.log("Getting data1...");
   await api(1);
   console.log("Getting data2...");
   await api(2);
   console.log("Getting data3...");
   await api(3);
   console.log("Getting data4...");
   await api(4);
})();