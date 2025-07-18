import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
