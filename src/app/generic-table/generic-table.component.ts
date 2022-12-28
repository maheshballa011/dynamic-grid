import { Component, OnInit } from '@angular/core';
import { GenericTableService, PeriodicElement } from '../services/generic-table.service';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource:PeriodicElement[];
  listOfFields: any;
  constructor(private gtService: GenericTableService) { 
    this.dataSource = gtService.getGridData();
    this.listOfFields = Object.keys(this.dataSource[0]).map(field => {
      return {selected: this.displayedColumns.indexOf(field) !== -1, field}
    });
  }

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
