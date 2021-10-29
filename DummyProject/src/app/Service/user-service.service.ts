import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  serviceEndpointR:any='https://localhost:7001/Taazaa/User/Create';
  serviceEndpointL:any='https://localhost:7001/Taazaa/User/Login';

  constructor(private httpClient: HttpClient)
  {
  }

  createAccount(reg:any)
  {
    //if a function return tyoe is observable it means to access the data from this function or to give the data to the function we have to subscribe
    return this.httpClient.post(this.serviceEndpointR, reg);
  }
}
