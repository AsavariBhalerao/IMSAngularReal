import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourserService } from 'src/app/shared/services/courser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empData:any;
  term:any;
  p:number=1;
  order:string='name';
  reverse:boolean=false;
 
  constructor (private _courser:CourserService, private _router:Router){}

  ngOnInit(): void {
    this.fetchData()
  }
  
  changeOrder(){
    this.reverse=!this.reverse;
  }

  fetchData(){
    this._courser.getRecord().subscribe((res)=>{
  
      // console.log(res)
      this.empData=res;
      })
  }

  getId(id:any){
    if(confirm(`Are you sure to delete record with id:${id}`)){
      this._courser.deleteRecord(id).subscribe(()=>{
        alert("Record deleted successfully")
        this._router.navigate(['courses'])
        this.fetchData()
      })
    }
  }}


