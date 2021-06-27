import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoComponent } from '../../components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from '../../components/editar-producto/editar-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  

  displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'acciones'];
  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  ];

  constructor( public dialog: MatDialog ) { }


  openDialogAgregar() {
    const dialogRef = this.dialog.open(AgregarProductoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEditar() {
    const dialogRef = this.dialog.open(EditarProductoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
