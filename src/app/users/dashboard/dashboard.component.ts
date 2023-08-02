import { Component, OnInit } from '@angular/core';
import { DataSerService } from 'src/app/shared/services/data-ser.service';

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
  constructor(private _dataSer:DataSerService){

  }

  ngOnInit(): void {
    this.fetchData()
  }

  changeOrder(){
    this.reverse=!this.reverse;
  }
  fetchData(){
    this._dataSer.getRecord().subscribe((res)=>{
  
      // console.log(res)
      this.empData=res;
      })
  }
  getId(id:any){
    if(confirm(`Are you sure to delete record with id:${id}`)){
      this._dataSer.deleteRecord(id).subscribe(()=>{
        alert("Record deleted successfully")
      })
    }
  }
}
