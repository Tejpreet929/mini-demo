import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  res: any;

  constructor(private router:Router,http:HttpClientModule ) {

  }

  ngOnInit(): void {
  }
 Details()
  {
    let response=this.res.get("http://localhost:8080/customerdetails");
    response.subscribe((data: any)=>this.res = data);
 
  }
}

