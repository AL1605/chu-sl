import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';
import { read, utils, writeFile } from 'xlsx';

@Component({
  selector: 'app-check-grade',
  templateUrl: './check-grade.component.html',
  styleUrls: ['./check-grade.component.scss']
})
export class CheckGradeComponent implements OnInit {
  data: any[] = [];

  countSheet = 0;
  countData = 0;
  countDuplicateID = 0;
  countDuplicateName = 0;

  data_student: any[] = [];

  constructor() {

  }

  ngOnInit(): void {

  }

  handleImport($event: any) {
    const files = $event.target.files;



    if (files.length) {
        const student_group:any[] = [];
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (event: any) => {
            const wb = read(event.target.result);
            const sheets = wb.SheetNames;

            this.countSheet = sheets.length;

            if (sheets.length) {
              sheets.forEach((value:any, index:any) => {
                const rows = utils.sheet_to_json(wb.Sheets[value]);
                this.data[value] = rows;
                this.countData = this.countData + this.data[value].length;

                student_group[value] = this.data[value].reduce(function(a:any, e:any) {
                  let estKey = (e['student_id']);

                  if(estKey!='รหัสนักเรียน'){
                    (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
                  }

                  return a;
                }, {});
              });

              this.data_student = student_group;

              // console.log(this.data);
              console.log(this.data_student);

              for (let the_class in student_group) {
                // console.log(the_class);
                for (let student in student_group[the_class]) {
                  // console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                  student_group[the_class][student].forEach((value:any, index:any) => {
                    // console.log(value["total_score"]);
                    if(value["total_score"] >= 0 && value["total_score"] <= 99) {
                      if(value["grade"]== '0'){
                        // console.log("เกรด 0 ถูกต้อง");
                      }
                      else {
                        console.log("เกรดผิด จะต้องเป็นเกรด 0");
                        console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                        console.log(value["course_code"]+": "+value["total_score"]+": "+value["grade"]);
                      }
                    }
                    else if(value["total_score"] >= 100 && value["total_score"] <= 109) {
                      if(value["grade"]=='1'){
                        // console.log("เกรด 1 ถูกต้อง");
                      }
                      else {
                        console.log("เกรดผิด จะต้องเป็นเกรด 1");
                        console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                        console.log(value["course_code"]+": "+value["total_score"]+": "+value["grade"]);
                      }
                    }
                    else if(value["total_score"] >= 110 && value["total_score"] <= 119) {
                      if(value["grade"]=='1.5'){
                        // console.log("เกรด 1.5 ถูกต้อง");
                      }
                      else {
                        console.log("เกรดผิด จะต้องเป็นเกรด 1.5");
                        console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                        console.log(value["course_code"]+": "+value["total_score"]+": "+value["grade"]);
                      }
                    }
                    else if(value["total_score"] >= 120 && value["total_score"] <= 129) {
                      if(value["grade"]=='2'){
                        // console.log("เกรด 2 ถูกต้อง");
                      }
                      else {
                        console.log("เกรดผิด จะต้องเป็นเกรด 2");
                        console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                        console.log(value["course_code"]+": "+value["total_score"]+": "+value["grade"]);
                      }
                    }
                    else if(value["total_score"] >= 130 && value["total_score"] <= 139) {
                      if(value["grade"]=='2.5'){
                        // console.log("เกรด 2.5 ถูกต้อง");
                      }
                      else {
                        console.log("เกรดผิด จะต้องเป็นเกรด 2.5");
                        console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                        console.log(value["course_code"]+": "+value["total_score"]+": "+value["grade"]);
                      }
                    }
                    else if(value["total_score"] >= 140 && value["total_score"] <= 149) {
                      if(value["grade"]=='3'){
                        // console.log("เกรด 3 ถูกต้อง");
                      }
                      else {
                        console.log("เกรดผิด จะต้องเป็นเกรด 3");
                        console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                        console.log(value["course_code"]+": "+value["total_score"]+": "+value["grade"]);
                      }
                    }
                    else if(value["total_score"] >= 150 && value["total_score"] <= 159) {
                      if(value["grade"]=='3.5'){
                        // console.log("เกรด 3.5 ถูกต้อง");
                      }
                      else {
                        console.log("เกรดผิด จะต้องเป็นเกรด 3.5");
                        console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                        console.log(value["course_code"]+": "+value["total_score"]+": "+value["grade"]);
                      }
                    }
                    else if(value["total_score"] >= 160 && value["total_score"] <= 200) {
                      if(value["grade"]=='4'){
                        // console.log("เกรด 4 ถูกต้อง");
                      }
                      else {
                        console.log("เกรดผิด จะต้องเป็นเกรด 4");
                        console.log(the_class+": "+student+": "+student_group[the_class][student].length);
                        console.log(value["course_code"]+": "+value["total_score"]+": "+value["grade"]);
                      }
                    }
                    else {
                      console.log("คะแนนรวมผิดปกติ");
                    }
                  });
                  // console.log(student_group[the_class][student]);
                }
              }
            }
        }
        reader.readAsArrayBuffer(file);
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
