import { Component, OnInit, Input } from '@angular/core';

import { ListItem } from '@models/ListItem';

@Component({
  selector: 'reports-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  @Input() items: string[];

  addInput: string;
  listItems: ListItem[];

  constructor() {
    this.addInput = '';
    this.listItems = [];
  }

  ngOnInit() {
    this.items.forEach(item => {
      this.listItems.push(new ListItem(item));
    });
  }

  onAdd(): void{
    this.listItems.push(new ListItem(this.addInput));
    this.addInput = '';
  }

  onCancel(item: ListItem): void{
    item.edit = false;
    item.label = item.value;
  }

  onSave(item: ListItem): void{
    item.edit = false;
    item.value = item.label;
  }

  onDelete(item: ListItem): void{
    for(let i=0; i<this.listItems.length; i++){
      if (this.listItems[i].id === item.id) {
        this.listItems.splice(i, 1);
      }
    }
  }

  public getItems(): string[]{
    let hold = [];
    this.listItems.forEach(item => {
      hold.push(item.value);
    });
    return hold
  }

}
