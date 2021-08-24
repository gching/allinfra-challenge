/* eslint-disable no-console */
const fetchParseData = require("./fetchParseData");
const getTopThreeClosestPoints = require("./getTopThreeClosestPoints");
const { parsePoint } = require("./parsePointUtils");

const main = async () => {
  const args = process.argv;

  if (args.length !== 5) {
    console.log("Incorrect arguments provided.");
    return;
  }

  // Parse the arguments.
  const [, , xCoordAsString, yCoordAsString, dataUrl] = args;

  let fromPoint;
  try {
    fromPoint = parsePoint({
      xCoord: xCoordAsString,
      yCoord: yCoordAsString,
    });
  } catch (e) {
    console.log("There was an error in parsing your current location.");
    return;
  }

  let toPoints;
  try {
    toPoints = await fetchParseData(dataUrl);
  } catch (e) {
    console.log("There was an error in parsing the other locations.");
    return;
  }

  let threeClosest;
  try {
    threeClosest = getTopThreeClosestPoints(fromPoint, toPoints);
  } catch (e) {
    console.log("There was an error in calculating the closest locations.");
    return;
  }

  if (threeClosest.length === 0) {
    console.log("No locations are close to you.");
    return;
  }

  threeClosest.forEach(({ point, distance }) => {
    const { name } = point;
    console.log(`${name},${distance}`);
  });
};

main();
