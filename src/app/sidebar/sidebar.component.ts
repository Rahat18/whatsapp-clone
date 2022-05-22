import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 
  chat=[
    { name:"Mom" , time :"8:21PM", lastmessage:"Hey!" ,lastmessageRead:true},
    { name:"Sis" , time :"7:43PM", lastmessage:"Come Home." ,lastmessageRead:false},
    { name:"Jack" , time :"7:21PM", lastmessage:"Meet me.",lastmessageRead:false },
    { name:"Dad" , time :"7:01PM", lastmessage:"Okay...",lastmessageRead:false },
    { name:"Joe" , time :"6:56PM", lastmessage:"Cool" ,lastmessageRead:true},
    { name:"Teacher" , time :"6:01PM", lastmessage:"Good Evening" ,lastmessageRead:true},
    { name:"Ben" , time :"2:01PM", lastmessage:"Good" ,lastmessageRead:false},
    { name:"Jenny" , time :"11:01AM", lastmessage:"Thanks" ,lastmessageRead:false},
    { name:"Dee" , time :"9:05AM", lastmessage:"Good Morning",lastmessageRead:true },
    { name:"Tom" , time :"6:00AM", lastmessage:"Good Morning ",lastmessageRead:false}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
