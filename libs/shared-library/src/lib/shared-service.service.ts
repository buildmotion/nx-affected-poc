import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  share(message: string) {
    console.log('share ${message}} called');
  }
}
