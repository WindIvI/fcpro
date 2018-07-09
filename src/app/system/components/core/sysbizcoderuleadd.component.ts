import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SysbizcoderuleService } from '../../services/sysbizcoderule.service';
import { NzModalService } from 'ng-zorro-antd';
import { LayoutService } from '../../services/layout.service';
import { SysbizcodedefineService } from '../../services/sysbizcodedefine.service';
@Component({
    selector: 'sysbizcoderule',
    template: `
  <fc-layoutpanel fcFull="true">
  <fc-tlbform fccontent [fcAppid]="'SYSBIZCODEDEFINE'" (fcEvent)="tlbformEvent($event)" fctoolbar></fc-tlbform>
  <fc-title fccontent fcLabel="编码类型新增" fcBorder="bottom"></fc-title>
  <fc-combo fccontent [fcLabel]="'编码字段类型'" [(ngModel)]="mainObj.SSEGMENT_TYPE" [fcAppid]="appId" fcFieldCode="SSEGMENT_TYPE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-combo>
  <div fccontent>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SDEFAULT_VALUE"  fcLabel="值" name="SDEFAULT_VALUE" ></fc-text>
        <fc-textarea fccontent [fcAppid]="'SYSBIZCODERULE'"  [(ngModel)]="mainObj.SDESCRIPTION" fcLabel="描述" name="SDESCRIPTION"></fc-textarea> 
  </div>
  <div fccontent>
        <fc-layoutcol fcSpans="1,1" fccontent>
            <fc-text fccontent1 style="flex:1" [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
            <fc-text fccontent2 style="flex:1" [(ngModel)]="mainObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
            <fc-text fccontent1 style="flex:1" [(ngModel)]="mainObj.SDEFAULT_VALUE"  fcLabel="默认值" name="SDEFAULT_VALUE" ></fc-text>
            <fc-text fccontent2 style="flex:1" [fcLabel]="'枚举字典'" [(ngModel)]="mainObj.SENUMERATE_TERM_CODE" [fcAddonAfter]="'fc-icon-bgsearch'" (click)="modalscrator1.showModal()" name="SCRATOR" fcMode="icon" ></fc-text>
            <fc-modallist #modalscrator1 fcTitle="枚举字典" [fcAppid]="appId" [fcType]="'multiple'" (fcEvent)="modalscratorEvent($event)"
            [fcCondition]="mainService.userCondition"></fc-modallist> 
        </fc-layoutcol>
        <div style="height:215px;">
            <fc-listdata  fccontent #waterList [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="componentEvents('delet',$event)"></fc-listdata>
        </div>
  </div>
  <div fccontent>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.NFIXED_NUM"  fcLabel="限制长度" name="NFIXED_NUM" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.NSERIALTYPE_START_VALUE"  fcLabel="截取起始位置" name="NSERIALTYPE_START_VALUE" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.NSERIALTYPE_FULL_CODE"  fcLabel="填充码" name="NSERIALTYPE_FULL_CODE" ></fc-text>
  </div>
  <div fccontent>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="显示名称" name="SSEGMENT_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SDATE_FORMAT_CODE"  fcLabel="日期格式" name="SDATE_FORMAT_CODE" ></fc-text>
        <fc-textarea fccontent [fcAppid]="'SYSBIZCODERULE'" fcLabel="描述" name="SDESCRIPTION"  [(ngModel)]="mainObj.SDESCRIPTION" ></fc-textarea>
  </div>
  <div fccontent>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.NFIXED_NUM"  fcLabel="限制长度" name="NFIXED_NUM" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.NSERIALTYPE_FULL_CODE"  fcLabel="填充码" name="NSERIALTYPE_FULL_CODE" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.NSERIALTYPE_START_VALUE"  fcLabel="起始值" name="NSERIALTYPE_START_VALUE" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="mainObj.NSERIALTYPE_STEP_VALUE"  fcLabel="增量值" name="NSERIALTYPE_STEP_VALUE" ></fc-text>
  </div>
</fc-layoutpanel>
  
    `,
    styles: [`
  `]
})
export class SysbizcoderuleaddComponent extends ParentEditComponent {
    rulemodalObj: any;
    constructor(public mainService: SysbizcodedefineService,
        public router: Router,
        public layoutService : LayoutService,
        public activeRoute: ActivatedRoute,
        public modalService: NzModalService) {
        super(mainService, router, activeRoute);
    }
    addNew(mainObj: any): boolean {
        this.mainObj = {
            SSEGMENT_TYPE: '',
            SSEGMENT_NAME:'',
            SPARAM_NAME:'',
            SDEFAULT_VALUE:'',
            SDESCRIPTION:'',
            SENUMERATE_TERM_CODE:'',
            NFIXED_NUM:'',
            NSERIALTYPE_START_VALUE:'',
            NSERIALTYPE_FULL_CODE:'',
            SDATE_FORMAT_CODE:'',
            NSERIALTYPE_STEP_VALUE:'',
          }
        return true;
    }
    init(): void {
    }
    ngOnInit(): void {
     }
    getDefaultQuery() {
    }
    event(eventName: string, context: any): void {
    }
}
// 新修改版本