function nb_year(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    p0 = Math.floor(p0); // ensure population stays an integer
    years++;
  }
  return years;
}
console.log(nb_year(1500000, 0.25, 1000, 2000000));