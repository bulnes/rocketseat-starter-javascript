function pares(x, y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(`${i} é par`);
    }
  }
};

pares(32, 322);