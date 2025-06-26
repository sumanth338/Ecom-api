
export class userModel {
    constructor(name, email, password, type, id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.id = id;
    }
    static signup(name, email, password, type){
        const newUser = new userModel(name, email, password, type)
        newUser.id = user.length +1
        user.push(newUser)
        return newUser;
    }


    static signin(email, password){

        const result = user.find(userItem => userItem.email === email && userItem.password === password)
        return result;
    }

    static getAll(){
        return user;
    }
}
let user =[
    {
        id: 1,
        name: "Seller user",
        email:"seller@ecom.com",
        password:"123456",
        type:"seller"
    }
]
