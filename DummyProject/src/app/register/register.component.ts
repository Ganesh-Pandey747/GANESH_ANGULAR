import { Component,} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent  {

  registerUserData={

    FullName:'',
    email:'',
    password:''
  };

  registerUser():void
  {
    console.log(this.registerUserData);
  }
}
