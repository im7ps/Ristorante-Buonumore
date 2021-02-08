
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validator/custom-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Output() passwordEmitter = new EventEmitter();

  public frmSignup: FormGroup;


  constructor(private fb: FormBuilder) {
    this.frmSignup = this.createSignupForm();
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.'); non so perchè lo metta
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  submitRegistration(registration_data) {

    if (registration_data.password === registration_data.confirmPassword) {
      if (registration_data.email === "eve.holt@reqres.in") {

        var xhr = new XMLHttpRequest();
        var theUrl = "https://reqres.in/api/register";
        xhr.open("POST", theUrl);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
        }));
        xhr.onload = function() {
          var f = registration_data.email;
          let responseData = JSON.parse(xhr.response);
          if (this.readyState === 4 && this.status === 200 && responseData.token === "QpwL5tke4Pnpja7X4" ) {
            alert("registered successfully!");
          }
        }
      } else alert("l'email da utilizzare è eve.holt@reqres.in");
    } else alert("le due password non sono uguali");
  }
}
