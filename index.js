console.log('Hello node')
let myName = 'Max'
let myAge = 43
let concotination = myName + ' ' + myAge
console.log(concotination)
console.log(`${myName} ${myAge}`)
const myCity = {
    city: 'New York',
    cityGreeting: function(){
        console.log('Greeting!!')
    }
}
function printMyName(){
    console.log("My name is Max")
}
myCity.cityGreeting()
console.table(myCity)
console.table(myName)
// setInterval(printMyName, 1000)
const user ={
    userName: 'Misha',
    userAge: 43,
    userSex: true
}
const{userName, userAge} = user
console.log(userName)
console.log(user.userSex)
fetch('https://jsonplaceholder.typicode.com/todos')
.then(responce => responce.json())
.then(data => console.log(data))
.catch(error => console.error(error))