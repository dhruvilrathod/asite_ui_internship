import { Component, Inject, Injector, OnInit, Optional, ViewChild } from '@angular/core';
import { DemoService } from 'src/app/services/demo/demo.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  public arr1: number[] = [1, 2, 3];
  public arr2: number[] = [5, 6, 7];

  constructor(
    public demoService: DemoService,
  ) { }

  ngOnInit(): void {
    console.log(this.demoService.getMyValue, new Date().getTime());
  }

  changeArr1(): void {
    this.arr1.push(Math.floor(Math.random() * 10));
    console.log(this.arr1);
  }

  changeArr2(): void {
    this.arr2.push(Math.floor(Math.random() * 10));
    console.log(this.arr2);
  }
}
