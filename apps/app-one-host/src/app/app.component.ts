import { Component } from '@angular/core';
import { AppOneServiceService } from '@affected/app-one-lib'
import { SharedServiceService } from '@affected/shared-lib';

@Component({
  selector: 'nx-affected-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-one-host';

  constructor(
    private oneService: AppOneServiceService,
    private sharedService: SharedServiceService
  ) {
    this.oneService.getOne();
  }
}
