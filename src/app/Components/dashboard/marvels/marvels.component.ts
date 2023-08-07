import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-marvels',
  templateUrl: './marvels.component.html',
  styleUrls: ['./marvels.component.css']
})
export class MarvelsComponent {

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

   marvel:string="https://i.pinimg.com/736x/81/1b/c0/811bc0b09b6459cde4a46e4a3be0ef1e.jpg";
}
