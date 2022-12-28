import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class GenericTableService {

  constructor() { }

  getGridData(): PeriodicElement[] {
    return ELEMENT_DATA;
  }
}
