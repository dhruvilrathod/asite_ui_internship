import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo/demo.service';

@Component({
  selector: 'app-comp2mod1',
  templateUrl: './comp2mod1.component.html',
  styleUrls: ['./comp2mod1.component.css'],
  // providers: [DemoService]
})
export class Comp2mod1Component {
  constructor(
    public demoService: DemoService,
  ) { }

  ngOnInit(): void {
    console.log(this.demoService.getMyValue, new Date().getTime());
  }

}
