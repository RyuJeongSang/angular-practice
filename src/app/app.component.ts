import { Component } from '@angular/core';

const DATA: Array<string> = ['data0', 'data1', 'data2'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';

  showData: Array<string>;

  constructor() {
    this.showData = DATA;
  }

  public clickAlert = () => {
    alert('클릭하셨습니다.');
    this._innerFunc();
    console.log(DATA);
  };

  private _innerFunc = () => {
    DATA.push('data' + DATA.length);
  };
}
