/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Subject } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd';
import { DialogListArgs, DialogListComponent } from '../components/core/dialog/dialogList.component';
import { GridApi } from 'ag-grid/dist/lib/gridApi';
import { FclistdataComponent } from 'fccomponent';
import { RowDataTransaction } from 'ag-grid/dist/lib/rowModels/inMemory/inMemoryRowModel';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
@Injectable()
export class SysserviceService extends ParentService {
    constructor(public providers: ProvidersService, private nzModal: NzModalService, private sysbizcoderuleService: SysbizcoderuleService, private sysproductService: SysproductService) {
        super(providers, "SYSSERVICE");
    }
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj() {
        return this.providers.appService.initObjDefaultValue(this.app);
    }
    /** YM
     * 根据
     * @param resId 
     */
    getBizCodeByAid(pid: string) {
        return this.sysbizcoderuleService.getBizCodeByAid(pid, 'SYSBIZCODERULE');
    }
    /** YM
     * 获取所有产品
     */
    getAllProduct() {
        return this.sysproductService.findWithQuery({});
    }
    /** YM
     * 获取字母快速查询的按钮数据
     */
    getLooksUp() {
        return this.sysproductService.fastLookUp();
    }
    /** YM
  * 打开窗口的函数方法
  * @param dialogArgs 
  */
    openDialog(dialogArgs: DialogListArgs) {
        return this.nzModal.open({
            title: dialogArgs.configInterface.title ? dialogArgs.configInterface.title : '',
            content: dialogArgs.configInterface.content ? dialogArgs.configInterface.content : DialogListComponent,
            onOk() { },
            onCancel() { },
            footer: false,
            width: dialogArgs.configInterface.width,
            style: dialogArgs.configInterface.style,
            componentParams: {
                options: dialogArgs
            }
        })
    }
    /**
     * 根据服务ID获取视图数据
     * @param serviceId 
     */
    getSysViews(serviceId) {
        return this.appService.findWithQuery('SYSVIEW', { WHERE: `SERVICEID ='${serviceId}'` });
    }
    /**
     * 根据服务ID获取接口数据
     * @param serviceId 
     */
    getSysInterfaces(serviceId) {
        return this.appService.findWithQuery('SYSINTERFACE', { WHERE: `SERVICEID ='${serviceId}'` })
    }
}
