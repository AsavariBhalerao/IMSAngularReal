import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstserService } from 'src/app/shared/services/instser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit 
{

  constructor(private _instSer:InstserService,private _router:Router){}

  ngOnInit(): void {
    
  }


getData(data:any){
  const empObj={
    id: data.id,
    branchname: data.branchname,
    city: data.city,
    contact: data.contact

  }
  this._instSer.addRecord(empObj).subscribe(()=>{
    alert("Record Added Successfully");
    this._router.navigate(['/institute'])
  })
}


}