import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  optionData: { label: string, value: string }[]
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.optionData = [{ label: "role", value: "role" }, { label: "role1", value: "role1" }, { label: "role2", value: "role2" }]
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
    },
    );
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
