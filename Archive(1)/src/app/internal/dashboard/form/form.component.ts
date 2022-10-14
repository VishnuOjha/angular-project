import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  optionData: { label: string, value: string }[]
  registerForm: FormGroup
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.optionData = [{ label: "GET", value: "get" }, { label: "POST", value: "post" }, { label: "PATCH", value: "patch" }, { label: 'DELETE', value: 'delete' }]
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }
  get f() {
    return this.registerForm.controls
  }

  onSubmit() {
    this.submitted = true

  }

}
