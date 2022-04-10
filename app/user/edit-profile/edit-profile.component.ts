import {Component, Inject, OnDestroy, OnInit,} from '@angular/core';
import { passwordsDontMatch } from 'src/app/shared/validators'
import {Subject} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {LocalStorage} from "../../core/injection-token";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy {
  passwordIsIncorrect: boolean = false;
  passwordsDontMatch = passwordsDontMatch;
  killSubscription = new Subject();
  form: FormGroup;


  constructor(private userService: UserService, private router: Router, private fb: FormBuilder,
    @Inject(LocalStorage) private localStorage: Window['localStorage']) {
    this.form = this.fb.group( {
     firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      oldPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, passwordsDontMatch(()=>
        this.form?.get('newPassword'), this.killSubscription
      )]]
    })
  }

  editProfile(): void {
  if (this.form.invalid) {
    return;
  }
  this.userService.editProfile(this.form.value).subscribe({
    next: () => {
      this.router.navigate(['/profile']);
    },
    error: (err) => {
      this.passwordIsIncorrect = true;
    }
  })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.killSubscription.next(null);
    this.killSubscription.complete();
  }

}
