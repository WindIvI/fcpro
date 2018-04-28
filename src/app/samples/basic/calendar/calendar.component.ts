import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: [``]
})
export class CalendarComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCCALENDAR', mainService);
  }
}