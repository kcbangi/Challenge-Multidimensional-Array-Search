function locate(array, target) {
  // do work here
  let result;
  let flatten = array.flat(Infinity);
  for (let i = 0; i < flatten.length; i++) {
    if (flatten[i] !== target) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

module.exports = locate;
