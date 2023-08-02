import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSerService } from 'src/app/shared/services/data-ser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private _dataSer:DataSerService,private _router:Router) {}


  ngOnInit(): void {
    
  }
  getData(data:any){
    const empObj={
      empid:data.empid,
      name:data.name,
      password:data.password,
      contact:data.contact,
      email:data.email

    }
    this._dataSer.addRecord(empObj).subscribe(()=>{
      alert("Record Added Successfully");
      this._router.navigate(['/users'])
    })
  }

}
