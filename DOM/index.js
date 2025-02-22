const h1 = document.querySelector("div h2");

const div = document.querySelector("div")

// h1.insertAdjacentHTML("beforeEnd","<p>Deepak</p>")
// import sasa,{dummy as dummy2} from "./variables.js";

const input = document.querySelector("input");

// input.value = "Dummy"

// input.setAttribute("value","dummy")

// const ul = document.querySelector("ul")
// const li = document.getElementsByTagName("li")
// const li2 = document.querySelector("li")
// for(let i =0;i<=10;i++) {
//     const li = document.createElement("li")
//     li.textContent = i
//     ul.append(li)
// }

// console.dir(ul)
// console.dir(li)
// console.dir(li2)

// const p =document.createElement("p")

// p.textContent = "Hey"

// h1.append(p)

// const cloneh1 = h1.cloneNode(true)
// h1.removeChild(p)

// const template = document.querySelector("template")
// console.log(template)
// const templateData = document.importNode(template.content,true)

// templateData.firstElementChild.firstElementChild.textContent = "Something"

// document.body.append(templateData)

// function temp(str,str2) {
//     return [str,str2]
// }

// console.log(temp`Hello ${"Dummy"} is`)

// const h1 = document.querySelector("h1")

// h1.onclick = (eve)=> {
//      console.log(eve)
// }

// h1.onclick = ()=> {
//     console.log("Hello")
// }

// setTimeout(()=> {
//    console.log("Hi")
// },6000)

// h1.addEventListener("click",(eve)=> {
//     console.log(eve)
// })

// console.log("Hey")

// h1.addEventListener("click",(eve)=> {
//     console.log("Hey")
// })

// const getCoords = new Promise((res, rej) => {
//   navigator.geolocation.getCurrentPosition(
//     (coords) => {
//         res(coords)
//     },
//     (err) => {
//       rej(err);
//     }
//   );
// });

// const timer = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Timer");
//   }, 5000);
// });

// timer.then((val) => {
//     console.log(val)
//   getCoords.then((val) => {
//     console.log(val);
//   });
// });

// async function fn() {
//    const time = await timer
//    const coords = await getCoords
//    console.log(time,coords)
// }

// fn()

// setTimeout(() => {
//   return 10;
// }, 3000);



// timer.then(()=> {
//     return 10
// }).then((val)=> {
//     console.log(val)
// })

h1.addEventListener("click",(eve)=> {
    eve.stopImmediatePropagation()
    console.log("Event 1")
})

h1.addEventListener("click",(eve)=> {
    console.log("Event 2")
})

div.addEventListener("click",()=> console.log("Div clicked"))