
const duplicateValues = function(inputArray) {
  let newArray=inputArray.map(item=>item*2)
  return newArray
}


const filterPeople = function(inputPeople) {
  
const OutputFlt= condicion=> condicion.age>18 && condicion.skills=="Frontend" 
  return inputPeople.filter(OutputFlt)
}




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

;

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

;

module.exports={
    duplicateValues,
    countNumbers,isPalindrome,filterPeople
   
};