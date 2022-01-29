import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService, private router : Router) {
    headerService.headerData = {
      title: 'inicio',
      icon: 'home',
      routeUrl: ''
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
  

  navigateToClientCreate(): void {
    this.router.navigate(['/client/create'])
  }

  navigateToClientRead(): void {
    this.router.navigate(['/clients/client-read'])
  }

}

