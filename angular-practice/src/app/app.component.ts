import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice-project';

  public serverData!: Observable<any>;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._call1();
  }

  private _call1 = (): void => {
    console.log('call 1 started');
    
    this._http.get('http://localhost:3000').subscribe({
      next: (data: any) => {
        console.log(data);
        this.serverData = data.success;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        this._call2();
      }
    });
  }

  private _call2 = (): void => {
    console.log('call 2 started')

    this._http.post('http://localhost:3000/check100', { key: 'value' }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.serverData = data.success;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed after next');
      }
    });
  }

}
