import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarUsuarioComponent } from '../../components/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from '../../components/editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent{



  displayedColumns: string[] = ['codigo', 'nombre', 'user', 'password', 'acciones'];
  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  ];

  constructor( public dialog: MatDialog ) { }


  openDialogAgregar() {
    const dialogRef = this.dialog.open(AgregarUsuarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEditar() {
    const dialogRef = this.dialog.open(EditarUsuarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

