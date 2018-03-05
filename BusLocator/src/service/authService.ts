import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Response } from "@angular/http/src/static_response";
import { UserModel } from "../models/user";

@Injectable()
export class AuthService{

constructor(private http:Http){

}

userExist(email:String){
    return this.http.post("https://tranquil-meadow-57430.herokuapp.com/checkuser",{email:email}).map((res:Response)=>{
        return res.json()
    })

}
register(user:UserModel){

    return this.http.post("https://tranquil-meadow-57430.herokuapp.com/register",user).map((res:Response)=>{
        
    
        return res.json()
    });

}

addlocation(userid:Number){
   
      return  this.http.post("https://tranquil-meadow-57430.herokuapp.com/addlocation",{userid:userid}).map((res:Response)=>{
            return res.json()
        })
    
   
}
updatelocation(latitude:Number,longitude:Number){
    return this.http.put("https://tranquil-meadow-57430.herokuapp.com/updatelocation",{latitude:latitude,longitude:longitude,userid:localStorage.getItem('userid')}).map((res:Response)=>{
        return res.json()
    })
}
login(email:String,password:String){

return this.http.post("https://tranquil-meadow-57430.herokuapp.com/login",{email:email,password:password}).map((res:Response)=>{
    console.log(res)
    return res.json()
})


}

getuser(){
    return this.http.get("https://tranquil-meadow-57430.herokuapp.com/user/" + localStorage.getItem('userid')).map((res:Response)=>{
        return res.json()
    })
}
getuserrole(){
    return localStorage.getItem('role');
}

isUser(){
    return localStorage.getItem('token') != null
}

adddriver(userid:Number){
    return this.http.post("https://tranquil-meadow-57430.herokuapp.com/adddriver",{userid:userid}).map((res:Response)=>{
        return res.json()
    })
}

startdriving(busno:Number,starttime:String){
return this.http.put("https://tranquil-meadow-57430.herokuapp.com/startdriving",{userid:localStorage.getItem('userid'),busno:busno,starttime:starttime}).map((res:Response)=>{
    return res.json()
})
}

checkbus(busno:Number){
    return this.http.post("https://tranquil-meadow-57430.herokuapp.com/checkbus",{busno:busno}).map((res:Response)=>{
        return res.json()
    })
}


getbusdetails(busno:Number){
    return this.http.get("https://tranquil-meadow-57430.herokuapp.com/getbusdetails/"+busno).map((res:Response)=>{
        return res.json()
    })
}

updatelog(){
    return this.http.put("https://tranquil-meadow-57430.herokuapp.com/updatelog",{userid:localStorage.getItem("userid")}).map((res:Response)=>{
        return res.json()
    })
}

logout(){
    localStorage.clear();
}
}