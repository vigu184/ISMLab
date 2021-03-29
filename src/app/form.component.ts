import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm;

  constructor(private formBuilder: FormBuilder, private httpClient:HttpClientModule) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
        fullname: ['', Validators.pattern('')],
        email:['', Validators.pattern('')],
        password:['', Validators.pattern('')]
    });
  }

  onSubmit()
  {
    if(this.userForm.password.valid)
    {
      console.log("Registration Success!");
    }
    else
    {
      alert('You missed a Number')
    }
  }

}
