import { User } from '@models/User';
import { Report } from '@models/Report';

export enum SchedType {Once,Hourly,Daily,Weekly,Monthly,Yearly};

const SchedKeys = {
  0: 'Once',
  1: 'Hourly',
  2: 'Daily',
  3: 'Weekly',
  4: 'Monthly',
  5: 'Yearly'
};

export {SchedKeys};

export class Schedule {
  public id: string;
  public name: string;
  public user: User;
  public report: Report;
  public schedType: SchedType;
  public options: any;
  public next: number;
  public createdAt: Date;
  public updatedAt: Date;
  constructor(o?) {
    const opt = o || {};
    this.id = opt.id || opt._id;
    this.name = opt.name;
    this.user = new User(opt.user);
    this.report = new Report(opt.report);
    this.options = opt.options || {};
    this.schedType = opt.schedType;
    this.next = opt.next || null;
    this.createdAt = opt.createdAt;
    this.updatedAt = opt.updatedAt;
  }
}