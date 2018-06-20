import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { basicRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FcalertModule, FcbandModule, FcmodalModule, FcprogressModule, FclistModule, FctabModule, FctlbModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { ButtonComponent } from './button/button.component';
import { AnyComponent } from './any/any.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckComponent } from './check/check.component';
import { ChosenComponent } from './chosen/chosen.component';
import { ComboComponent } from './combo/combo.component';
import { DateComponent } from './date/date.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { DividerComponent } from './divider/divider.component';
import { DoubleComponent } from './double/double.component';
import { EditorComponent } from './editor/editor.component';
import { FastpositionComponent } from './fastposition/fastposition.component';
import { IconComponent } from './icon/icon.component';
import { LongComponent } from './long/long.component';
import { ManyComponent } from './many/many.component';
import { PanelComponent } from './panel/panel.component';
import { PopoverComponent } from './popover/popover.component';
import { RadioComponent } from './radio/radio.component';
import { RateComponent } from './rate/rate.component';
import { SwitchComponent } from './switch/switch.component';
import { TextComponent } from './text/text.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TimeComponent } from './time/time.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TitleComponent } from './title/title.component';
import { UploadComponent } from './upload/upload.component';
import { TreeComponent } from './tree/tree.component';
import { BacktopComponent } from './backtop/backtop.component';
import { environment } from '../../../environments/environment';
import {
  AppService, DaoService, CacheService, CommonService, MenuService, MessageService,
  SysappbuttonsService, SysappfieldsService, SysappfldgroupService, SysapplinksService, SysdicappdetailService, SysdicappService,
  SysdicdetailService, SysdicService, SysmessageService, SysinterfaceparamService,
  SysinterfaceService, SysmenuService, SysstyleService
} from 'fccore';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(basicRouters),
    FcadModule,
    FcalertModule,
    FcbasicModule,
    FcbandModule,
    FclayoutModule,
    FcmodalModule,
    FcnavModule,
    FcprogressModule,
    FclistModule,
    FctabModule,
    FcnavModule,
    FctlbModule
  ],
  exports: [

  ],
  declarations: [
    ButtonComponent,
    BacktopComponent,
    AnyComponent,
    AvatarComponent,
    BadgeComponent,
    CalendarComponent,
    CarouselComponent,
    CheckComponent,
    ChosenComponent,
    ComboComponent,
    DateComponent,
    DatetimeComponent,
    DividerComponent,
    DoubleComponent,
    EditorComponent,
    FastpositionComponent,
    IconComponent,
    LongComponent,
    ManyComponent,
    PanelComponent,
    PopoverComponent,
    RadioComponent,
    RateComponent,
    SwitchComponent,
    TextComponent,
    TextareaComponent,
    TimeComponent,
    TimelineComponent,
    TitleComponent,
    TreeComponent,
    UploadComponent
  ],
  providers: [
    AppService, DaoService, CacheService, CommonService, MenuService, MessageService,
    SysappbuttonsService, SysappfieldsService, SysappfldgroupService, SysapplinksService, SysdicappdetailService, SysdicappService,
    SysdicdetailService, SysdicService, SysmessageService, SysinterfaceparamService, SysinterfaceService, SysmenuService, SysstyleService
  ]
})
export class BasicModule { }
