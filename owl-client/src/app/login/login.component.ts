//https://medium.freecodecamp.org/validating-reactive-forms-with-default-and-custom-form-field-validators-in-angular-5586dc51c4ae

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormService } from '../shared/form.service';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;
  public formErrors = {
    name: '',
    password: '',
  };

  constructor(
    public form: FormBuilder,
    public formService: FormService,
    public snackbar: MatSnackBar,
    public loginSvc: LoginService,
    private router: Router
  ) { }

  public signUp() {

    // mark all fields as touched
    this.formService.markFormGroupTouched(this.loginForm);

    // right before we submit our form to the server we check if the form is valid
    // if not, we pass the form to the validateform function again. Now with check dirty false
    // this means we check every form field independent of wether it's touched 
    if (this.loginForm.valid) {

      this.snackbar.open('Loggin in...', 'Close', {
        duration: 3000,
      });
      this.loginSvc.login(this.loginForm.value);

      this.loginForm.reset();
    } else {
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, false)
    }
  }
  
  // build the user edit form
  public buildForm() {
    this.loginForm = this.form.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // on each value change we call the validateForm function
    // We only validate form controls that are dirty, meaning they are touched
    // the result is passed to the formErrors object
    this.loginForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, true)
    });
  }

    // initiate component
  public ngOnInit() {

    this.loginSvc.isLoggedIn().subscribe((loggedIn) => {
      if(loggedIn){
        this.router.navigate(['/not']);
      }
    });

    this.buildForm();
  }

}
