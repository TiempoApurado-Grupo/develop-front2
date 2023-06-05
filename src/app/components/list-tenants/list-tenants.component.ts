import { Component } from '@angular/core';
import {AddTenantComponent} from "../add-tenant/add-tenant.component";

@Component({
  selector: 'app-list-tenants',
  templateUrl: './list-tenants.component.html',
  styleUrls: ['./list-tenants.component.css']
})

export class ListTenantsComponent {
  user={
    name: 'Emilia Sanchez',
    email: 'emilia@upc.edu.pe',
    cellPhone: '932918041',
    address:'Carabayllo, Lima',
    date: '29/05/2023'
  };
}
