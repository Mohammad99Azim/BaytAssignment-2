function contains(obj, value) {
  for (var key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      // Recursively call contains on the nested object
      if (contains(obj[key], value)) {
        return true;
      }
    } else {
      if (obj[key] === value) {
        return true;
      }
    }
  }
  return false;
}
