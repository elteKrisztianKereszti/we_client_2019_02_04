import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isCollapsed: boolean = true;

  constructor(public authService: AuthService) {

  }

  public logout(): void
  {
    this.authService.logout();
  }
}
