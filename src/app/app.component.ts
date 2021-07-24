import { Component, ViewEncapsulation } from '@angular/core';
// import { UiService } from './services/ui/ui.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'angular-weather';
  // checked: boolean = true
  autoRenew = new FormControl();
  onChange() {
    console.log(this.autoRenew.value);
  }
}
