import { Component, OnInit } from '@angular/core';
import { TestOwnServicesService } from '../test-own-services/test-own-services.service';

@Component({
  selector: 'app-testing-service',
  templateUrl: './testing-service.component.html',
  styleUrls: ['./testing-service.component.css']
})
export class TestingServiceComponent implements OnInit {

  constructor(private testOwnServicesService:TestOwnServicesService ) { }
  productos:Array<any>=[]

  ngOnInit() {
    this.productos=this.testOwnServicesService.getData()
  }

}
