import {userModel} from './user.model.js'
import jwt from 'jsonwebtoken'

export default class UserController {
    signup(req, res){
        const {name, email, password, type} = req.body
       const user =  userModel.signup(name, email, password, type)
        res.status(201).send(user)
    }

    signin(req, res){
        const result = userModel.signin(req.body.email, req.body.password)
        if(!result){
            res.status(400).send("Invalid email or password")
        }
        else{
            const token = jwt.sign({id: result.id,email:result.email},'sjfaskljfsa;jf',{expiresIn:'1h'})
            res.status(200).send(token)
        }
    }
}