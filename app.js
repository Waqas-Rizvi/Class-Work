//"Chapter#35-"

function agecalculator(){
var year = prompt("Enter year")
var month = prompt("Enter month")
var date = prompt("Enter date")
var birthdate = new Date(month + date + ", " + year)
var a = new Date()
var current = a.getTime()
var birth = birthdate.getTime()
var total = (current-birth)/(1000*60*60*24*30*12)
alert(total)}

// agecalculator()

function add(a,b,c){
    alert(a+b+c)
}

//add(5,7,4)

function add2(){
    var a = 5
    var b = 10
    var c = a + b
    return c
}

/*var z = add2()
alert(z)*/

