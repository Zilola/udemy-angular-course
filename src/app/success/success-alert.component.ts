import { Component } from "@angular/core";


@Component({
    selector: 'success-alert',
    // templateUrl: './success-alert.component.html'
    template: `
    <h1>You clicked on {{message}} !!</h1>
    `,
    styles:[`
    h1{
        color: green;
    }
    `
    ]
})
export class SuccessAlert{
    message = 'Success-Alert' ;
}