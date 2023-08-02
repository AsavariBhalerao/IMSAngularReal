import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstserService {
baseUrl:string="http://localhost:3000/institute";
  constructor(private _http:HttpClient) { }

getRecord(path:string){
  const url = `${this.baseUrl}/${path}`
  return this._http.get(url)
}
getSingleRecord(id:any){
  const url = `${this.baseUrl}/${id}`;    //http://localhost:3000/Employe/id
 return this._http.get(url);
}
deleteRecord(id:any){
  const url =`${this.baseUrl}/${id}`;
 return this._http.delete(url);
}

addRecord(empData:any){
  return this._http.post(this.baseUrl,empData)
}

 // put request
 updateRecord(empData:any){
   const url = `${this.baseUrl}/${empData.id}`;    //http://localhost:3000/Employe/id
   return this._http.put(url,empData)
 
}
}
