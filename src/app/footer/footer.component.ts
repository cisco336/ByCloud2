import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {;
  public constants = [];
  constructor(private _constantService: ConstantsService) {}

  ngOnInit() {
    this._constantService.getConstants()
        .subscribe(constant => this.constants = constant);
  }

}
