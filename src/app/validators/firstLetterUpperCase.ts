import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstLetterUpperCase(): ValidatorFn {

    //  error TS2322: Type '(control: AbstractControl) => { firstLetterUpperCase: {
    // message: string; }; } | undefined' is not assignable to type 'ValidatorFn'.
    // This Error will occur if your Angular Cli version is newest and need to use ValidationErrors.

    return (control: AbstractControl) : ValidationErrors | null => {
        const value = <string>control.value;
        if(!value) return null;
        if(value.length === 0) return null;
        const firstLetter = value[0];
        if(firstLetter !== firstLetter.toUpperCase()){
            return{
                firstLetterUpperCase :{
                    message: 'The first letter must be uppercase'
                }
            }
        }
       return null; 
    }
    
}