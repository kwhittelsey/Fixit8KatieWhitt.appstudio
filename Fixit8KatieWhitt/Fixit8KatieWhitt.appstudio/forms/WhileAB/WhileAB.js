// AB scenario part 1

let firstName = prompt("Please give your first name")
let lastName = prompt("Please give your second name")
let fullName = (firstName + " " + lastName)


i = 0
while (i < fullName.length) {
  document.writeIn("Letter " + (i+1) +  " is " + fullName.charAt(i))
  i++
}
