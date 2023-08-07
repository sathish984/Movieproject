import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-missionimpossible',
  templateUrl: './missionimpossible.component.html',
  styleUrls: ['./missionimpossible.component.css']
})
export class MissionimpossibleComponent {
    
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
  
  impossible:string="data:image/jpeg;base64,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";
}
