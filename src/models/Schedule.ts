import { User } from '@models/User';
import { Report } from '@models/Report';

export enum SchedType {Once,Hourly,Daily,Weekly,Monthly,Yearly};
export enum DaysOfWeek {Sunday,Monday,Tuesday,Wensday,Thursday,Friday,Saturday};

const SchedKeys = {
  0: 'Once',
  1: 'Hourly',
  2: 'Daily',
  3: 'Weekly',
  4: 'Monthly',
  5: 'Yearly'
};

const DaysKeys = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wensday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};

export {SchedKeys,DaysKeys};

export class Schedule {
  public id: string;
  public name: string;
  public user: User;
  public report: Report;
  public schedType: SchedType;
  public options: any;
  public next: Date;
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
    this.next = this.setDate(opt.next);
    this.createdAt = this.setDate(opt.createdAt);
    this.updatedAt = this.setDate(opt.updatedAt);
  }

  private setDate(d): Date {
		if(d === undefined){
			return new Date();
		}else if(d instanceof Date){
			return d;
		}else{
			return new Date(d);
		}
  }
  
  public toJSON(){
    return {
      id: this.id,
      name: this.name,
      user: this.user.id,
      report: this.report.id,
      schedType: this.schedType,
      next: this.next,
      options: this.options
    }
  }
}