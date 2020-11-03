// array de 3 alunos, eles tem 2 atributos (name, grade)

(() => {
  const students = [
    {
      name: "Grace",
      grade: 7
    },
    {
      name: "Paul",
      grade: 4
    },
    {
      name: "Jennifer",
      grade: 10
    }
  ];

  // funcão que retorna somente os alunos aprovados (grade >= 7)
  function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
  }

  const approvedStudents = getApprovedStudents(students);
  
  console.log('\n Alunos aprovados: ')
  console.log(approvedStudents); // alunos aprovados

  console.log('\n Lista de alunos: ')
  console.log(students)
  
})();
