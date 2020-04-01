// AB scenario part 1

let firstName = prompt("Please give your first name")
let lastName = prompt("Please give your second name")
let fullName = (firstName + " " + lastName)


i = 0
while (i < fullName.length) {
  document.writeIn("Letter " + (i+1) +  " is " + fullName.charAt(i))
  i++
}
// AB scenario part 2

let names = ["Bob", "Janet", "Tom", "Bob", "Randy", "Elizabeth", "Kim", "Nancy"]

 for (let i = names.length-1; i >= 0; i--) {  
         document.writeIn(names[i])}
// AB scenario part 5
function summedNumber(num1, num2) {
   let answer = num1 + num2
   return answer
}
let number1 = parseInt(prompt("Number One"))
let number2 = parseInt(prompt("Number Two"))
let newAnswer = (number1 + number2)
document.writeIn(`The sum of ${number1} and ${number1} is ${newAnswer}.`)