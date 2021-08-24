class Point {
  /**
   * Constructs a point and sees if it is valid.
   * @param name - Name of the point.
   * @param xCoord - X coordinate of a point
   * @param yCoord - Y coordinate of a point.
   */
  constructor({ name, xCoord, yCoord }) {
    // Check to see if xCoord or yCoord are valid.
    if (!Point.isValidCoordinate(xCoord) || !Point.isValidCoordinate(yCoord)) {
      throw new Error("Coordinates for the point are invalid.");
    }

    this.name = name;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  /**
   * Checks to see if the passed in coordinate is valid.
   * @param coord - the coordinate to check.
   * @returns {boolean} - true if valid, false if not.
   */
  static isValidCoordinate(coord) {
    return Number.isFinite(coord);
  }
}

module.exports = Point;
