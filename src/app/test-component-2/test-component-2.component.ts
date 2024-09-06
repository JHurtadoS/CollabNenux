import { Component, OnInit } from '@angular/core';
import { ShareComponentServiceService } from '../services/shareComponentService.service';

@Component({
  selector: 'app-test-component-2',
  templateUrl: './testcomponent2.html',
  styleUrls: ['./test-component-2.component.css']
})
export class TestComponent2Component implements OnInit {


  contador: number = 0;

  constructor(private contadorService: ShareComponentServiceService) { }



  ngOnInit() {
    this.contadorService.getVontador().subscribe(e=>{
      this.contador=e
    })
  }

}
