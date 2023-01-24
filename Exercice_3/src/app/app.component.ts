import { Component, OnInit } from '@angular/core';
import { WorkerServiceService } from './Service/worker-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Exercice_2';
  constructor( servive: WorkerServiceService){
    
  }

  ngOnInit(): void {
      
  }
}
