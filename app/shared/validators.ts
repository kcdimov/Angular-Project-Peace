import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {takeUntil} from "rxjs/operators";


export function emailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value) ? null : {invalidEmail: true};
}

export function passwordsDontMatch(getTargetControl: () => AbstractControl | null,
                                   killSubscriptions: Observable<any>) {
  let subscription: Subscription | null = null;

  return function (control: AbstractControl) {
      if (subscription) {
        subscription.unsubscribe();
        subscription = null;
      }
      const targetControl = getTargetControl();

      if (!targetControl) {
        return null;
      }
      subscription = targetControl.valueChanges
        .pipe(takeUntil(killSubscriptions))
        .subscribe({
          next: ()=> {
            control.updateValueAndValidity();
          },
          complete: () => {
            subscription = null;
            }
        });
      return targetControl?.value === control?.value ? null : {passwordsDontMatch: true}
  };

}
