import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-form',
  templateUrl: './inline-form.component.html',
  styleUrls: ['./inline-form.component.scss']
})
export class InlineFormComponent implements OnInit {
  isRemember: boolean;
  constructor() { }

  ngOnInit() {
  }

}
