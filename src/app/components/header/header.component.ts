import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthenticated = false;
  shouldOpenDetails = false;
  link = '../../../assets/images/icon.png';
  constructor(private router: Router) {}

  ngOnInit() {
    this.isAuth();
  }

  isAuth(): void {
     
  }

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
    this.router.navigate([`${route}`]);
  }

  logout(): void {
    
  }
}
