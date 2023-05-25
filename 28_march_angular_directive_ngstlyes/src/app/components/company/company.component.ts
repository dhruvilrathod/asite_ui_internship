import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  public contactChage(e: any): void {
    console.log(e);
    alert(`Company: Contact changed: ${e.name}, ${e.contact}`);
  }
}
