import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstserService } from 'src/app/shared/services/instser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
id:any;
empObj:any;
  constructor(private _instSer:InstserService,private _router:Router, private _actRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._actRoute.paramMap.subscribe((para)=>{
      this.id=para.get('id');
      //console.log(this.id);

      this._instSer.getSingleRecord(this.id).subscribe((res)=>{
        this.empObj={...res}
      
      })
    })
  }

  editData(data:any){
    const empObj= {
      id:this.id,
      branchname:data.branchname,
      city:data.city,
      contact:data.contact
    }
    this._instSer.updateRecord(empObj).subscribe(()=>{
      alert("Record Updated Successfully");
      this._router.navigate(['/institute'])
    })
  }
}
