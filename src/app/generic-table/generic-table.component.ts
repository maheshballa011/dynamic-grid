import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  height: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', height: '20'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', height: '20'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', height: '20'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', height: '20'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', height: '20'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', height: '20'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', height: '20'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', height: '20'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', height: '20'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', height: '20'},
];

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = ELEMENT_DATA;
  listOfFields = Object.keys(this.dataSource[0]).map(field => {
    return {selected: this.displayedColumns.indexOf(field) !== -1, field}
  });
  constructor() { }

  ngOnInit(): void {
  }

  onChangeField(fieldValue: boolean, fieldObj: any) {
    console.log(fieldValue);
    if(fieldValue){
      this.columnsToDisplay.push(fieldObj.field);
    }else{
      this.columnsToDisplay.splice(this.columnsToDisplay.indexOf(fieldObj.field),1);
    }
  }

}
