import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {

  private _selector = 'preloader';
  private _element: HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
  }

  show() {
    this._element.style['display'] = 'block';
  }

  hide() {
    this._element.style['display'] = 'none';
  }

}
