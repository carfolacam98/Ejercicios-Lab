// Dado un array de numeros [1,2,3,4,5], se pide una funcion que me devuelva el doble de cada una de los valores.
// Input [1,2,3,4,5]  Output [2,4,6,8,10]
// const duplicateValues = function(inputArray) {
//   let newArray=inputArray.map(item=>item*2)
//   return newArray
// }

//duplicateValues([1,2,3,4,5]);
// const filterPeople = function(inputPeople) {
  
// const OutputFlt= condicion=> condicion.age>18 && condicion.skills=="Frontend" 
//   return inputPeople.filter(OutputFlt)
// }

// filterPeople([{ name: 'Adrian Zelada', age: 25, skills: 'Frontend'}, { name: 'Maria Luisa', age: 33, skills: 'Backend'}, { name: 'Elon Musk', age: 20, skills: 'Software Architect'}]);

// Given an integer x, return true if x is palindrome integer.
// Dado una palabra x, retornar la palabra invertida y determinar si es un palíndromo.
// 
// ejemplo 1.
// Input x = pizarra
// Output: palabra invertida : arrazip, es palindromo? : false;

// ejemplo 2.
// Input x = reconocer
// Output: palabra invertida : reconocer, es palindromo? : true;
//node tecnicos
// var isPalindrome = function(x) {
//     let r=x.toLowerCase();
//     let reverse=[];
//     let bool=true;
//     for (var i = 0; i < r.length; i++){
//         reverse.push(r[(r.length-1)-i])
//         if((r[i])==(r[(r.length-1)-i])){            
//         }else{
//             bool=false
//         }
//     }
  
//     return `palabra invertida: ${reverse.join('')} es palindromo? :${bool}.`
    
// };

// console.log(isPalindrome('pizara'));

var countNumbers = function(x) {
    let tuple={};
   
    x.forEach(element => {
        tuple[element]=(tuple[element]||0)+1
    });
    let hola=Object.keys(tuple)
    let ji=hola.map(item=>console.log(typeof(item)))

        
    console.log(ji)
};

countNumbers([1, 2, 8, 2, 9, 10, 5, 8, 1, 2]);
