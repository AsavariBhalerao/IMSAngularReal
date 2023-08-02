import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrolserService } from 'src/app/shared/enrolser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  empData:any;
  term:any;
  p:number=1;
  order:string='name';
  reverse:boolean=false;
 

  constructor(private _enrolser:EnrolserService, private _router:Router){}

  ngOnInit(): void {
    this.fetchData()
  }
  
  fetchData(){
    this._enrolser.getRecord().subscribe((res)=>{
  
      // console.log(res)
      this.empData=res;
      })
  }
  changeOrder(){
    this.reverse=!this.reverse;
  }
  getId(id:any){
    if(confirm(`Are you sure to delete record with id:${id}`)){
      this._enrolser.deleteRecord(id).subscribe(()=>{
        alert("Record deleted successfully")
        this._router.navigate(['enrollment'])
        this.fetchData()
      })
    }
  }}


