//Creati un loop care sa numere de la 0 pina la 10 folosint for, wihle si do while.

// for (i=0; i<=10;i++){
//     console.log(i)
// }

// let a = 0;
// while(a<=10){
//     console.log(a)
//     a++;
// }

// let b =0
// do { console.log(b)
//      b++;}
//      while(b<=10)

//Creati un for loop care sa afiseze pe rand fiecare litera dintr-un string.

// let c = "Chisinau-Botanica"
// let e = c.length

//  for(e=c.length; e>=0; e--){
//     let d = c.charAt( c.length - e)
//     console.log(d)
//  }

//	Creati o functie care sa indeplineasca exercitiile de mai sus, folosind arrow 
//function, function declaration si function expression. La exercitiul cu numaratul,
//functia tebuie sa primeasca numarul pina la care este nevoie de numarat, iar la 
//afisarea literelor trebuie sa primeasca ca argument stringul.

// const arrowFunc = (a) =>{
// for (i=0; i<=a;i++){ 
//     console.log(i)  
//    }
// }
// console.log(arrowFunc(70))

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// const arrowFunc = (c) => {
//        let e = c.length
//   for(e=c.length; e>=0; e--){
//       var d = c.charAt( c.length - e)
//       console.log(d)
//   }
//  return d;
// }
// console.log(arrowFunc("Chisinau-Botanica"))

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// function funcDeclaration(){
//      let c= "Chisinau-Botanica"
//       let e = c.length

//  for(e=c.length; e>=0; e--){
//      var d = c.charAt( c.length - e)
//      console.log(d)
//   }
//  return d;
// }
// console.log(funcDeclaration())

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

// function funcDeclaration(c){
//       let e = c.length
//  for(e=c.length; e>=0; e--){
//      var d = c.charAt( c.length - e)
//      console.log(d)
//   }
//  return d;
// }
// console.log(funcDeclaration("Chisinau-Botanica"))
//
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

// const funcExpression = function nume(){
//     let c= "Chisinau-Botanica"
//           let e = c.length
//  for(e=c.length; e>=0; e--){
//      var d = c.charAt( c.length - e)
//      console.log(d)
//   }
//  return d;
// }
// console.log(funcExpression())

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\