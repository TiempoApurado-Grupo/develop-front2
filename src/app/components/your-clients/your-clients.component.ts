import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-your-clients',
  templateUrl: './your-clients.component.html',
  styleUrls: ['./your-clients.component.css']
})
export class YourClientsComponent implements OnInit{

  listClients:User[]=[]

  displayedColumns: string[] = ['name', 'lastName', 'gender'];
  dataSource !: MatTableDataSource<User>;

  constructor(private _userService: UserService,
              private location:Location) {

  }

  ngOnInit(): void {
    this.loadDatas();

  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  loadDatas() {
    this._userService.getUserClients().subscribe((clientIds: number[]) => {
      const clients: User[] = [];
      clientIds.forEach(clientId => {
        this._userService.getUserById(clientId).subscribe((client: User) => {
          clients.push(client);
          if (clients.length === clientIds.length) {
            this.dataSource = new MatTableDataSource<User>(clients);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        });
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  volver(){
    this.location.back();

  }

}
