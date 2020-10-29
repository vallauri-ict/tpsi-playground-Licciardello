import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
  export class ServersComponent implements OnInit {

  allowNewServer:boolean=false;
  serverCreationStatus:string="No server was created!";
  serverName='';
  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
  this.serverCreationStatus='Server '+this.serverName+'created!';
  this.serverName="Digita qui il nome del tuo server";
}
  onUpdateServerName(event:any)
  {
 console.log(event.target.value);
 this.serverName=event.target.value;
 }
}
