import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-radio-inputs',
  templateUrl: './checkbox-radio-inputs.component.html',
  styleUrls: ['./checkbox-radio-inputs.component.scss']
})
export class CheckboxRadioInputsComponent implements OnInit {
  checked: boolean;

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

}
