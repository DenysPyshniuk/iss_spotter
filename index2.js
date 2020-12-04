const { nextISSTimesForMyLocation } = require("./iss_promised");

// const {
//   fetchMyIP,
//   fetchCoordsByIP,
//   fetchISSFlyOverTimes,
// } = require("./iss_promised");


// fetchMyIP()
//   .then(body => console.log(body));

// fetchCoordsByIP()
//   .then(body => console.console.log(body));

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then((body) => console.log(body));
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });