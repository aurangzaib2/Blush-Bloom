import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
  }
  name:any="";
  phone:any;
  serviceName:string="";
  time:any;
  onSubmit() {  
    //local variable  

   //console.log("Name :- " + this.name,"Phone :- " +this.phone,"Service Name :- " + this.serviceName,"Time :- " + this.time);  
   this.httpClient.post('https://blush-bloom-default-rtdb.firebaseio.com/posts.json',
    {Name: this.name, Phone: this.phone, Service: this.serviceName, Time: this.time }).subscribe((respone)=>{
      console.log('response', respone)
    })
  }
 }
  

 


