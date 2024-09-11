function asynFunc1() {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
       console.log("Data1");
       resolve("Success");
   }, 4000);
  });
}
function asynFunc2() {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
       console.log("Data2");
       resolve("Success");
   }, 4000);
  });
}

console.log("Fetching data1...");
let p1 = asynFunc1();
p1.then((res) => {
    console.log("Fetching data2...");
    let p2 = asynFunc2();
    p2.then((res) => {
      console.log(res);
    });
});