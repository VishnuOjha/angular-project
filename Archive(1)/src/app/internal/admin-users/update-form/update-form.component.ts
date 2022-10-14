import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  optionData: { label: string, value: string }[]
  disable: string
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue]
    },
    );
  }

  ngOnInit(): void {
    this.optionData = [{ label: "role", value: "role" }, { label: "role1", value: "role1" }, { label: "role2", value: "role2" }]
    this.disable = 'disabled'

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
