import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Client } from '../client.model'
import { ClientService } from './../client.service'
@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
  
})
export class ClientCreateComponent implements OnInit {
  

  client: Client = {
    name: '',
    description: '',
    dateOld: null,
    gender: ''
  }

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {}
  
  creatClient(): void {
    this.clientService.create(this.client).subscribe(() => {
      //no metodo subscribe eu serei notificado quando a resposta chegar
      this.clientService.showMessage('Cliente cadastrado!')
       this.router.navigate(['/client'])
    })
  }

  cancel(): void {
    this.router.navigate(['/client'])
    this.clientService.showMessage('Cliente não cadastrado')
    
  }


}
