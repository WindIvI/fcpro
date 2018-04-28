import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [``]
})
export class ButtonComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCBUTTON', mainService);
  }
}
