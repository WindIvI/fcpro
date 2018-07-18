import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ErrorComponent } from './components/error/error.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { MainService } from './services/main.service';
import { SysdatasourceService } from './services/sysdatasource.service';
import { SysdatasourceComponent } from './components/core/sysdatasource.component';
import { SysappComponent } from './components/core/sysapp.component';
import { SysdicComponent } from './components/core/sysdic.component';
import { SyscomponentComponent } from './components/core/syscomponent.component';
import { SysbackcodeComponent } from './components/core/sysbackcode.component';
import { SysmessageComponent } from './components/core/sysmessage.component';
import { SysparamComponent } from './components/core/sysparam.component';
import { SysroleauthComponent } from './components/core/sysroleauth.component';
import { SysproductComponent } from './components/core/sysproduct.component';
import { SysappService } from './services/sysapp.service';
import { SysproductService } from './services/sysproduct.service';
import { SysbackcodeService } from './services/sysbackcode.service';
import { SyscomponentService } from './services/syscomponent.service';
import { SysparamService } from './services/sysparam.service';
import { SysroleService } from './services/sysrole.service';
import { SysroleComponent } from './components/core/sysrole.component';
import { HomeComponent } from './components/home/home.component';
import {
  FclistModule, FctlbModule, FclayoutModule, FcbasicModule,
  FcadModule, FcmodalModule, FcsearchModule, FctabModule, FcchartModule
} from 'fccomponent';
import { LayoutService } from './services/layout.service';
import { SysmessagedetailComponent } from './components/core/sysmessagedetail.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { SysmessageService } from './services/sysmessage.service';
import { SysversionService } from './services/sysversion.service';
import { SysversionComponent } from './components/core/sysversion.component';
import { SyshomeService } from './services/syshome.service';
import { SysannouncementService } from './services/sysannouncement.service';
import { SysannouncementComponent } from './components/core/sysannouncement.component';
import { SyscompanyService } from './services/syscompany.service';
import { SyscompanyComponent } from './components/core/syscompany.component';
import { SyscompanyaddComponent } from './components/core/syscompanyadd.component';
import { SysnavlinkService } from './services/sysnavlink.service';
import { SysprofileService } from './services/sysprofile.service';
import { SysprofileComponent } from './components/core/sysprofile.component';
import { BasicpersoneldialogComponent } from './components/core/dialog/basicpersoneldialog.component';
import { SysroleDialogEditComponent } from './components/core/dialog/sysroleeditdialog.component';
import { SysroleauthService } from './services/sysroleauth.service';
import { SysroleuserService } from './services/sysroleuser.service';
import { SysquotaService } from './services/sysquota.service';
import { SysquotaEditComponent } from './components/core/sysquotaedit.component';
import { SysquotavalueService } from './services/sysquotavalue.service';
import { SysquotalistComponent } from './components/core/sysquotalist.component';
import { SyscontactService } from './services/syscontact.service';
import { SyslogComponent } from './components/core/syslog.component';
import { SyslogService } from './services/syslog.service';
import { SyssessionService } from './services/syssession.service';
import { SysemployService } from './services/sysemploy.service';
import { SysassignmentService } from './services/sysassignment.service';
import { SysassignmentComponent } from './components/core/sysassignment.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { SysemployeeService } from './services/sysemployee.service';
import { SysemployeeComponent } from './components/core/sysemployee.component';
import { SysemployeeeditComponent } from './components/core/sysemployeeedit.component';
import { SysuserComponent } from './components/core/sysuser.component';
import { SysusereditComponent } from './components/core/sysuseredit.component';
import { SysbizcoderuleService } from './services/sysbizcoderule.service';
import { SysbizcoderuleComponent } from './components/core/sysbizcoderule.component';
import { SyscompanydimComponent } from './components/core/syscompanydim.component';
import { SyscompanydimService } from './services/syscompanydim.service';
import { SysbizcoderulemodalComponent } from './components/core/sysbizcoderulemodal.component';
import { SysbizcodedefineService } from './services/sysbizcodedefine.service';
import { SysbizcoderuleaddComponent } from './components/core/sysbizcoderuleadd.component';
import { SysbizcoderuleeditComponent } from './components/core/sysbizcoderuleedit.component';
import { SysdepartmentdimComponent } from './components/core/sysdepartmentdim.component';
import { SysdepartmentdimService } from './services/sysdepartmentdim.service';
import { UploadavatardialogComponent } from './components/core/dialog/uploadavatardialog.component';
import { companytransferdialogComponent } from './components/core/dialog/companytransferdialog.component';
import { SyscompanymodifyComponent } from './components/core/syscompanymodify.component';
import { SyscompanychangeauditComponent } from './components/core/syscompanychangeaudit.component';
import { SyscompanyrelationService } from './services/syscompanyrelation.service';
import { SystbvorgcurorgService } from './services/systbvorgcurorg.service';
import { SysdepartmentService } from './services/sysdepartment.service';
import { SysdepartmentComponent } from './components/core/sysdepartment.component';
import { SyswizardComponent } from './components/core/syswizard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { chooseicondialogComponent } from './components/core/dialog/chooseicondialog.component';
import { SyswizardService } from './services/syswizard.service';
import { ChartsModule } from 'ng2-charts';
import { SysappmodifyComponent } from './components/core/sysappmodify.component';
import { SysappeditComponent } from './components/core/sysappedit.component';
import { SysdatasourceeditComponent } from './components/core/sysdatasourceedit.component';
@NgModule({
  entryComponents: [
    BasicpersoneldialogComponent,
    SysroleDialogEditComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    SysroleDialogEditComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    UploadavatardialogComponent,
    SysroleDialogEditComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    SyslogComponent,
    SysassignmentComponent,
    UploadavatardialogComponent,
    companytransferdialogComponent,
    SyscompanymodifyComponent,
    SyscompanychangeauditComponent,
    SysdepartmentComponent,
    chooseicondialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    FclistModule,
    FctlbModule,
    FclayoutModule,
    FcbasicModule,
    FctlbModule,
    FcadModule,
    FcmodalModule,
    FcsearchModule,
    FctabModule,
    FcchartModule,
    SpreadSheetsModule,
    AngularDraggableModule,
    NgZorroAntdModule,
    ChartsModule
  ],
  exports: [
  ],
  declarations: [
    MainComponent,
    NotfoundComponent,
    ErrorComponent,
    LockscreenComponent,
    ForgotComponent,
    SysdatasourceComponent,
    SysappComponent,
    SysappmodifyComponent,
    SysappeditComponent,
    SysdicComponent,
    SysproductComponent,
    SysroleauthComponent,
    SysroleComponent,
    SysparamComponent,
    SysmessageComponent,
    SysmessagedetailComponent,
    SysbackcodeComponent,
    SyscomponentComponent,
    HomeComponent,
    SysversionComponent,
    SysroleDialogEditComponent,
    SysannouncementComponent,
    SyscompanyComponent,
    SysprofileComponent,
    BasicpersoneldialogComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    SysassignmentComponent,
    SysbizcoderuleComponent,
    SyscompanydimComponent,
    SysbizcoderulemodalComponent,
    SysbizcoderuleaddComponent,
    SysbizcoderuleeditComponent,
    SysdepartmentdimComponent,
    SyscompanyaddComponent,
    SyscompanychangeauditComponent,
    SyscompanymodifyComponent,
    SyslogComponent,
    SysdepartmentComponent,
    UploadavatardialogComponent,
    companytransferdialogComponent,
    SysassignmentComponent,
    SysuserComponent,
    SysusereditComponent,
    SysemployeeComponent,
    SysemployeeeditComponent,
    SysdepartmentComponent,
    UploadavatardialogComponent,
    companytransferdialogComponent,
    SyswizardComponent,
    SysdatasourceeditComponent,
    chooseicondialogComponent 

  ],
  providers: [
    LayoutService,
    MainService,
    SysdatasourceService,
    SysappService,
    SysproductService,
    SysroleauthService,
    SysroleService,
    SysparamService,
    SysmessageService,
    SysbackcodeService,
    SyscomponentService,
    SysroleuserService,
    SyshomeService,
    SysversionService,
    SysannouncementService,
    SyscontactService,
    SyscompanyService,
    SysnavlinkService,
    SysprofileService,
    SyslogService,
    SyssessionService,
    SysemployService,
    SysquotavalueService,
    SysassignmentService,
    SysquotaService,
    SysassignmentService,
    SysemployeeService,
    SysbizcoderuleService,
    SyscompanydimService,
    SysbizcodedefineService,
    SysdepartmentdimService,
    SyscompanyrelationService,
    SystbvorgcurorgService,
    SyscompanydimService,
    SysdepartmentService,
    SyswizardService
  ]
})
export class SystemModule {

}
