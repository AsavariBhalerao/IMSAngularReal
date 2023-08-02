import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EnrolserService } from 'src/app/shared/enrolser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{

  constructor (private _enrolser:EnrolserService, private _router:Router){}

  ngOnInit(): void {
    
  }

   
  getData(data:any){
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
    this._enrolser.addRecord(empObj).subscribe(()=>{
      alert("Record Added Successfully");
      this._router.navigate(['/enrollment'])
    })
  }

}



