import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CourserService } from 'src/app/shared/services/courser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor (private _courser:CourserService, private _router:Router){}

  ngOnInit(): void {
    
  }
  
  getData(data:any){
    const empObj={
      id: data.id,
      coursename: data.coursename,
      courseduration: data.courseduration,
      coursefees: data.coursefees

    }
    this._courser.addRecord(empObj).subscribe(()=>{
      alert("Record Added Successfully");
      this._router.navigate(['/courses'])
    })
  }

}

