import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styles: [``]
})
export class AvatarComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCAVATAR', mainService);
  }
}

