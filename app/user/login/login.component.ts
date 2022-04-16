import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {LocalStorage} from "../../core/injection-token";
import { emailValidator } from "src/app/shared/validators"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  exportAs: 'ngForm'
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group( {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  }  )

  // emailValidator: EmailValidator | undefined;
  // @ts-ignore
  emailValidator: emailValidator;
  notCorrectInputs: boolean = false;

  @ViewChild('form', {read: NgForm, static: false})
  form!: NgForm;
  NgForm = NgForm

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    @Inject(LocalStorage) private localStorage: Window['localStorage']
  ) { }


  ngOnInit(): void {
  }

  loginHandler(form: NgForm): void {
    //this.userService.login$();
    if (form.invalid) {
      return
    }
    const {email, password} = form.value;
    this.userService.login({email, password}).subscribe({
      next: () => {
        this.router.navigate(['/profile']);
        this.localStorage.setItem('<USER>', JSON.stringify(this.userService.user));
      },
      error: (err) => {
        this.notCorrectInputs = true;
      }
    })
  }


}
