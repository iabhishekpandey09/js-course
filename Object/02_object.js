// const user = {} // Non SingleTon Object

// user.id = "123"
// user.name = "Abhishek"

// console.log(user)

// const user = new Object() // SingleTon Object

//we can store nested object in a object

const user ={
    email:"abhi@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Abhishek",
            lastName: "Pandey"
        }
    },
    location:"Baddi,Hp",
    University:"Chitkara University"
}

// console.log(user)

// console.log(user.fullname.userFullname.firstName)

console.log(user.fullname.userFullname)


// Merge to Object

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}

console.log(obj3)


// Object.keys(object_name) will give the keys
// Object.values(object_name) will give the values which is store in the keys
// Object.entries(object_name) will give array as ouput in which keys and their value will be their
