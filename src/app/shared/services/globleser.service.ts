import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobleserService {
 baseUrl:string="http://localhost:3000"
  constructor(private _http:HttpClient) { }
  
  getRecord(path:string){
    const url=`${this.baseUrl}/${path}`;
    return this._http.get(url);
  }

  deleteRecord(path:any,id:any){
    const url=`${this.baseUrl}/${path}/${id}`;
    return this._http.delete(url);
  }
 
  addRecord(path:any,empData:{}){
    const url=`${this.baseUrl}/${path}`;
    return this._http.post(url,empData);
  }

  getSingleRecord(path:any,id:any){
    const url=`${this.baseUrl}/${path}/${id}`;
    return this._http.get(url);
  }

  updaterecord(path:any,empData:any,id:any){
    const url=`${this.baseUrl}/${path}/${id}`;
    return this._http.put(url,empData);
  }

  // methode to store user in sessionstorage
 signIn(user:any){
      sessionStorage.setItem("userkey",user);
 }
// methode to memove user in sessionstorage
 signOut(){
   sessionStorage.removeItem("userkey")
 }


}
