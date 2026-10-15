// console.log("hello using js");
//  const a=20;
//  console.log("a="+a);


// var a=10;
// if(a>30){{
//     // let a=100;
//     var a=100;
//     console.log("a inside the block="+a)
// }
// console.log("a outside the block="+a); 
// }



//as an expression
// const sum=function(a,b){
//     return a+b;
// }
// const data=sum(20,20);
// console.log("result="+data);



// ACTION FUNCTION
// const msg=(mymsg)=>{
//     console.log("hiii"+mymsg)
// }
// msg("welcome to FSD");





// const mysqrt=(val)=>{
//     return Math.sqrt(val);
// }
// const result=mysqrt(20)
// console.log("Result="+result);




// IIFE
// (()=>{console.log("Hiii......IIFE")})();




// function sum(a,b){
//     return a+b;
// }
// const result=sum(20,50);
// console.log("sum"+result);




// function login(msg,error){
//     if(error){
//         console.log("error is"+error);
//     }
//     else{
//         console.log("Welcome"+msg)
//     }
// }
// function loginVerification(username,password,clok){
//     if(username=="ptomer40" && password=="1234556"){
//          clbk("success",null);
//     }else{
//         clbk(null,"Username or password is incorrect");
//     }
// }
// loginVerification("ptomer40","1234556",login)




// console.log("first")
// // setTimeout(()=>{console.log("second")},1000)
// for(i=0;i<100000;i++){
//     console.log("second")
// }
// console.log("third")



//callback hell
// setInterval(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 setTimeout(()=>{
//                     setTimeout(()=>{
//                         setTimeout(()=>{
//                         console.log("1")},1000)
//                     console.log("2")},1000)
//                 console.log("3")},1000)
//             console.log("4")},1000)
//         console.log("5")},1000)
//     console.log("6")},1000)
// console.log("7")},1000)



//promises
const myPromise=new Promise((resolve,reject)=>{
    username="aayush";
    password="1234"
    if(username=="aayush" && password=="1234"){
        resolve("success")
    }else{
        reject("username and passwords is incorrect")
    }})
 
    myPromise.then((msg)=>{
        console.log(msg)
    }).catch((msg)=>{
        console.log(msg)
    }).finally(()=>{
        console.log("all the  resource have been closed/memory released")
    })
    

    