import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarSucursalComponent } from '../../components/agregar-sucursal/agregar-sucursal.component';
import { EditarSucursalComponent } from '../../components/editar-sucursal/editar-sucursal.component';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent {

 

  displayedColumns: string[] = ['codigo', 'nombre','acciones'];
  dataSource = [
    {position: 1, name: 'Hydrogen',  symbol: 'H'},
    {position: 2, name: 'Helium', symbol: 'He'},
    {position: 3, name: 'Lithium', symbol: 'Li'},
  ];

  constructor( public dialog: MatDialog ) { }


  openDialogAgregar() {
    const dialogRef = this.dialog.open(AgregarSucursalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEditar() {
    const dialogRef = this.dialog.open(EditarSucursalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
