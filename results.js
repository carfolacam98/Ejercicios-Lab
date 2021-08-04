const request=require('./ejercicios');
console.log("El resultado de la funcion isPalindrome es: ",request.isPalindrome('pizara'))
console.log("El resultado de la funcion countNumbers es: ",request.countNumbers([1, 2, 8, 2, 9, 10, 5, 8, 1, 2]))
console.log("El resultado de la funcion filterPeople es: ",request.filterPeople([{ name: 'Adrian Zelada', age: 25, skills: 'Frontend'}, { name: 'Maria Luisa', age: 33, skills: 'Backend'}, { name: 'Elon Musk', age: 20, skills: 'Software Architect'}]))
console.log("El resultado de la funcion duplicateValues es: ",request.duplicateValues([1,2,3,4,5]));