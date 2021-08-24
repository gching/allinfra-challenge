const Point = require("./Point");

/**
 * Given the data, return a point with the x coordinate and y coordinate parsed to a number.
 * @param data
 * @returns {Point}
 */
const parsePoint = (data) => {
  const { name, xCoord, yCoord } = data;

  return new Point({
    name,
    xCoord: Number.parseFloat(xCoord),
    yCoord: Number.parseFloat(yCoord),
  });
};

/**
 * Given the data, parse into a point while checking if name is valid.
 * @param data
 * @returns {Point}
 */
const parsePointWithName = (data) => {
  const { name } = data;
  if (name == null || name === "") {
    throw new Error("Invalid name on a point");
  }

  return parsePoint(data);
};

module.exports = {
  parsePoint,
  parsePointWithName,
};
