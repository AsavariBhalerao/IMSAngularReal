import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourserService } from 'src/app/shared/services/courser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  empObj:any;
  constructor(private _actRoute:ActivatedRoute,private _courser:CourserService,private _router:Router){}

  ngOnInit(): void {
    
    this._actRoute.paramMap.subscribe((para)=>{
      this.id=para.get('id');
      //console.log(this.id);

      this._courser.getSingleRecord(this.id).subscribe((res)=>{
        this.empObj={...res}
      
      })
    })
  }
  
  editData(data:any){
    const empObj={
      id:this.id,
      coursename:data.coursename,
      courseduration:data.courseduration,
      coursefees:data.coursefees
    }
    this._courser.updateRecord(empObj).subscribe(()=>{
      alert("Record Updated successfully");
      this._router.navigate(['/courses'])
    })
  }
  }


  

