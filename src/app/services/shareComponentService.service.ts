import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareComponentServiceService {

  private contador =  new BehaviorSubject<number>(0)

  sumContador(){
    const valorActual = this.contador.value;
    this.contador.next(valorActual + 1);
  }

  getVontador(){
    return this.contador.asObservable()
  }

}
