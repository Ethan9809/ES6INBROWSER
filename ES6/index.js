import a from "./b"
const b = {
  a
}
console.log(b.a.a)

setTimeout(()=>{
  console.log(b.a.a)
},3000)
