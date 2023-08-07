import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-knightzodiac',
  templateUrl: './knightzodiac.component.html',
  styleUrls: ['./knightzodiac.component.css']
})
export class KnightzodiacComponent {

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
  zodiac:string ="https://benuevibes.ng/wp-content/uploads/2023/06/C55D9CFB-A355-4078-82F2-EE34B4736E4A.webp";
}
