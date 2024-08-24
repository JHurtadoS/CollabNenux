import { Component, OnInit } from '@angular/core';
import { ShareComponentServiceService } from '../services/shareComponentService.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private service:ShareComponentServiceService){}


  contador:number=0

  ngOnInit() {
    console.log(this.service.getVontador()); 
  }
  

}
