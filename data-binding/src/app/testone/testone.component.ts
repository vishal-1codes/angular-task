import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.scss']
})
export class TestoneComponent implements OnInit {

  userone:any="vishal"

  myclassone:string="red"
  //if we do true in bellow var then we can apply class of css that present in css file we can also add that 
  //css name in template file. if it is false then we not apply css to that paragraf
  applycssclass=false
  // applycssclass=true

  mycolorone='brown'

  usernameone:string="vishal pawar"

  usernametwo:string="two way binding text"


  constructor() { }

  ngOnInit(): void {
  }

  showData2(event:any){
    console.log("event call here ");
    if(event){
      console.log(event.target);
      console.log(event.target.value);
      
    }else{
      console.log("nothing one");
      
    }
    
  }

  showData21(){
    console.log("data 21 calick");
    
  }



}
