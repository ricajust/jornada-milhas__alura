import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';

@Component({
  imports: [Card],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
