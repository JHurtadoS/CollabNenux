import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareComponentServiceService {


  private contador =  new BehaviorSubject<number>(0)


  // constructor() {
  //   this.contador = 0
  // }


  sumContador(){
    this.contador.next(1)
  }
  
  getVontador(){
    return this.contador.asObservable()
  }




}