import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  UserName:string ="";
  password:string ="";

  constructor(private http:HttpClient,private router:Router)
  {}
  

    loginData =
    {
      "username":this.UserName,
      "password":this.password 
    };
    save()
    {  
        this.http.get<any[]>('http://localhost:6900/api/sathish/admin',{params:this.loginData}).subscribe((resultData:any)=>
        {
            console.log(resultData);
            alert("login successful");
            this.router.navigate(['/viewcustomer']);
            this.UserName='';
            this.password='';
            
          },
          error =>
          {
            console.error(error);
            alert("login unsuccessful");
          }
        );
    }

    login()
    {
      this.save();
    }
}
