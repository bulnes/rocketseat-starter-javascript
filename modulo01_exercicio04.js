function experiencia(anos) {
  if (anos > 6) {
    return 'Jedi Master';
  } else if (anos > 3 && anos <= 6) {
    return 'Avançado';
  } else if (anos > 1 && anos <= 3) {
    return 'Intermediário';
  } else if (anos >= 0 && anos <= 1) {
    return 'Iniciante';
  } else {
    return 'Não consegui cancular';
  }
}

var anosEstudo = 1;
var exp = experiencia(anosEstudo);

console.log(`Você é ${exp}`);