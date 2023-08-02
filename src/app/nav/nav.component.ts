import { Component, OnInit } from '@angular/core';
import { GlobleserService } from '../shared/services/globleser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{



  constructor(private _globlser:GlobleserService, private _router:Router){}


  ngOnInit(): void {
    
  }
  logout(){
    if(confirm("Are you sure to logout")){
      this._globlser.signOut();
      this._router.navigate(['/'])
    }

  }

}
