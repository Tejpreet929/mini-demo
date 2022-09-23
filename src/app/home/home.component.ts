import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //email:string=""
  username:string=""
  password:string=""
  errormessage: string="";
  httpget: HttpClient;
  constructor(private router:Router,http:HttpClient) {
    this.httpget=http;
  }
  ngOnInit(): void {
  }

  home()
  {
    this.router.navigate(['login']);
  }
  

  }

