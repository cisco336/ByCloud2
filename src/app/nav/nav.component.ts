import { Component, OnInit } from '@angular/core';
import { faHome, faCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faHome = faHome;
  faCircle = faCircle;
  constructor() { }

  ngOnInit() {
  }
  testAlert() {
    alert('I\'ve been clicked');
  }
}
