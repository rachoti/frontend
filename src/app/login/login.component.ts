import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoanserviceService} from './loanservice.service'
import {Customer} from './Customer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 model=new Customer('','');
    getData:any[];
    usernamex:string;
    passwordx:string;

  constructor(private router: Router,private _httpService:LoanserviceService) { }

  ngOnInit() {
    
}

   loginValidation(){


      this._httpService.getUserDetails().subscribe((res:any[])=>{
      
        //this.getData=res;
        var x=JSON.parse(JSON.stringify(res));
        console.log(x);
        for (var i = x.length - 1; i >= 0; i--) {
          console.log(x[i].username);
          console.log(x[i].password);
          if(this.model.username==x[i].username && this.model.password==x[i].password){
         console.log("successful");
     }else{
       console.log("invalid user");
     }
   }
   
    })
     
     
  //   //this._httpService.setUserDetails().subscribe();
  // //   this._httpService.setUserDetails(this.model.username,this.model.password).subscribe((res:number)=>{
  // //      console.log(res);
  // //     })
  // //     alert("Successfull login....!");
   }

}
