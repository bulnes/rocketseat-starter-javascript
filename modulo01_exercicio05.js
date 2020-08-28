var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

for (const user of usuarios) {
  const { nome, habilidades } = user;
  const formatHabilidades = habilidades.join(', ');
  
  console.log(`${nome} possui as habilidades: ${formatHabilidades}`);
}