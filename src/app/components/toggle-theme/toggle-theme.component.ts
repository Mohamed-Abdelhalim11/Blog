import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.css'
})
export class ToggleThemeComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    body.classList.toggle('dark-theme', this.isDarkMode);
    body.classList.toggle('light-theme', !this.isDarkMode);
  }
}
