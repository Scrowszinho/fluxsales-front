import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthenticated = false;
  shouldOpenDetails = false;
  link = '../../../assets/images/icon.png';
  constructor(
    private router: Router,
    public authService: AuthService
    ) {}

  openDetails(): void {
    this.shouldOpenDetails = !this.shouldOpenDetails;
  }

  mouseEnter(): void {
    this.link = '../../../assets/images/icon.gif';
  }
  
  mouseLeave(): void {
    this.link = '../../../assets/images/icon.png';
  }

  routeTo(route: string): void {
    this.shouldOpenDetails = false;
    this.router.navigate([`${route}`]);
  }

  logout(): void {
    this.authService.doLogout();
    this.shouldOpenDetails = false;
  }
}
