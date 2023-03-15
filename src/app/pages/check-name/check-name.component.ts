import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-check-name',
  templateUrl: './check-name.component.html',
  styleUrls: ['./check-name.component.scss']
})
export class CheckNameComponent implements OnInit {
  spinnerEnabled = false;
  keys!: string[];
  dataSheet: any = new Subject();
  @ViewChild('inputFile') inputFile!: ElementRef;
  isExcelFile!: boolean;

  student: any[] = [];
  duplicateName: any[] = [];
  duplicateID: any[] = [];
  countSheet = 0;
  countData = 0;
  countDuplicateID = 0;
  countDuplicateName = 0;

  exceltoJson:any = {};

  constructor() {

  }

  ngOnInit(): void {

  }

  onChange(evt:any) {
    const sheetName:any[] = [];
    let dataStudent: any[] = [];
    let duplicateName: any[] = [];
    let duplicateID: any[] = [];

    let data:any, header;
    const target: DataTransfer = <DataTransfer>(evt.target);
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = '';
    }
    if (this.isExcelFile) {
      this.spinnerEnabled = true;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        data = wb.SheetNames.reduce((initial: any, name: any) => {
          const sheet = wb.Sheets[name];
          let sheetData:any[] = [];
          let countRows = 0;

          initial[name] = XLSX.utils.sheet_to_json(sheet,{raw:true});

          sheetData = XLSX.utils.sheet_to_json(sheet,{raw:true});
          sheetData.forEach((value:any, index:any) => {
            if(!value["cd5"] || value["cd1"]=="เลขที่"){

            }
            else {
              /*
              if (dataStudent.find((item: any) => item.cd2 == value.cd2 && (item.cd3.trim() != value.cd3.trim() || item.cd4.trim() != value.cd4.trim()))) {
                duplicateID.push(value);
              }

              if (dataStudent.find((item: any) => item.cd3.trim() == value.cd3.trim() && item.cd4.trim() == value.cd4.trim())) {
                duplicateName.push(value);
              }
              */

              if (dataStudent.find((item: any) => `${item.cd2}`.replace(/\s/g, '') === `${value.cd2}`.replace(/\s/g, ''))){
                // console.log(dataStudent.find((item: any) => `${item.cd2}`.replace(/\s/g, '') === `${value.cd2}`.replace(/\s/g, '')));
                // console.log(value);

                if (!duplicateID.find((item: any) => `${item.cd2}`.replace(/\s/g, '') === `${value.cd2}`.replace(/\s/g, ''))){
                  duplicateID.push(dataStudent.find((item: any) => `${item.cd2}`.replace(/\s/g, '') === `${value.cd2}`.replace(/\s/g, '')));
                }

                duplicateID.push(value);
              }
              if (dataStudent.find((item: any) => item.cd3.replace(/\s/g, '') === value.cd3.replace(/\s/g, '') && item.cd4.replace(/\s/g, '') === value.cd4.replace(/\s/g, '') && (`${item.cd2}`.replace(/\s/g, '') !== `${value.cd2}`.replace(/\s/g, '')))) {
                if (!duplicateName.find((item: any) => item.cd3.replace(/\s/g, '') === value.cd3.replace(/\s/g, '') && item.cd4.replace(/\s/g, '') === value.cd4.replace(/\s/g, '') && (`${item.cd2}`.replace(/\s/g, '') !== `${value.cd2}`.replace(/\s/g, '')))) {
                  duplicateName.push(dataStudent.find((item: any) => item.cd3.replace(/\s/g, '') === value.cd3.replace(/\s/g, '') && item.cd4.replace(/\s/g, '') === value.cd4.replace(/\s/g, '') && (`${item.cd2}`.replace(/\s/g, '') !== `${value.cd2}`.replace(/\s/g, ''))));
                }

                duplicateName.push(value);
              }

              if(!value.cd2){
                // console.log(value);
              }


              dataStudent.push(value);
              countRows++;
            }



          });
          sheetName.push({name:countRows});

          return initial;
        }, {});
      };

      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        // console.log(data);
        // console.log(sheetName);
        // console.log(dataStudent);

        // console.log(duplicateID);
        // console.log(duplicateName);

        this.countSheet = sheetName.length;
        this.countData = dataStudent.length;
        this.countDuplicateID = duplicateID.length;
        this.countDuplicateName = duplicateName.length;

        this.student = dataStudent;
        this.duplicateID = duplicateID;
        this.duplicateName = duplicateName;
      }
    } else {
      this.inputFile.nativeElement.value = '';
    }
  }

  removeData() {
    /*
    this.inputFile.nativeElement.value = '';
    this.dataSheet.next(null);
    this.keys = [];
    */

    location.reload();
  }

}
