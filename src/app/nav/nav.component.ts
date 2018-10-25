import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from '../constants.service';
// import { faHome, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() title: string;
  // faHome = faHome;
  // faCircle = faCircle;
  public constants = [];
  constructor(private _constantService: ConstantsService) {}

  ngOnInit() {
    this._constantService.getConstants()
        .subscribe(constant => this.constants = constant);
  }
  testAlert() {
    alert('I\'ve been clicked');
  }
}
