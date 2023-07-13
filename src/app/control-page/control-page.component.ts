import { Component, OnInit } from '@angular/core'; // Import OnInit
import { AuthService } from '../Service/auth.service'; // Import authentication service
@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {
  userRole: string = this.authService.getUserRole();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
    console.log('User role:', this.userRole);
  }

  handleButtonClick(buttonName: string): void {
    // Handle button click logic here
    console.log(`Clicked ${buttonName}`);
  }
}
