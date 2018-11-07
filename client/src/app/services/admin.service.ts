import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  queuePost(answer){
    let url='http://localhost:3000/admin/approveMemberAdd';

    return this.http.post(url, answer).pipe(
      map( res =>{
        return res['returnObject'];
      }));
  }
}
