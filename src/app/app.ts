import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './core/layout/header/header';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatSnackBarModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
