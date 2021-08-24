const calculateDistance = require("./calculateDistance");
/**
 * Gets the top three closest points given a from point and a list of to points.
 * @param fromPoint - The point to calculate the closest points from.
 * @param toPoints - A list of points to calculate against the fromPoint.
 * @returns - An array of points with their distances from fromPoint.
 */
const getTopThreeClosestPoints = (fromPoint, toPoints) => {
  if (fromPoint == null || toPoints == null) {
    throw new Error("Arguments are required");
  }

  if (toPoints.length === 0) {
    return [];
  }

  // First generate an array of points with their distances from fromPoint.
  const toPointsWithDistances = toPoints.map((toPoint) => {
    return {
      point: toPoint,
      distance: calculateDistance(fromPoint, toPoint),
    };
  });

  // Sort the array in place, where the smallest distances are first.
  toPointsWithDistances.sort((a, b) => {
    return a.distance - b.distance;
  });

  // Just get the first 3, regardless of how many elements in the array.
  return toPointsWithDistances.slice(0, 3);
};

module.exports = getTopThreeClosestPoints;
