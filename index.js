let num1 = prompt("Raqam kiriting")
let amal = prompt("Arifmetik amal kiriting")
let num2 = prompt("Ikkinchi raqam kiriting")

let resault = amal == "+" ? parseInt(num1)+ parseInt(num2) : amal == "-" ? num1-num2 : amal == "*" ? num1*num2 : amal == "/" ? num1/num2 : "No'to'g'ri amal"

console.log(resault);

let my = "Mening ismim Uktamov Javohir men 2008-yil 14-iyunda tug'ilganman.Hozirda 16 yoshdaman,biz oilda 6 kishimiz ota-onam, men va 3ta ukam.Men 33-IDUM maktabida o'qiyman"
let firstName = my.slice(21, 28)
let lastName = my.slice(13, 21)
let year = my.slice(33,41)
let day = my.slice(41,49)
let yearsOld = my.slice(73,75)
let school = my.slice(137, 144)


console.log(firstName.toLocaleUpperCase(),lastName.toUpperCase(),year.toLocaleLowerCase(),day,yearsOld,school);