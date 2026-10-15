import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'; // 1. Add this import

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet], // 2. Add them here
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css'
})
export class UserDashboardComponent { }
