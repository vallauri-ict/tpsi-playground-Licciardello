import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css']
})
export class PracticingDatabindingComponent implements OnInit {
username:string='';
usernameVuoto:boolean=true;
ModificaUsername()//event:any
{
 // this.username=event.target.value;
  if(this.username.length==0)
  this.usernameVuoto=true;
  else
  this.usernameVuoto=false;
}
ResetUsername()
{
  this.username='';
  this.usernameVuoto=true;
}
  constructor() { }
  ngOnInit(): void {
    
  }

}
