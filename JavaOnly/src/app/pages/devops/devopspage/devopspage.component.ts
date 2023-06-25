import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devopspage',
  templateUrl: './devopspage.component.html',
  styleUrls: ['./devopspage.component.scss']
})
export class DevopspageComponent implements OnInit{
  id : any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // Xử lý giá trị id theo nhu cầu của bạn
    console.log(this.id)
  }

}
