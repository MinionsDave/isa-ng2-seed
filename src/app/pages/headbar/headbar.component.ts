import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {
  constructor(private _sidebarService: SidebarService) {
  }

  ngOnInit() {
  }

  sidebarReverse() {
    this._sidebarService.reverse();
  }
}
