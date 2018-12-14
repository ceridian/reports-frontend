export class ListItem {
  public id: string;
  public value: any;
  public label: any;
  public edit: boolean;
  constructor(opt) {
    if (typeof (opt) === 'string') {
      this.value = opt;
    } else {
      this.value = opt.value;
    }
    this.id = this.genUUID();
    this.label = this.value;
    this.edit = false;
  }

  private genUUID(){
    let d = new Date().getTime();

    return 'xxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
