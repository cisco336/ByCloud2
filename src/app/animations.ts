import { trigger, transition, state, animate, style } from '@angular/animations';
export let fade = trigger('fade', [
    state('void', style({ opacity:0 })),
    transition(':enter, :leave', [ animate(2000) ])
]);

export let move = trigger('move', [
    state('void', style({ transform: 'translateY(-100px)' })),
    transition(':enter, :leave', [ animate(1000) ])
]);