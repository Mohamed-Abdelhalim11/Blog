import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleThemeComponent } from "./components/toggle-theme/toggle-theme.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
