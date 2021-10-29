import { Component } from '@angular/core';
import { Person } from './Models/Person';
import { PersonService } from './Service/Person.Service';


@Component({
  selector: 'app-person',
  templateUrl:'./person.component.html',
  
})
export class PersonComponent 
{
  persobj!:Person;        //null operator in typescript = !
  personlist:Person[]=[]; //holds multiple data of person type

  PersonDetails():void
  {
   this.persobj=new Person(123,'ganesh')
  }
  PersonDetailsList():void
  {
    
    var perservice=new PersonService();
    this.personlist= perservice.GetPersonDetails();

  }
}