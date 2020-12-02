const checaIdade = idade => new Promise((resolve, reject) => {
  setTimeout(() => idade > 18 ? resolve() : reject(), 2000);
});

checaIdade(20)
  .then(() => console.log('Maior do que 18'))
  .catch(() => console.log('Menor do que 18'));
