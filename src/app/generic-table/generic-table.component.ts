import { Component, OnInit } from '@angular/core';
import { GenericTableService, PeriodicElement } from '../services/generic-table.service';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
  filterValue: any = '';
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource:PeriodicElement[] = [] as PeriodicElement[];
  listOfFields: any;
  filteredColumns: any;
  constructor(private gtService: GenericTableService) { 
    gtService.getGridData().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.data;
      this.listOfFields = Object.keys(this.dataSource[0]).map(field => {
        return {selected: this.displayedColumns.indexOf(field) !== -1, field}
      });
      this.filteredColumns = this.listOfFields.slice();
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

  onFilterChange(event: any){
    const filteredColumn = event.target.value;
    if(filteredColumn){
      this.filteredColumns = this.listOfFields.filter((field: any) => {
        return field.field.indexOf(filteredColumn) !== -1;
      });
    }else{
      this.filteredColumns = this.listOfFields.slice();
    }
    
  }

}
