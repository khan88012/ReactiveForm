import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor-form-builder',
  templateUrl: './profile-editor-form-builder.component.html',
  styleUrls: ['./profile-editor-form-builder.component.css']
})
export class ProfileEditorFormBuilderComponent implements OnInit {

  profileForm = this.fb.group(
    {
      firstName:['',Validators.required],
      lastName:[''],
      address: this.fb.group(
        {
          street:[''],
          city:[''],
          state:[''],
          zip:['']
        }
      ),
    }
  );

  constructor(private fb:FormBuilder) { }

  onSubmit(){
    console.warn(this.profileForm.value);
  }
 

  ngOnInit(): void {
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
