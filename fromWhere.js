module.exports = function fromWhere(registrationNumber) {
    switch(registrationNumber) {
      case "CY":
        return "Bellville";
      case "CJ":
        return "Paarl";
      case "CA":
        return "Cape Town";
      case "CC":
        return "Some other place!"
      default:
        return registrationNumber;
              }
  }