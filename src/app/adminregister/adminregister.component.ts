import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Routes,Router} from '@angular/router';
@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent {
  UserName:string ="";
  Password:string ="";

  registerForm!:FormGroup
  submitted=false;
  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}
  ngOnInit()
  {
    this.registerForm=this.formBuilder.group({
      UserName:['',Validators.required],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    })
  }  
   onSubmit()
   {
      this.submitted=true
      if(this.registerForm.invalid)
      {
        return
      }
   }

   register()
   {
      let bodyData = 
      {
          "username":this.UserName,
          "password":this.Password  
      };

    this.http.post("http://localhost:6900/api/sathish/admin",bodyData).subscribe((resultData:any)=>
    {
          console.log(resultData);
          alert("Registration is successful");
          /*this.router.navigate(['/login'])*/
          this.router.navigate(['']);
          /*this.router.navigate(['/login']);*/
          this.UserName='';
          this.Password='';
    });
  }
    save()
    {     
      //this.register();
      if(this.registerForm.valid)
      {
        this.register(); 
      } 
    }
}
