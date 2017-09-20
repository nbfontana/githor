import {AbstractControl, FormGroup} from "@angular/forms";

/**
 * Marca todos os campos de um form como touched e dirty
 *
 * @param form
 */
export function markAllFormFieldAsDirty(form: FormGroup) {
  for (const field in form.controls) {
    if (form.controls.hasOwnProperty(field)) {
      form.controls[field].markAsDirty();
      form.controls[field].markAsTouched();
    }
  }
}

/**
 * Marca todos os campos de um form como pristine e untouched
 *
 * @param form
 */
export function markAllFormFieldAsPristine(form: FormGroup) {
  for (const field in form.controls) {
    if (form.controls.hasOwnProperty(field)) {
      form.controls[field].markAsPristine();
      form.controls[field].markAsUntouched();
    }
  }
}

export function enableIfDisableElseFormControl(form: AbstractControl, formControlName: string, condition: boolean): void {
  condition ? form.get(formControlName).enable() : form.get(formControlName).disable();
}

export function disableIfEnableElseFormControl(form: FormGroup, formControlName: string, condition: boolean): void {
  condition ? form.get(formControlName).disable() : form.get(formControlName).enable();
}

export function disableFormControl(form: FormGroup, formControlName: string): void {
  form.get(formControlName).disable();
}

export function enableFormControl(form: FormGroup, formControlName: string): void {
  form.get(formControlName).enable();
}
