export class Alert{
  public id: string;
  public label: string;
  public body: string;
  public type: AlertType;
  constructor(obj){
    this.label = obj.label;
    this.body = obj.body;
    this.type = obj.type;
    this.id = this.genUUID();
  }

  private genUUID(){
    let d = new Date().getTime();

    return 'xxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}


export enum AlertType{success,warning,danger};
