import { Component } from '@angular/core';

import '@clr/core/alert/register';
import '@clr/core/button/register';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showAlert = false;
}
