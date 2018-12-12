import { Page } from './Page';

export class User{
  public id: string;
  public email: string;
  public first: string;
  public last: string;
  public fullName: string;
  public project: string;
  public projectId: string;
  public license: string;
  public licenseId: string;
  public token: string;
  public pages: Page[];
  constructor(o?){
    const opt = o || {};
    this.id = opt.id || opt._id;
    this.email = opt.email;
    this.first = opt.first;
    this.last = opt.last;
    this.fullName = this.first+' '+this.last;
    this.token = opt.token || null;
    this.pages = opt.pages || this.defaultPages();
    this.setProject(opt);
  }

  public setProject(obj){
    this.project = obj.pnm;
    this.projectId = obj.pid;
    this.license = obj.lnm;
    this.licenseId = obj.lid;
  }

  private defaultPages(): Page[]{
    const hold = [
      {
        label: 'Reports',
        link: '/#/reports',
        icon: 'assignment',
        disabled: false,
        active: true
      },{
        label: 'Schedules',
        link: '/#/schedules',
        icon: 'calendar_today',
        disabled: false,
        active: false
      },{
        label: 'Runs',
        link: '/#/runs',
        icon: 'folder',
        disabled: false,
        active: false
      },{
        label: 'Commander',
        link: 'https://beta.kmccommander.com',
        icon: 'home',
        disabled: false,
        active: false
      }
    ];
    return hold;
  }
}