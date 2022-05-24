import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/proveedores.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup
  proveedorRef:any

  constructor(
    public proveedoresService: ProveedoresService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      nombre: [''],
      ruc: [''],
      monto: [''],
      concepto: [''],
      fecha: ['']
    })
   }

  ngOnInit(): void {
      const id = this.activeRoute.snapshot.paramMap.get('id')
      this.proveedoresService.getProveedorById(id).subscribe( res => {
        this.proveedorRef = res
        this.editForm = this.formBuilder.group({
          nombre: [this.proveedorRef.nombre],
          ruc: [this.proveedorRef.ruc],
          monto: [this.proveedorRef.monto],
          concepto: [this.proveedorRef.concepto],
          fecha: [this.proveedorRef.fecha],
        })
      })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.proveedoresService.updateProveedor(this.editForm.value, id)
    this.router.navigate([''])
  }

}
