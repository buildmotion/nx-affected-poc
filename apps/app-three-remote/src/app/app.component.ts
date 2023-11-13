import { SharedServiceService } from '@affected/shared-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'nx-affected-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-three-remote';

  constructor(
    private sharedService: SharedServiceService
  ) {
    this.sharedService.share('app-three-remote');
  }
  )
}
