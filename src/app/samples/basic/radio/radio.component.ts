import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styles: [``]
})
export class RadioComponent extends ComponentParent {
  radioValueSingle: string = 'a';
  radioOption: any[] = [{ icon: '', label: 'A', value: 'a' }];
  radioValue: string = 'a';
  radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  radioOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  radioOptionsReadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c'}];
  constructor(public mainService: ComponentService) {
    super('FCRADIO', mainService);
  }
}