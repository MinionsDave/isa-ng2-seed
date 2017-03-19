import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  settings = {
    // add: {
    //   addButtonContent: '<i class="fa fa-plus-circle"></i>',
    //   saveButtonContent: '<i class="fa fa-check"></i>',
    //   cancelButtonContent: '<i class="fa fa-close"></i>',
    // },
    add: null,
    actions: {
      columnTitle: '操作'
    },
    noDataMessage: '暂无数据',
    edit: {
      editButtonContent: '<i class="fa fa-pencil-square-o""></i>',
      saveButtonContent: '<i class="fa fa-check"></i>',
      cancelButtonContent: '<i class="fa fa-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash-o"></i>',
      confirmDelete: true
    },
    columns: {
      name: {
        title: '真实姓名'
      },
      username: {
        title: '用户名'
      },
      email: {
        title: '邮箱'
      }
    }
  };

  data: any[] = [];

  constructor() {
    while (this.data.length < 100) this.data.push({
      id: 1,
      name: '张三',
      username: '海阔天空',
      email: 'zhangsan@gmail.com'
    });
  }

  ngOnInit() {
  }

}
