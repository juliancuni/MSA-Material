import { FormlyFieldConfig } from '@ngx-formly/core';

export class LoginFormModel {

    formFields() {
        return <FormlyFieldConfig[]>
            [{
                key: 'username',
                type: 'input',
                templateOptions: {
                    label: 'Username',
                    placeholder: 'Username',
                    required: true,
                },
                validation: {
                    messages: {
                        required: 'Username s\'mund te lihet bosh'
                    }
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password',
                    required: true,
                },
                validation: {
                    messages: {
                        required: 'Password s\'mund te lihet bosh'
                    }
                }
            }]
        // ,
        // {
        //   key: 'rememberMe',
        //   type: 'checkbox',
        //   templateOptions: {
        //     label: 'Rember me',
        //     required: false,
        //   }
        // }];
    }
}