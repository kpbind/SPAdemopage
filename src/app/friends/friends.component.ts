import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {


  _httpCallsObj:HttpClient;

  userInfoData:any;

  

  constructor(_httpCallREF:HttpClient) 
  {
    this._httpCallsObj = _httpCallREF;
   }

   getUserDetails()
   {
    this._httpCallsObj.get('https://jsonplaceholder.typicode.com/users').subscribe( data=>{
      this.userInfoData = data;
      return this.userInfoData;
  });
   }


  ngOnInit(): void {
  }

}

