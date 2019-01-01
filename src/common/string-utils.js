export function isEmpty(value) {
  return !value || value.length === 0;
}

export function isPositiveNumber(value) {
  return /^\+?(0|[1-9]\d*)$/.test(value);
}
