import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  LoggedUserData={                     //Array for binding Data
    email:'',
    password:''
  };

  LoginUser():void
  {
    console.log(this.LoggedUserData);

  }

}