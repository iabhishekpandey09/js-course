const mySym = Symbol("key1")
const user = {
    name: "Abhishek",
    age: 23,
    email:"abhi@gmail.com",
    [mySym]:"Key1"
}

console.log(user)
console.log(typeof user[mySym])

user.email = "abhi1@gmail.com"
Object.freeze(user)
user.email = "abhi@gmail.com"
console.log(user)