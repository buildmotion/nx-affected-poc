import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppOneServiceService {
  getOne() {
    console.log('getOne() called');
  }

}
