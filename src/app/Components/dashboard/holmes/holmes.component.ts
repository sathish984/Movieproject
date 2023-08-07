import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-holmes',
  templateUrl: './holmes.component.html',
  styleUrls: ['./holmes.component.css']
})
export class HolmesComponent {
  
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
  
  holmes:string="https://m.media-amazon.com/images/M/MV5BOTI5ZDE2M2MtMDkyNC00ZGM2LTg1NzgtOGJkMDgwODYyNzAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg";
}
