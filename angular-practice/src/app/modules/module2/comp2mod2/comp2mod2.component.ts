import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo/demo.service';

@Component({
  selector: 'app-comp2mod2',
  templateUrl: './comp2mod2.component.html',
  styleUrls: ['./comp2mod2.component.css']
})
export class Comp2mod2Component {
  constructor(
    public demoService: DemoService,
  ) { }

  ngOnInit(): void {
    console.log(this.demoService.getMyValue, new Date().getTime());
  }

}
