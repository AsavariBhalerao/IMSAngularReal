import { Component, OnInit} from '@angular/core';
import { GlobleserService } from '../shared/services/globleser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  userid:any;
  userpass:any;
  userData:any;
  constructor(private _globlser:GlobleserService, private _router:Router){}

  ngOnInit(): void {
    // this._globlser.getRecord("users").subscribe((res)=>{
    //   this.userData=res;
    //   const data = this.userData.filter((item:any)=>{return item.uid==this.userid && item.pass==this.userpass})
    //   if(data.length >0 ){
    //     this._globlser.signIn(this.userid);
    //   }else{
    //     alert("inva;id credential");
    //     this.userid="";
    //     this.userpass="";
    //   }


    // })
  }

  // getData(){
    //console.log(this.userid+","+this.userpass);


    // this._globlser.getRecord("asavari").subscribe((res)=>{
    //   // console.log(res);
    //  this.userData=res;
    // const data = this.userData.filter((item:any)=>{return item.uid==this.userid && item.password==this.userpass })
    // if(data.length > 0){
    //   this._globlser.signIn(this.userid);
    //   this._router.navigate(['/users']);
    // }
    // else{
    //   alert("invalid crendential");
    //   this.userid="";
    //   this.userpass="";
    // }

    // })
 



    getData(){
      this._globlser.getRecord("asavari").subscribe((res)=>{
    this.userData=res;
    const data= this.userData.filter((item:any)=>{
      return item.uid==this.userid && item.password==this.userpass
    })   
    if(data.length> 0){
      this._globlser.signIn(this.userid);
      this._router.navigate(['/users'])
    } 
    else{
      alert("invalid credential")
      this.userid="";
      this.userpass=""
    }    
      })
    }
  }
