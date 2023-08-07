import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-doctorstrange',
  templateUrl: './doctorstrange.component.html',
  styleUrls: ['./doctorstrange.component.css']
})
export class DoctorstrangeComponent {
   
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
    this.http.get<any[]>('http://localhost:6800/api/sathish/customer/review').subscribe(data =>
    {
      this.customers =data;
    });
  }
  
  strange:string = "https://i1.wp.com/www.piratesandprincesses.net/wp-content/uploads/2022/04/doctor-strange-multiverse-madness-poster.jpg?fit=803%2C832&ssl=1";
}
