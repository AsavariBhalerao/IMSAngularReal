import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSerService } from 'src/app/shared/services/data-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id:any;
  empObj:any;
  constructor(private _actRoute:ActivatedRoute,private _dataSer:DataSerService,private _router:Router){}

  ngOnInit(): void {
    this._actRoute.paramMap.subscribe((para)=>{
      this.id=para.get('id');
      //console.log(this.id);

      this._dataSer.getSingleRecord(this.id).subscribe((res)=>{
        this.empObj={...res}
      })
    })
  }
  
  editData(data:any){
    const empObj={
      id:this.id,
      empid:data.empid,
      name:data.name,
      password:data.password,
      contact:data.contact,
      email:data.email
    }
    this._dataSer.updateRecord(empObj).subscribe(()=>{
      alert("Record Updated successfully");
      this._router.navigate(['/users'])
    })
  }

}


