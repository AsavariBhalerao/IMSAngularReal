import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrolserService } from 'src/app/shared/enrolser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit{
id:any;
empObj:any;
  constructor(private _enrolser:EnrolserService, private _router:Router, private _actRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this._actRoute.paramMap.subscribe((para)=>{
      this.id=para.get('id');
      //console.log(this.id);

      this._enrolser.getSingleRecord(this.id).subscribe((res)=>{
        this.empObj={...res}
      
      })
    })

  }

  editData(data:any){
    const empObj={
      id: data.id,
      fullname: data.fullname,
      contact: data.contact,
      email: data.email,
      qualification: data.qualification,
      passout: data.passout,
      college:data.college,
      specialization:data.specialization
    }
    this._enrolser.updateRecord(empObj).subscribe(()=>{
      alert("Record Updated successfully");
      this._router.navigate(['/enrollment'])
    })
  }
  }

