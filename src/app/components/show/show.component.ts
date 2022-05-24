import { Component, OnInit } from '@angular/core';

//importamos el modelo
import { Proveedores } from 'src/app/proveedores.model';
//importamos el servicio
import { ProveedoresService } from 'src/app/proveedores.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Proveedores: Proveedores[]

  constructor( private proveedoresService: ProveedoresService ) { }

  ngOnInit(): void {

    this.proveedoresService.getProveedores().subscribe((res) => {
      this.Proveedores = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Proveedores)
        };
      });
    });
  }

  deleteRow = (proveedores) => this.proveedoresService.deleteProveedor(proveedores);

}
