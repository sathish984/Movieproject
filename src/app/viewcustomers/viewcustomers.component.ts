import { Component,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.css']
})
export class ViewcustomersComponent implements OnInit {
 customers:any[];

constructor(private http:HttpClient)
{}

  ngOnInit(): void {
    this.getCustomerDetails();
  }
  getCustomerDetails()
  {
    this.http.get<any[]>('http://localhost:6900/api/sathish/customer').subscribe(data =>
    {
      this.customers =data;
    });
  }

}
