import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LogserviceService {
  constructor() {}

  log(...message: any[]) {
    console.info(...message, 'mm');
  }
}
