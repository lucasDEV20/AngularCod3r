import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {
   
  client: Client

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.readById(id).subscribe(client => {
      this.client = client
    })
  }

  deleteClient(): void {
    this.clientService.delete(this.client.id).subscribe(() => {
      this.clientService.showMessage('Cliente excluido com sucesso')
       this.router.navigate(['/client']);
    } )
  }

  cancel(): void {
     this.router.navigate(['/client']);
  }

}
