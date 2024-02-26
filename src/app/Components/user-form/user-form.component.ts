import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  registerForm : FormGroup;

  constructor( private _fb : FormBuilder){
    
    this.registerForm = this._fb.group({

      department : '',
      name: '',
      mobiles: '',
      email: '',
      doj : '',
      gender: '',
      salary: '',
      usercode: '',
      status: '',

    });
  }

  onFormSubmit()
  {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
    }
  }

}
