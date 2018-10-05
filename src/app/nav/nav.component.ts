import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faHome = faHome;
  constructor() { }

  ngOnInit() {
  }
  testAlert() {
    alert('I\'ve been clicked');
  }
}
