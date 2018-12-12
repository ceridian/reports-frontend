export interface Plot {
  val: any;
  ts: number;
}

export class Point {
  public id: string;
  public curVal: any;
  public tags: any;
  public show: boolean;
  public selected: boolean;
  public deviceRef: string;
  public dis: string;
  public curStatus: string;
  public is: string;
  public bacnetCur: string;
  public precision: number;
  public objectName: string;
  public unit: string;
  public type: string;
  public hisStatus: string;
  public license: string;
  public plots: Array<Plot>;
  public createdAt: Date;
  public updatedAt: Date;
  constructor(o?) {
    const opt = o || {};
    this.id = opt.id;
    this.curVal = opt.curVal;
    this.tags = opt.tags || this.setTags(opt);
    this.show = true;
    this.selected = opt.selected || false;
    this.deviceRef = opt.deviceRef;
    this.dis = opt.dis;
    this.curStatus = opt.curStatus;
    this.is = opt.is;
    this.bacnetCur = opt.bacnetCur;
    this.precision = opt.precision;
    this.objectName = opt.objectName;
    this.unit = opt.unit;
    this.type = opt.type;
    this.hisStatus = opt.hisStatus;
    this.license = opt.license;
    this.plots = this.setPlots(opt.plots || []);
    this.createdAt = this.setDate(opt.createdAt);
    this.updatedAt = this.setDate(opt.updatedAt);
  }

  private setPlots(arr) {
    let hold = [];
    for (let i = 0; i < arr.length; i++) {
      hold.push(arr[i]);
    }
    return hold;
  }

  private setTags(opt) {
    let keys = Object.keys(opt);
    let obj = {};
    keys.forEach(key => {
      if (typeof (opt[key]) === 'boolean') {
        obj[key] = opt[key];
      }
    });
    return obj;
  }

  private setDate(d): Date {
    switch (d) {
      case d === undefined: return new Date();
      case d instanceof Date: return d;
      default: return new Date(d);
    }
  }
}