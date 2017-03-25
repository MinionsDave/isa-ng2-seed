import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-pure-css-table',
  templateUrl: './pure-css-table.component.html',
  styleUrls: ['./pure-css-table.component.scss']
})
export class PureCssTableComponent implements OnInit {
  addFormShowFlag: boolean;
  userList: any[] = [];
  userModelForAdd: any;
  addForm: FormGroup;
  private addFormOriginValue = {
    name: '',
    status: '请选择',
    phone: '',
    idcard: '',
    bankNumber: ''
  };

  userTypes = [
    '请选择',
    '超级管理员',
    '内部管理员',
    '审批员',
    '财务人员'
  ];

  constructor(private fb: FormBuilder) {
    this.addForm = fb.group(this.addFormOriginValue);

    while (this.userList.length < 10) this.userList.push({
      name: '张三',
      status: '内部管理员',
      phone: 15658898520,
      idcard: 330129388192919131,
      bankNumber: 6228289122831192716
    });
  }

  ngOnInit() {
  }

  add() {
    this.userList.unshift(this.addForm.value);
    this.addFormShowFlag = false;
    this.addForm.reset(this.addFormOriginValue);
  }
}
