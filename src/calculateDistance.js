/**
 * Calculates the distance between two points with 4 decimal place.
 * @param fromPoint {Point} - The initial point to calculate distance from
 * @param toPoint {Point} - The destination point to calculate distance from
 * @returns {number} -  Distance between 2 points to 4 decimal places.
 */
const calculateDistance = (fromPoint, toPoint) => {
  if (fromPoint == null || toPoint == null) {
    throw new Error("fromPoint and toPoint are required");
  }

  // Calculate the distance.
  const { xCoord: xFromCoord, yCoord: yFromCoord } = fromPoint;
  const { xCoord: xToCoord, yCoord: yToCoord } = toPoint;

  // Pyth. theorem.
  const distance = Math.sqrt(
    (xToCoord - xFromCoord) ** 2 + (yToCoord - yFromCoord) ** 2
  );

  if (Number.isNaN(distance)) {
    throw new Error("Calculated distance is NaN");
  }

  // Round to 4 decimals, and parse it back into a float to be represented as a number.
  return Number.parseFloat(distance.toFixed(4));
};

module.exports = calculateDistance;
