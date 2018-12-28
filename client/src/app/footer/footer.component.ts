import { Component } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    constructor() {
        this.scriptFn();
    }
    public scriptFn() {
        $('ul.dropdown-menu li').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });
       // $('.counter').countUp();
    }
}
