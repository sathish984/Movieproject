import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent 
{
   email:string ="";
   password:string ="";

   constructor(private http:HttpClient){}

   Login()
   {
     console.log(this.email);
     console.log(this.password);

     let bodyData = {
      emailid:this.email,
      password:this.password,
     };

     this.http.post('http://localhost:6900/api/sathish/customer/login',bodyData).subscribe ((resultData:any) =>
     {
        console.log(resultData);
        if(resultData.bodyData)
        {
          console.log(this.email);
          console.log(this.password);
          alert("login success");
        }
        else
        {
          console.log(this.email);
          console.log(this.password);
            alert("login failed");
        }
     }
    
     ); 

   }
}
