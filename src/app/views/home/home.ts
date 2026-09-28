import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';
import { Banner } from '../../shared/banner/banner';

@Component({
  imports: [Banner, Card],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
