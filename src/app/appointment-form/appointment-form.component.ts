import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  name:any="";
  phone:any;
  serviceName:string="";
  time:any;
  constructor() { }

  ngOnInit(): void {
  }

}
