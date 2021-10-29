import { Person } from "../Models/Person";

export class PersonService
{
    GetPersonDetails():Person[]
    {
        let personobj:Person[];
        personobj=[
            new Person(1,'Ganesh'),
            new Person(2,'Nikhil'),
        ]
        return personobj;
    }
}