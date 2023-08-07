import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string;
  password:string;
  invalidLogin = false
  constructor(private http:HttpClient,private router:Router)
  {}
  

  
    save()
    { 
      
      let loginData =
      {
        "emailid":this.email,
        "password":this.password, 
      };
     
        this.http.get('http://localhost:6900/api/sathish/customer',{params:loginData}).subscribe((resultData:any)=>
        {
            console.log(resultData);
            alert("login successful");
            this.router.navigate(['/Dashboard1']);
            //this.email='';
            //this.password='';
             // this.email="emailid";
              //this.password="password";
              this.invalidLogin = false;
          },
          error =>
          {
            console.error(error);
            alert("login unsuccessful");
            this.invalidLogin = true;
          }
        );
    }

    login()
    {
      this.save();
    }


}
