import {Component, Input, Self} from '@angular/core';
import {ControlValueAccessor, NgModel} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [NgModel]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() label;
  @Input() value: string;
  @Input() checkboxClass: string;

  public model: NgModel;
  public state: boolean;

  public constructor(@Self() state: NgModel) {
    this.model = state;
    state.valueAccessor = this;
  }

  public onChange(value: any): void {}
  public onTouch(value: any): void {}
  public writeValue(state: any): void {
    this.state = state;
  }

  public registerOnChange(fn: any): void {
    this.onChange = function(state: boolean) {
      this.writeValue(state);
      this.model.viewToModelUpdate(state);
    };
  }
  public registerOnTouched(fn: any): void { this.onTouch = fn; }
}
