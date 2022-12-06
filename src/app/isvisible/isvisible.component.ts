import { Component } from '@angular/core';

@Component({
  selector: 'app-isvisible',
  templateUrl: './isvisible.component.html',
  styleUrls: ['./isvisible.component.css'],
})
export class IsvisibleComponent {
  id!: string;
  password!: string;

  onSubmit = () => {
    console.log(this.id, this.password);
  };
}
