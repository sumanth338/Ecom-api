import { userModel } from '../features/user/user.model.js';

const basicAuthorization = (req, res, next) =>{
    // 1. check if authorization header is empty

    const authHeader = req.headers['authorization']

    if(!authHeader){
        return res.status(401).send("No authorization details found")
    }
    console.log(authHeader)

    if(!authHeader){
        return res.status(401).send("No authorization details found")
    }
    
    // 2 Extract the credentials. [Basic qpruirpwuropqwrte]
    const base64Credentials = authHeader.replace("Basic ", ' ');
    console.log(base64Credentials)

    //decode the credentials

    const decodedCredentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
    console.log(decodedCredentials) //[username:password]
    const credentials = decodedCredentials.split(':')

    const user = userModel.getAll().find(u => u.email === credentials[0] && u.password === credentials[1])

    if(user){
        next();
    }
    else{
        return res.status(401).send("Invalid Credentials")
    }
}

export default basicAuthorization;