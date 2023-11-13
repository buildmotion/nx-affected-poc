import { Component } from '@angular/core';
import { AppOneServiceService } from '@affected/app-one-lib'

@Component({
  selector: 'nx-affected-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-one-host';

  constructor(
    private oneService: AppOneServiceService
  ) {
    this.oneService.getOne();
  }
}
