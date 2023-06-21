import { Component, OnInit } from '@angular/core';
import { BlogServiceApiService } from 'src/app/service/blog-service-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private service:BlogServiceApiService){}

  ngOnInit(): void {
    console.log("HomeComponent")
  }

}
