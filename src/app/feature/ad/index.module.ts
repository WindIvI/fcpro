import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { adRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { AdformComponent } from './adform/adform.component';
import { AddetailComponent } from './addetail/addetail.component';
@NgModule({
  imports: [
    RouterModule.forChild(adRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FccoreModule
  ],
  exports: [

  ],
  declarations: [
    AdformComponent,
    AddetailComponent
  ],
  providers: [

  ]
})
export class AdModule { }
