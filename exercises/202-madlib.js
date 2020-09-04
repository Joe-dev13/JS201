// Write a function 'madlib', which is given a name and a subject.
// It should return a new string: (name)'s favorite subject in school is (subject).
// Example: madlib('Anushka', 'art') should return "Anushka's favorite subject in school is art."

var name = 'Anushka'
var subject = 'art'

function madLib() {
 return (`${name}'s favortie subject is ${subject}`)
}
console.log(madLib());