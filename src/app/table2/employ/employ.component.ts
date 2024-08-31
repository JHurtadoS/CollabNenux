import { Component, Input, OnInit } from '@angular/core';


const minSalary:number=2320000
const valueTransportRefund = 140606


export interface employ{
  nombre:string
  edad:number
  sueldo:number
}


@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})


export class EmployComponent implements OnInit {

  constructor() { }

  @Input() employ:employ|undefined


  tranportRefund(employ:employ){
    const {sueldo}=employ
    return sueldo<minSalary ? valueTransportRefund+sueldo:sueldo
  }


  ngOnInit() {
    if(this.employ)
    this.employ.sueldo = this.tranportRefund(this.employ)
  }

}
