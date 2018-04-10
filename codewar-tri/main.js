function isTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  } else if (a + b <= c) {
    return false;
  } else if (c + b <= a) {
    return false;
  } else if (a + c <= b) {
    return false;
  }

  return true;
}