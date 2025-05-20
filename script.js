// var a=10;
// var b=5;         
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// function add(){
//     var a=10;
//     var b=30;
//     consol.log(a*b)
// }
// function multi(a,b){
//     console.log(a*b)
// }
// multi(20,30)
// multi(50,30)
// multi(10,30)
// var a=5;
// var b='5';
// console.log(a==b)

// var a = 10
// var b = 20
// console.log(`${a}+${b}=${a+b}`)


// n=i+
// while(n<=10){
// if(n%2==0)
// {
//     console.log(`${n}even`)
// }

// var arr=[10,20,30,40,50,60]

// for(var index in arr){
//     console.log(index)
// }

// for(var key of arr){
//     console.log(key)
// }


// var obj={name:"chinnu",dept:"computer science"}
// for(var key in obj){
//     console.log(key)
//     console.log(obj[key])
// }




//spread operator
// var arr=[1,2,3,4,5]
// var arr2=[...arr,6,7,8]
// console.log(arr2)


//destructturing operator
// var marks=[90,99,97,98,"fail"]
// var [m1,m2,m3,m4,m5]=marks;
// console.log(m1)
// console.log(m2)
// console.log(m3)
// console.log(m4)
// console.log(m5)

// callbcak function
function saybye(){
    console.log("bye")
}
function demo(name,callback){
    console.log("hello "+name)
    callback()
}
demo("abi chello",saybye);

const btn=document.getElementsById("btn");
btn.onclick=function(){
    window.open("https://www.instagram.com/")
    alert("welcome to instagram")
}