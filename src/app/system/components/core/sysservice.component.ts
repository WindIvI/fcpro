import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysserviceService } from '../../services/sysservice.service';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'sysservice',
  templateUrl: './sysservice.component.html',
  styles: [`
   
            `]
})
export class SysserviceComponent extends ParentlistComponent {
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  //字母查找
  fastsearchWords: any[];
  //服务
  sysServices: any[];
  constructor(public mainService: SysserviceService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.searchByWord();
    this.fastsearchWords = this.mainService.fastSearch();
    this.btnlistOnes = this.mainService.appButtons.filter(btn =>
      btn.BTNTYPE === 'LISTONE'
    );
    this.btnlistMores = this.btnlistOnes.splice(3);
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
  }
  getDefaultQuery() {
  }
  /**
* @param eventName 事件名称
* @param context 事件返回参数
*/
  event(eventName: string, event: FCEVENT): void {
    if (event.param.BUSTYPE === 'fastsearch') {
      this.searchByWord(event.param);
    }
  }
  /**
  * 初始化元数据
  */
  searchByWord(btn?: any) {
    let valueObj: any = {};
    if (btn) {
      valueObj.WHERE = "AND SUBSTR(SERVICEID,0,1)='" + btn.ACTCODE + "'"
    }
    this.mainService.findWithQuery(valueObj).subscribe(result => {
      if (result.CODE === '0') {
        this.sysServices = result.DATA;
      }
    });
  }
  /**
   * 按钮明细
   * @param event 
   */
  btnCardEvent(event: any, item: any) {
    switch (event.ACTCODE) {
      case 'listOneDelete'://明细删除
        this.listOneDelete();
        break;
      case 'listOneEdit'://明细修改
        this.listEdit(item);
        break;
      case 'listOneHelp'://明细帮助
        break;
    }
  }
  /**
   * 单条删除
   */
  listOneDelete() {
    this.messageService.confirm('请确认该服务没有在其它地方使用后再删除!', () => {

    }, () => { })
  }
  /**
   * 导入
   */
  import() {

  }
  /**
   * 点赞
   */
  thumbUp() {
    this.messageService.message("点赞功能正在开发中，敬请期待！");
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 下载
   */
  download() {
    this.messageService.message("下载功能正在开发中，敬请期待！");
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 评论
   */
  evaluate() {
    this.messageService.message("评论功能正在开发中，敬请期待！");
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 统计
   */
  count() {
    this.messageService.message("统计功能正在开发中，敬请期待！");
    event.stopPropagation();
    event.preventDefault();
  }
}
