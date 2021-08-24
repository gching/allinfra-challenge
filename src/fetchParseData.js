const getCSV = require("get-csv");
const { parsePointWithName } = require("./parsePointUtils");

/**
 * Fetches and parses a CSV given a URL and returns a list of points.
 * @param dataUrl - The URL to fetch data.
 * @returns - A list of points.
 */
const fetchParseData = async (dataUrl) => {
  if (dataUrl == null || dataUrl === "") {
    throw new Error("dataUrl must be valid.");
  }

  // Fetches the data.
  const data = await getCSV(dataUrl, { headers: false });

  // Go through each row and return a Point.
  return data.map((row) => {
    if (row.length !== 3) {
      throw new Error("Invalid data.");
    }

    return parsePointWithName({
      name: row[0],
      xCoord: row[1],
      yCoord: row[2],
    });
  });
};

module.exports = fetchParseData;
