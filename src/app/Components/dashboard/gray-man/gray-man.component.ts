import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-gray-man',
  templateUrl: './gray-man.component.html',
  styleUrls: ['./gray-man.component.css']
})
export class GrayManComponent {

  email:string ="";
  comment:string ="";
   
  
  constructor(private http: HttpClient){}


   
  register()
  {
     let bodyData = 
     {
         
         "username":this.email,
         "review":this.comment 
     };

   this.http.post("http://localhost:6900/api/sathish/customer/review",bodyData).subscribe((resultData:any)=>
   {
         console.log(resultData);
         alert("Upload is successful");
         /*this.router.navigate(['/login'])*/
         this.email='';
         this.comment='';
         
   },
   error =>
   {
     console.error(error);
     alert("Upload is failed");
   }
   );
 }
   save()
   {     
     this.register();
   }
// view the review
   customers:any[];

   ngOnInit(): void {
    this.getCustomerDetails();
  }
  getCustomerDetails()
  {
    this.http.get<any[]>('http://localhost:6900/api/sathish/customer/review').subscribe(data =>
    {
      this.customers =data;
    });
  }

  gray:string="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZFxAQb34bSaSqI3Jb7BiYqp70demsTjeaJE0pMi_MJ6PpjRLOFtTDbIZX9Jg2rGG-GHhsQbqnsIvNliI2f-9A5lI1EtQTo9lz6_mrlawP_9S0im23nEGRK42bObCi4CjrsWk1j2JlDmeva2FcYz_an9.jpg?r=7e3";
}
