//var,let and const
//Variables are hoisted
// console.log(num)
// var num = 1 //functional scoped
// var num = 2
// // {
// //     var num = 5
// //     num += 3
// // }

// function add() {
//     var num = 2
//     num+=3
//     return num
// }

// console.log(add())

// console.log(num)
// console.log(num)

// let nameData; //Block Scoped
// // let nameData = "Vanakam"
// nameData = "Lingesh"
// console.log(nameData)

// const nameData2 = "hello"; //Block scoped

// {
//     const nameData2 = "Hey Everyone"
//     console.log(nameData2)
// }

// console.log(nameData2)

//Data Types
//String,Numbers,Booleans,complex,BigInt -> primitive
//Arrays,Objects,Sets,WeakSets,Maps,WeakMaps,Symbols -> non-primitive
//null,undefined

const str = "Hello" //String
const num = 2 || 2.02 
const booleans = true || false
// console.log(parseInt(9007199254740991n + 2n))
let str2 = str

// console.log(str,str2.replace("H","J"))
            //0 1 2 3
// const arr = [1,2,3,4]
// const arr2 = [...arr]
// arr2[1] = 3
// console.log(arr,arr2)

// const obj = {
//     name:"Deepak",
//     "age-23":23
// }

// console.log(obj["age-23"])

//Operators
//Arithmetic,Assignment,Conditional,Logical,Ternary,Bitwise

//Arithmetic- +,-,*,/,**(Bodmas)
//Assignment- =,+=(ex:a+=2 == a=a+2),-=,*=,/=,**=,%
//Conditional- >=,<=,>,<,==, === , != , !==
//Logical- &&(and), ||(or), !(not)
//Ternary- ?:
//Null Coelision: ??,?.

// console.log(2**4)
// let a=2
// console.log(a+=3) //a=a+5

// console.log(1>'-1')

//Logical

// console.log(!("deepak" == "deepak" || 1>2))
//condition ? true value : false value
// console.log(0 ? 1 : 2)

// console.log(false ?? 2)

// let a = ["a","b","c"];
// console.log(a?.join(","))

function add(a,...b) {
  function dummy(b) {
    console.log(a+b)
  }

  dummy(2)
}

(function(a,b) {
    console.log(a-b)
})(2,3)


// function fact(a) {
//     if(a==0 || a==1) {
//       return 1
//     } else {
//       return a * fact(a-1)
//     }
//     //5 * 4 * 3 * 2 * 1 
// }

// console.log(fact(1))
// add(2,3,3,4,5,6)

// const arr = [2,3,4]
// console.log(...arr)

//Control Structures
//branching and looping
//if,if..else if.. else,switch
//for,for of,for in,while,do-while

// if(1==13) {
//   console.log("Hello")
// } else if(2==2) {
//  console.log("Else if")
// } else {
//     console.log("Else")
// }
// const a = 20;
// switch(a) {
//     case 1:
//         console.log("First")
//         break;
//     case 2:
//         console.log("Two")
//         break;
//     default:
//         console.log("Default")
// }

//for(initialization;condition;inc/dec){}
let sum = [2,3,4,5]
// let actualSum = 0;

// for(let i =0;i<sum.length;i++) {
//     actualSum+=sum[i]
// }


//Create a Grade System using if statement
let data = "dummy"
// console.log(actualSum)
const obj = {
  [data]:"sasa"
}
for(const num in obj) {
  console.log(num,obj[num])
}

const [two,three,four] = sum

const {age:age2} = {name:"Deepak",age:23}
console.log(age2)

// let numberData = Math.ceil(Math.random()* 8) 
// while(numberData != 7) {
//   console.log(numberData)
//   numberData = Math.ceil(Math.random()) * 9
// }

// do {
//   console.log("Hello")
// } while(false)

const obj2 = {
  name:"Deepak",
  dummy() {
    console.log(this.name)
  }
}

obj2.dummy()

function call(args,arg2) {
  console.log(args,arg2)
  console.log(this.name)
}

call.call(obj2,[2,34],2)

// console.log(Object.getOwnPropertyDescriptor(obj2,'name'))

Object.defineProperty(obj2,"name",{
  value:"deepak",
  configurable:false,
  enumerable:true,
  writable:true
})

for(const key in obj2) {
  console.log(key)
}