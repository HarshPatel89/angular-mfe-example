import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'host';
constructor(
  private router: Router
){

}

  nav1(){
    this.router.navigate(['/mfe1']);
  }

  nav2(){
    this.router.navigate(['/mfe2']);
  }

}
