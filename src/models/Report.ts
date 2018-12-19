import { User } from '@models/User';
import { Device } from './Device';
//import { ListItem } from "@modules/shared/list/ListItem";

export enum RangeTypes { Static, Days, Weeks, Months, Years };

export enum ActionTypes { Raw, Average, MinMax, Total, Delta, Current };

export enum PrecisTypes { Seconds, Minutes, Hours, Days, Weeks, Months };

const RangeKeys = {
	0: "Static",
	1: "Days",
	2: "Weeks",
	3: "Months",
	4: "Years"
};

const ActionKeys = {
	0: 'Raw',
	1: 'Average',
	2: 'MinMax',
	3: 'Total',
	4: 'Delta',
	5: 'Current'
};

const PrecisKeys = {
	0: 'Seconds',
	1: 'Minutes',
	2: 'Hours',
	3: 'Days',
	4: 'Weeks',
	5: 'Months'
};

export { RangeKeys, ActionKeys, PrecisKeys };

export class Report {
	public id: string;
	public name: string;
	public user: User;
	public chart: boolean;
	public grid: boolean;
	public action: ActionTypes;
	public actionOptions: any;
	public range: RangeTypes;
	public rangeOptions: any;
	public start: Date;
	public stop: Date;
	public emails: string[];
	public devices: Device[];
	public selected: Device[];
	public createdAt: Date;
	public updatedAt: Date;
	constructor(o?) {
		const opt = o || {};
		this.id = opt.id || opt._id;
		this.name = opt.name;
		this.user = new User(opt.user);
		this.chart = opt.chart;
		this.grid = opt.grid;
		this.action = opt.action;
		this.actionOptions = opt.actionOptions || {};
		this.range = opt.range;
		this.rangeOptions = opt.rangeOptions || {interval:1,includeCurInt: false};
		this.start = this.setDate(opt.start);
		this.stop = this.setDate(opt.stop);
		this.devices = this.setDevices(opt.devices);
		this.selected = opt.selected || [];
		this.emails = opt.emails || [];
		this.createdAt = this.setDate(opt.createdAt);
		this.updatedAt = this.setDate(opt.updatedAt);
	}

	public toJSON() {
		let obj = {
			id: this.id,
			name: this.name,
			user: this.user,
			chart: this.chart,
			grid: this.grid,
			action: this.action,
			actionOptions: this.actionOptions,
			range: this.range,
			rangeOptions: this.rangeOptions,
			start: this.start.valueOf(),
			stop: this.stop.valueOf(),
			emails: this.emails,
			devices: this.devices,
			selected: this.selected
		}
		return obj;
	}

	private setDevices(arr): Device[] {
		const hold = [];
		if (arr !== undefined) {
			for (let i = 0; i < arr.length; i++) {
				const p = arr[i];
				if (p instanceof Device) {
					hold.push(p);
				} else {
					hold.push(new Device(p));
				}
			}
		}
		return hold;
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

	/*private setEmails(arr: any[]): ListItem[] {
		let hold = [];
		for (let i in arr) {
			hold.push(new ListItem(arr[i]));
		}
		return hold;
	}

	private getEmails(): string[] {
		let hold = [];
		for (let i in this.emails) {
			hold.push(this.emails[i].value);
		}
		return hold;
	}*/
}