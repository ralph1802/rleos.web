import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'basic-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  navLinks = [
    { path: '/home', label: 'Inicio' },
    { path: '/about', label: 'Acerca de' },
    { path: '/portfolio', label: 'Portafolio' },
    { path: '/contact', label: 'Contacto' }
  ];

  constructor(private router: Router) {}

  // Método para manejar la navegación si es necesario
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
