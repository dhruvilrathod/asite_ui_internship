import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo/demo.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  constructor(private demoService: DemoService) {}
  
  ngOnInit(): void {
    console.log(this.demoService.getMyValue, new Date().getTime());
    
  }
  

}
