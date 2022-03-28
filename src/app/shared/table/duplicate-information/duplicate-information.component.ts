import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-duplicate-information',
  templateUrl: './duplicate-information.component.html',
  styleUrls: ['./duplicate-information.component.scss']
})
export class DuplicateInformationComponent implements OnInit {
  displayedColumns = ['cd1', 'cd2', 'cd3', 'cd4', 'cd5'];
  dataSource!: MatTableDataSource<UserData>;

  users: UserData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() student: any[] = [];
  
  constructor() { 
    
  }

  ngOnInit(): void {
    // console.log(USERS);
    
    this.users = this.student;
 
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
  */
  ngAfterViewInit() {
    if(this.users.length!=0){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface UserData {
  cd1: string;
  cd2: string;
  cd3: string;
  cd4: string;
}

const USERS: UserData[] = [
  {cd1: "1", cd2: 'Hydrogen', cd3: "1.0079", cd4: 'maroon'},
  {cd1: "2", cd2: 'Helium', cd3: "4.0026", cd4: 'red'},
  {cd1: "3", cd2: 'Lithium', cd3: "6.941", cd4: 'orange'},
  {cd1: "4", cd2: 'Beryllium', cd3: "9.0122", cd4: 'yellow'},
  {cd1: "5", cd2: 'Boron', cd3: "10.811", cd4: 'olive'},
  {cd1: "6", cd2: 'Carbon', cd3: "12.0107", cd4: 'green'},
  {cd1: "7", cd2: 'Nitrogen', cd3: "14.0067", cd4: 'purple'},
  {cd1: "8", cd2: 'Oxygen', cd3: "15.9994", cd4: 'fuchsia'},
  {cd1: "9", cd2: 'Fluorine', cd3: "18.9984", cd4: 'lime'},
  {cd1: "10", cd2: 'Neon', cd3: "20.1797", cd4: 'teal'},
  {cd1: "11", cd2: 'Sodium', cd3: "22.9897", cd4: 'aqua'},
  {cd1: "12", cd2: 'Magnesium', cd3: "24.305", cd4: 'blue'},
  {cd1: "13", cd2: 'Aluminum', cd3: "26.9815", cd4: 'navy'},
  {cd1: "14", cd2: 'Silicon', cd3: "28.0855", cd4: 'black'},
  {cd1: "15", cd2: 'Phosphorus', cd3: "30.9738", cd4: 'gray'},
  {cd1: "16", cd2: 'Sulfur', cd3: "32.065", cd4: 'olive'},
  {cd1: "17", cd2: 'Chlorine', cd3: "35.453", cd4: 'maroon'},
  {cd1: "18", cd2: 'Argon', cd3: "39.948", cd4: 'navy'},
  {cd1: "19", cd2: 'Potassium', cd3: "39.0983", cd4: 'teal'},
  {cd1: "20", cd2: 'Calcium', cd3: "40.078", cd4: 'yellow'},
];