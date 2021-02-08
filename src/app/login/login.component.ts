import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor() {
   }

  ngOnInit(): void {

  }

  submitLogin(loginData) {
    console.log(loginData);

    if (loginData.email === "kevin succhiami il cazzo") {
      var xhr = new XMLHttpRequest();
        var theUrl = "https://reqres.in/api/register";
        xhr.open("POST", theUrl);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
        }));
        xhr.onload = function() {
          let responseData = JSON.parse(xhr.response);

          if (this.readyState === 4 && this.status === 200 && responseData.token === "QpwL5tke4Pnpja7X4" ) {
            alert("login successfully!");
          }
        }
    } else alert("l'email da utilizzare è eve.holt@reqres.in");
  }

}
