function temHabilitade(skills) {
  return skills.some((skill) => skill.toLowerCase() === 'javascript');
}

var skills = ["JavaScript", "ReactJS", "React Native"];
var tem = temHabilitade(skills);

console.log(`Tem? ${tem}`);