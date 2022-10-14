import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  href: string = ""
  optionData: { label: string, value: string }[]
  rolesForm: FormGroup
  policiesForm: FormGroup
  innerPermissionForm: FormGroup
  submittedRoles = false
  submittedPolicies = false
  submittedPermission = false


  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.href = this.route.url
    this.optionData = [{ label: "role", value: "role" }, { label: "role1", value: "role1" }, { label: "role2", value: "role2" }]
    this.rolesForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
    this.policiesForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
    this.innerPermissionForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }
  get fp() {
    return this.innerPermissionForm.controls
  }
  onSubmitRoles() {
    this.submittedRoles = true

  }
  onSubmitPolicies() {
    this.submittedPolicies = true

  }
  onSubmitPermission() {
    this.submittedPermission = true
    if (this.innerPermissionForm.invalid) {
      return;
    }

  }

}
