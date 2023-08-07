import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-day-shift',
  templateUrl: './day-shift.component.html',
  styleUrls: ['./day-shift.component.css']
})
export class DayShiftComponent {

  

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

   day:string="https://movieplayer.net-cdn.it/t/images/2022/07/29/day-shift-caccia-ai-vampiri_jpg_221x221_crop_q85.jpg";
}
