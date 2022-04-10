import { Component, OnInit } from '@angular/core';
import { emailValidator, passwordsDontMatch } from 'src/app/shared/validators';
import {Subject} from "rxjs";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailValidator = emailValidator;
  passwordsDontMatch = passwordsDontMatch;
  killSubscription = new Subject();
  emailIsTaken: boolean = false;
  phoneNumberPattern = /^\d{9}$/;
  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone:new FormControl ('', [Validators.pattern(this.phoneNumberPattern)]),
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, passwordsDontMatch( ()=> this.form?.get('password'),
        this.killSubscription)]]
    })
  }
  get email(): AbstractControl{
    return this.form.controls['email'];
  }

  ngOnInit(): void {
  }

  registerHandler(): void {
    if (this.form.invalid) {
      return
    }
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        this.emailIsTaken = true;
      }
    })

  }

  ngOnDestroy(): void {
    this.killSubscription.next(null);
    this.killSubscription.complete();
  }

}
