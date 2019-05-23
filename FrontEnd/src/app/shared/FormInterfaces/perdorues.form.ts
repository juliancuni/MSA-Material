import { FormlyFieldConfig } from '@ngx-formly/core';
import { Validators } from '@angular/forms';

export class PerdoruesFormModel {
    formFields() {
        return <FormlyFieldConfig[]>[{
            key: 'emer',
            type: 'input',
            templateOptions: {
                label: 'Emer',
                placeholder: 'Emer',
                required: true,
            }
        },
        {
            key: 'mbiemer',
            type: 'input',
            templateOptions: {
                label: 'Mbiemer',
                placeholder: 'Mbiemer',
                required: true,
            }
        },
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email',
                placeholder: 'email',
                required: true,
            },
            validators: {
                validation: Validators.compose([Validators.email])
            },
            validation: {
                messages: {
                    email: "Email i pasakte"
                }
            }
        },
        {
            key: 'username',
            type: 'input',
            templateOptions: {
                label: 'Username',
                placeholder: 'Username',
                required: true,
            }
        },
        {
            key: 'password',
            validators: {
                fieldMatch: {
                    expression: (control) => {
                        const value = control.value;
                        return value.passwordConfirm === value.password
                            // avoid displaying the message error when values are empty
                            || (!value.passwordConfirm || !value.password);
                    },
                    message: 'Password != Perserit_Pass',
                    errorPath: 'passwordConfirm',
                },
            },
            fieldGroup: [
                {
                    key: 'password',
                    type: 'input',
                    templateOptions: {
                        type: 'password',
                        label: 'Password',
                        placeholder: 'Password duhet te jete te pakten 4 karaktere',
                        required: true,
                        minLength: 4,
                    },
                },
                {
                    key: 'passwordConfirm',
                    type: 'input',
                    templateOptions: {
                        type: 'password',
                        label: 'Perserit Password',
                        placeholder: 'Perserit Password',
                        required: true,
                    },
                },
            ],
        }]
    }
}