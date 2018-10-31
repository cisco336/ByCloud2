import { trigger, transition, state, animate, style, query, group } from '@angular/animations';

export const animationsAll = [
    trigger('fade', [
        state('void', style({ opacity: 0 })),
        transition('* <=> *', [ animate(5000) ])
    ]),
    trigger('move', [
        state('void', style({ transform: 'translateY(-100%)' })),
        transition(':enter, :leave', [ animate(1000) ])
    ]),
    trigger('bounce1', [
        state('void', style({ width: 0 })),
         transition(':enter, :leave', [ animate('.5s cubic-bezier(0.82,-0.65, 0.28, 1.77)') ])
    ])
];
