const persons = {
  "Albert Einstein": { born: 1879, died: 1955 },
  "Marie Curie": { born: 1867, died: 1934 },
  "Nikola Tesla": { born: 1856, died: 1943 },
  "Leonardo da Vinci": { born: 1452, died: 1519 }
}

function ages(persons) {
  const res = {}
  for (const name in persons) {
    res[name] = persons[name].died - persons[name].born
  }
  return res
}

console.log(ages(persons))