import { Point } from './Point';


export class Device {
  public id: string;
  public mac: string;
  public bacnetDeviceAddress: string;
  public description: string;
  public location: string;
  public modelName: string;
  public objectName: string;
  public objectId: string;
  public objectType: string;
  public systemStatus: string;
  public vendorId: string;
  public vendorName: string;
  public dis: string;
  public profileRef: string;
  public license: string;
  public bacnetInstanceId: number;
  public bacnetNetworkId: number;
  public bacnetAPDU: number;
  public points: Point[];
  public createdAt: Date;
  public updatedAt: Date;
  public show: boolean;
  constructor(o?) {
    const opt = o || {};
    this.id = opt.id;
    this.bacnetDeviceAddress = opt.bacnetDeviceAddress;
    this.description = opt.description;
    this.location = opt.location;
    this.modelName = opt.modelName;
    this.objectName = opt.objectName;
    this.objectId = opt.objectId;
    this.objectType = opt.objectType;
    this.systemStatus = opt.systemStatus;
    this.vendorId = opt.vendorId;
    this.vendorName = opt.vendorName;
    this.dis = opt.dis;
    this.profileRef = opt.profileRef;
    this.license = opt.license;
    this.bacnetInstanceId = opt.bacnetInstanceId;
    this.bacnetNetworkId = opt.bacnetNetworkId;
    this.bacnetAPDU = opt.bacnetAPDU;
    this.points = this.setPoints(opt.points);
    this.createdAt = this.setDate(opt.createdAt);
    this.updatedAt = this.setDate(opt.updatedAt);
    this.show = opt.show || false;
  }

  private setPoints(arr): Array<Point> {
    let hold = [];
    if(arr !== undefined){
      for (let i = 0; i < arr.length; i++) {
        let p = arr[i];
        if (p instanceof Point) {
          hold.push(p);
        } else {
          hold.push(new Point(p));
        }
      }
    }
    return hold;
  }

  private setDate(d): Date {
    switch (d) {
      case d === undefined: return new Date();
      case d instanceof Date: return d;
      default: return new Date(d);
    }
  }
}
