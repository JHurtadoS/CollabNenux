import { Component, OnInit } from '@angular/core';
import { ShareComponentServiceService } from '../services/shareComponentService.service';

@Component({
  selector: 'app-test-component-1',
  templateUrl: './testcomponent1.component.html',
  styleUrls: ['./test-component-1.component.css']
})
export class TestComponent1Component implements OnInit {

  constructor(private contadorService: ShareComponentServiceService) { }


    incrementar() {
    this.contadorService.sumContador();
  }

  ngOnInit() {
  }

}
