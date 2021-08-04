
const duplicateValues = function(inputArray) {
  let newArray=inputArray.map(item=>item*2)
  return newArray
}

duplicateValues([1,2,3,4,5]);
const filterPeople = function(inputPeople) {
  
const OutputFlt= condicion=> condicion.age>18 && condicion.skills=="Frontend" 
  return inputPeople.filter(OutputFlt)
}

filterPeople([{ name: 'Adrian Zelada', age: 25, skills: 'Frontend'}, { name: 'Maria Luisa', age: 33, skills: 'Backend'}, { name: 'Elon Musk', age: 20, skills: 'Software Architect'}]);



var isPalindrome = function(x) {
    let r=x.toLowerCase();
    let reverse=[];
    let bool=true;
    for (var i = 0; i < r.length; i++){
        reverse.push(r[(r.length-1)-i])
        if((r[i])==(r[(r.length-1)-i])){            
        }else{
            bool=false
        }
    }
  
    return `palabra invertida: ${reverse.join('')} es palindromo? :${bool}.`
    
};

console.log(isPalindrome('pizara'));

var countNumbers = function(x) {
    const tuple={};
   
    x.forEach(element => {
        tuple[element]=(tuple[element]||0)+1
    });
    const keys=Object.keys(tuple)
   
    const template=keys.map(function(item){
        let complement="";
        if (tuple[item]==1){ complement="vez"}else{complement="veces"}
        return `el numero ${item} se repite ${tuple[item]} ${complement}`})

        
    return template.join()
};

countNumbers([1, 2, 8, 2, 9, 10, 5, 8, 1, 2]);
