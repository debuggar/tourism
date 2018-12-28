import { Component , OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

import * as $ from 'jquery';

@Component({
    selector: 'app-holydays',
    templateUrl: './holidays.component.html',
    styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
    constructor() {
       /*  setTimeout( () => {
            this.fullCalendar();
        }, 2000 ); */
    }
    ngOnInit() {
        this.fullCalendar();
    }
    fullCalendar() {
        $('#calendar').fullCalendar({
            header: {
                left:   'prev',
                center: 'title',
                right:  ''
            },
            contentHeight: 'auto',
            eventSources: [
                {
                events: [
                    {
                    title  : 'event1',
                    start  : new Date()
                    },
                    {
                    title  : 'event3',
                    start  : '2018-12-26'
                    }
                ],
                color: 'black',
                textColor: 'yellow'
                }
            ]
        });
        const calendar = $('#calendar').fullCalendar('getCalendar');
        calendar.on('dayClick', function(date, jsEvent, view) {
            console.log('clicked on ' + date.format());
        });

        $('#calendar').fullCalendar('prev');

        $('#calendar2').fullCalendar({
            header: {
                left:   '',
                center: 'title',
                right:  'next'
            },
            contentHeight: 'auto',
            eventSources: [
                {
                events: [
                    {
                    title  : 'event1',
                    start  : new Date()
                    },
                    {
                    title  : 'event3',
                    start  : '2018-12-26'
                    }
                ],
                color: 'black',
                textColor: 'yellow'
                }
            ]
        });
        $('#calendar2').fullCalendar('next');
    }
    slide(e) {
        const slideAttr = $(e.target).attr('slide-id');
        $('html, body').animate({
            'scrollTop' : $(slideAttr).position().top
        });
    }
}
