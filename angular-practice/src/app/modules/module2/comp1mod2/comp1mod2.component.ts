import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo/demo.service';

@Component({
  selector: 'app-comp1mod2',
  templateUrl: './comp1mod2.component.html',
  styleUrls: ['./comp1mod2.component.css']
})
export class Comp1mod2Component {
  constructor(
    public demoService: DemoService,
  ) { }

  ngOnInit(): void {
    console.log(this.demoService.getMyValue, new Date().getTime());
  }

}
