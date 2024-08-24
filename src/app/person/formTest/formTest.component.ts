import { Component, OnInit } from '@angular/core';
import { ShareComponentServiceService } from 'src/app/services/shareComponentService.service';

@Component({
  selector: 'app-formTest',
  templateUrl: './formTest.component.html',
  styleUrls: ['./formTest.component.css']
})
export class FormTestComponent implements OnInit {

  constructor(private service:ShareComponentServiceService) { }

  onclickButton(){
    this.service.sumContador()
  }


  nombre=""
  email=""
  edad=0



  ngOnInit() {
  }

}
