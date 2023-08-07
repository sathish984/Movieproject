import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Routes,Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  firstName:string ="";
  lastName:string ="";
  email:string ="";
  PhoneNumber:string ="";
  Password:string ="";

  registerForm!:FormGroup
  submitted=false;
  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}
  ngOnInit()
  {
    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      PhoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
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
          "firstName":this.firstName,
          "lastName":this.lastName,
          "emailid":this.email,
          "phonenum":this.PhoneNumber,
          "password":this.Password  
      };

    this.http.post("http://localhost:6900/api/sathish/customer",bodyData).subscribe((resultData:any)=>
    {
          console.log(resultData);
          alert("Registration is successful");
          /*this.router.navigate(['/login'])*/
          this.router.navigate(['']);
          this.firstName='';
          this.lastName='';
          this.email='';
          this.PhoneNumber='';
          this.Password='';
    },
    error =>
    {
      console.error(error);
      alert("Registration is failed");
    }
    );
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
