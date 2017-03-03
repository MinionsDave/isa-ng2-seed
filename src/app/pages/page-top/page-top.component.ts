import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss']
})
export class PageTopComponent implements OnInit {
  currentPageTitle: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._router.events
                .filter(e => e instanceof NavigationEnd)
                .map(() => this._route)
                .map(route => {
                  while (route.firstChild) route = route.firstChild;
                  return route;
                })
                .filter(route => route.outlet === 'primary')
                .mergeMap(route => route.data)
                .subscribe(data => this.currentPageTitle = data['title']);
  }

}
