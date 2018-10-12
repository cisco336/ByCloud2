import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  faPlus = faPlus;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  constructor() { }

  ngOnInit() {
  }

}
