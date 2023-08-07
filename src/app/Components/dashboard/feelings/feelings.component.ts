import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.css']
})
export class FeelingsComponent {

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

   feeling:string ="https://m.media-amazon.com/images/M/MV5BMjg3N2M3OWUtZGQ3NC00OGI1LTllZDUtMTdiYWQxMTk0YTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg";
}
