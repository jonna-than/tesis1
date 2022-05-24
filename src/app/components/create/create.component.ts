import { Component, OnInit } from '@angular/core';


import { ProveedoresService } from 'src/app/proveedores.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public proveedoresForm: FormGroup

  constructor(
    public proveedoresService: ProveedoresService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.proveedoresForm = this.formBuilder.group({
      nombre : [''],
      ruc : [''],
      monto : [''],
      concepto : [''],
      fecha : [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.proveedoresService.createProveedor(this.proveedoresForm.value)
    this.router.navigate( [''] )
  }

}
