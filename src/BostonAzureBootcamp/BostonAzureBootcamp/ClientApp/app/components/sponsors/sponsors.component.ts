import { Component } from '@angular/core';

@Component({
    selector: 'sponsors',
    templateUrl: './sponsors.component.html'
})
export class SponsorsComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
