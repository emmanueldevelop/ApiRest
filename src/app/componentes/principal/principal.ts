import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PrincipalService } from '../../servicios/principal-service';
import { UsuariosI } from '../../Interfaces/usuarios';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-principal',
  standalone:true,
  imports: [MatButtonModule, MatTableModule, MatListModule, MatExpansionModule, MatFormFieldModule, MatPaginatorModule],
  providers: [PrincipalService],
  templateUrl: './principal.html',
  styleUrl: './principal.scss'
})
export class Principal implements OnInit {
  
  dataSource!: MatTableDataSource<UsuariosI>;
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'correo', 'celular'];
  panelOpenState = false;

  constructor(private prinncipalService : PrincipalService){}
  
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  
  ngOnInit(): void {
    this.prinncipalService.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}

//Data exportada 
