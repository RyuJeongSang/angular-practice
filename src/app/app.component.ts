import { Component } from '@angular/core';

const DATA: Array<string> = ['data0', 'data1', 'data2'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  visible: boolean = true;

  public onClickVisible = () => {
    this.visible = !this.visible;
  };
}
