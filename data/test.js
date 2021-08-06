const fetch = require("node-fetch")

fetch("https://api.covidtracking.com/v1/states/daily.json")
.then(response=>response.ok? response.text():console.log("noup"))
.then(function(response2){
    const fecha=20210306
    const data=JSON.parse(response2)
    // console.log(data)
    let tuple={}
    let tupleprof={}
    let array=[]
    let countEstado=0
    let countP=0
    let countN=0
    let countHosp=0
    data.forEach(element => {
        if(element["date"]==fecha){
             array.push(element["state"])
        }
    });
    let repetidos=data.map(elem=>elem["hospitalized"])
    console.log(Object.keys(data[0]))
    let total = repetidos.reduce((a, b) => a + b, 0);
    data.forEach(element => {
        if(element["date"]<=fecha){
             if (array.includes(element["state"])){
                 
                    countP=countP+element["positiveTestsViral"]
                    countN=countN+element['negativeTestsViral']
                    countHosp=countHosp+element['hospitalized']
                 tuple[element["state"]]=` El estado ${element["state"]} reporto hasta el momento, numero de pruebas positivas: ${countP}, numero de pruebas negativas ${countN} y un promedio de hospitlizaciones de: ${countHosp/total}`
                
             }
        }
        
    });
    console.log(tuple)
})