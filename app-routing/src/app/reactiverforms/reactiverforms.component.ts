import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactiverforms',
  templateUrl: './reactiverforms.component.html',
  styleUrls: ['./reactiverforms.component.scss']
})
export class ReactiverformsComponent implements OnInit {

  public cadastroForm : FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    email: ['', [Validators.required,Validators.email]]
  })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  public submitForm(){
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value)
      console.log(this.cadastroForm.value.firstName)
      console.log(this.cadastroForm.value.lastName)
    }
  }
}
