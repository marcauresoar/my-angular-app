import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  statusList: string[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit(){
    this.form = new FormGroup({
      // 'pname': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      'pname': new FormControl(null, [Validators.required], [this.forbiddenProjectNameAsync.bind(this)]),
      'pemail': new FormControl(null, [Validators.required, Validators.email]),
      'pstatus': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.form);
  }

  forbiddenProjectName(control: FormControl): {[s: string] : boolean} {
    if(control.value === 'Test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }
  forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'Test') {
            resolve({'nameIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 2000);
      }
    );
    return promise;
  }
}
