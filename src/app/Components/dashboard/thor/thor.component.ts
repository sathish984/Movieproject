import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-thor',
  templateUrl: './thor.component.html',
  styleUrls: ['./thor.component.css']
})
export class ThorComponent {

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

   thor:string ="data:image/jpeg;base64,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";
}
