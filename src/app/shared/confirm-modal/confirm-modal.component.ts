import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ContentChild
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

import { ConfirmService } from '../../core/services';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @ContentChild('content') childContent;

  content: string;

  constructor(private _confirmService: ConfirmService) { }

  ngOnInit() {
    this._confirmService.open$.subscribe((content: string) => {
      /**
       * content存在代表为简单的字符串式的confirm
       * childContent存在代表复杂的自定义html的confirm
       * 都不存在或都存在说明该component不应处理此confirm
       */
      if (!content && !this.childContent) return;
      if (content && this.childContent) return;
      this.content = content;
      this.modal.show();
    });
  }

  confirm() {
    this._confirmService.confirm();
    this.modal.hide();
  }
}
