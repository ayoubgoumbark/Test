import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  
  Form !:FormGroup 
  hidepassword = true;
  progressvalue="0"
  progressColor="primary"









  
 
  items= [
    {
      name: 'Secure payments throught reliable partners',
      icon:"fa-solid fa-shield"
      
    },
    {
      name: 'Fast transfers',  
      icon:"fa-solid fa-bolt"
    },
    {
      name: 'Fair commissions',
      icon:"fa-regular fa-percent"     
    },
    {
      name: 'Best available rates',    
      icon:"fa-solid fa-wave-square"       
    },
    {
      name: 'Convenience',    
      icon:"fa-regular fa-thumbs-up"        
    },
  ];
 
  ngOnInit(): void {
    
    this.Form = new FormGroup({
      FullName: new FormControl("", [
        Validators.required,
       
      ]),
      Email: new FormControl("", [
        Validators.required,
        Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')
       
      ]),
      Phone: new FormControl("", [
        Validators.required,
        Validators.pattern("^[+]*[(]{1}[0-9]{1,3}[)]{1}[0-9]{1}[-][0-9]{2}[-][0-9]{2}[-][0-9]{2}[-][0-9]{2}$")
       
       
      ]),
      Password: new FormControl("", [
        Validators.required,
       
      ]),
      Agree: new FormControl("", [
        Validators.requiredTrue,
       
      ]),
      Date: new FormControl("", [
        Validators.required,
       
      ])
    });

  }








/* submit button action */ 

  submit(){
if(!this.Form.invalid)
    alert("DONE !")
  }



  /* password validation */ 

   trigger(value){


    const comment = document.getElementById("comment");
   
    const validationPassword = document.getElementById("validationPassword");
    const text = document.getElementById("text");
    
    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let  regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    var no;



    if(value != ""){
      validationPassword.style.display = "block";
     
      if(value.length <= 3 && (value.match(regExpWeak) || value.match(regExpMedium) || value.match(regExpStrong)))no=1;
      if(value.length >= 6 && ((value.match(regExpWeak) && value.match(regExpMedium)) || (value.match(regExpMedium) && value.match(regExpStrong)) || (value.match(regExpWeak) && value.match(regExpStrong))))no=2;
      if(value.length >= 6 && value.match(regExpWeak) && value.match(regExpMedium) && value.match(regExpStrong))no=3;
      if(no==1){
        this.progressColor="primary";
        this.progressvalue="33.33";
       
        text.textContent = "week password";
        comment.textContent="please use digits and symbols ."
       
      }
      if(no==2){
        this.progressColor="warn";
        this.progressvalue="66.66";
        text.textContent = "Medium password";
        comment.textContent="Please use symbols like !,@,#,$,% ."
       
      }
      if(no==3){
        this.progressColor="accent";
        this.progressvalue="100";
        text.textContent = "Strong Password";
        comment.textContent="Great this will do . just don't forget him ."
       
      }
     
  
    }else{
      validationPassword.style.display = "none";
     
    
    }
  }


}
