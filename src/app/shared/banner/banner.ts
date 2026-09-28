import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-banner',
  styleUrl: './banner.scss',
  templateUrl: './banner.html',
})
export class Banner {
  @Input() banner: string = 'peru';
}
