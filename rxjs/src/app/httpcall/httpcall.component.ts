import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, filter} from 'rxjs/operators';
 

@Component({
  selector: 'app-httpcall',
  templateUrl: './httpcall.component.html',
  styleUrls: ['./httpcall.component.scss']
})
export class HttpcallComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getRxjsData(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>{
      console.log("print ",res);
     
     
      
    })
    
  }

}
