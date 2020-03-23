import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frezzo';
  constructor(
    
  ) { }

  ngOnInit() {
    
  }

  // showNotification() {
  //   $.ajax({
  //     type: 'POST',
  //     url: "https://fcm.googleapis.com/fcm/send",
  //     headers: {
  //       Authorization: 'key=' + 'AIzaSyD65Q4fdYTz6gakfx6TdwvqnQ91AtnJzMo'
  //     },
  //     contentType: 'application/json',
  //     dataType: 'json',
  //     data: JSON.stringify({ "to": "cIxgxhG_jSAiv9cG4F7eY1:APA91bHYYxSnGdzWAlSnxGVJd9LexF6oNVpf0fSMbwOU5_UB3893Hk3PRBX9cjjNknKlf0-jwBFHIaR0v43r4ZD1lZcCcKh_EdaL78eZTeNydzOMspB0zH7pT03gxpB-eCMxKwUDQnfz", "notification": { "title": "Test", "body": "Test" } }),
  //     success: function (response) {
  //       console.log(response);
  //     },
  //     error: function (xhr, status, error) {
  //       console.log(xhr.error);
  //     }
  //   });
  // }
}