import { Component} from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  frmGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router)
  {
    this.frmGroup=this.formBuilder.group({
      'UserName' :'',
      'Password':'',
      'Age':''
    })
  }
  RegisterData(user:any)
  {
    console.log(user);
    this.router.navigate(['./Login'])
  }
  


}
