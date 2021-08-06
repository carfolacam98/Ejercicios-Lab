console.log("holis")
import { parseString } from 'xml2js';


const xml = '<root>Hello world!</root>'

parseString(xml, function (err, result) {
    console.log(result); // Output: Hello world!
});
import { XMLHttpRequest } from "xmlhttprequest";
let xhttp=new XMLHttpRequest();
//Si es true todo se hace de forma asincrona
// -->Json
xhttp.open('GET','https://animechan.vercel.app/api/quotes',true);
xhttp.send();
xhttp.onload = function respuesta() {
    if (this.status == 200) {
       // JSON response  
      let objetoJson=JSON.parse(this.responseText)
      objetoJson.map(Element=>console.log(Object.keys(Element)))
    }
   
}



// --->XML
  
// xhttp.open('GET','https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658',true);
// xhttp.send();
// xhttp.onload = function respuesta() {
//     if (this.status == 200) {
//         xml2js.parseString(this.responseText, function (err, result) {
//             // console.log(result.ann.anime['0']["info"]  )
            
//             for (var element in (result.ann.anime['0']["info"] )) {
//                 if(result.ann.anime['0']["info"][element].img!==undefined){
//                     console.log(result.ann.anime['0']["info"][element].img['0']['$'])
                // }} });}}

