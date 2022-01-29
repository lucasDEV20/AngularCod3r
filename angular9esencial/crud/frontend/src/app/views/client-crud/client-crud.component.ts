import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';
@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(private headerService: HeaderService, private router : Router) { 
    headerService.headerData = {
      title: 'Cadastro de cliente',
      icon: 'person_add_alt',
      routeUrl: '/client'
    }
  }

  ngOnInit(): void {
  }

  navigateToClientCreate(): void {
    this.router.navigate(['/client/create'])
  }

}
