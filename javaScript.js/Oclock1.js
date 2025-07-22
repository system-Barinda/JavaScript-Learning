function past(h, m, s) {
  const baseDate = new Date();
  const setTime = new Date(baseDate);
  setTime.setHours(h, m, s, 0); // zero milliseconds

  const midnight = new Date(baseDate);
  midnight.setHours(0, 0, 0, 0);

  return setTime.getTime() - midnight.getTime();
}
