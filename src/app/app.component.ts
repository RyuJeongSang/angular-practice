import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';

  constructor (){  //constructor 라는 함수를 추가합니다.
    console.log(`angular server is running in http://localhost:4200`);
  }
}
