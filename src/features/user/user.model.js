export class userModel {
    constructor(name, email, password, type, id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.id = id;
    }
    static Signup(name, email, password, type){
        const newUser = new userModel(name, email, password, type)
        newUser.id = user.length +1
        user.push(newUser)
        return newUser;
    }

    static Signin(email, password){
        const user = user.find(userItem => userItem.email === email && userItem.password === password)
        return user;
    }
}

var user =[
    {
        id: 1,
        name: "Seller user",
        email:"seller@ecom.com",
        password:"123456",
        type:"seller"
    }
]