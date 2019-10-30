import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required),

      }),
      select: new FormControl('2'),
      answer: new FormControl('no')
    });

  }
  onSubmit() {
    console.log(this.form);
    localStorage.setItem("email", this.form.controls.user.value.email);       // ays verjin 2 greladzev@ chisht en
    localStorage.setItem("password", this.form.controls.user.value.pass);
  }
}
