import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { datePickerOptions } from '../../../../../../../globalConstants/datepicker-options';
import { CONDITIONS } from './search-conditions.constant';

@Component({
  selector: 'app-date-pickers',
  templateUrl: './date-pickers.component.html',
  styleUrls: ['./date-pickers.component.scss']
})
export class DatePickersComponent implements OnInit {
  datePickerForm: FormGroup;
  datePickerOptions = datePickerOptions;

  constructor(fb: FormBuilder) {
    const formControls = {};
    CONDITIONS.forEach(o => formControls[o.field] = '');
    this.datePickerForm = fb.group(formControls);
  }

  ngOnInit() {
    CONDITIONS
      .filter(o => o.isDatePickerFields)
      .forEach(o => {
        const field = o.field;
        this.datePickerForm.controls[field].valueChanges
          .filter(value => value.formatted)
          .map(value => value.formatted)
          .subscribe(value => this.datePickerForm.controls[field].setValue(value));
      });
  }

}
