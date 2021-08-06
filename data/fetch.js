const fetch = require("node-fetch")

fetch('https://randomuser.me/api/?nat=gb')

  .then(response =>response.ok? response.text():console.log("nou"))
  .then(function(data){
      var articles
      const formatjson=JSON.parse(data)
    articles=formatjson['results']})
  
    // if (response.ok){
    //     console.log(response.text())
    // }
      
    // fetch('https://randomuser.me/api/?nat=gb')
    // .then( response => {
    //   if(response.status == 200) {
    //     return response.text();
    //   } else {
    //     throw "Respuesta incorrecta del servidor" 
    //   }
    // })
    // .then( responseText => {
    //   let users = JSON.parse(responseText).results;
    //   console.log('Este es el objeto de usuarios', users);
    // })
    // .catch( err => {
    //   console.log(err);
    // });