import {userModel} from './user.model.js'

export default class UserController {
    signup(req, res){
        const {name, email, password, type} = req.body
       const user =  userModel.Signup(name, email, password, type)
        res.status(201).send(user)
    }

    signin(req, res){
        const result = userModel.Signin(req.body.email, req.body.password)
        if(!result){
            res.status(400).send("Invalid email or password")
        }
        else{
            res.send("Login successful")
        }
    }
}