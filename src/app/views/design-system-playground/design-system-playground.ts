import { Component } from '@angular/core';

import { MatButton } from '@angular/material/button';

import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';

import { MatCheckbox } from '@angular/material/checkbox';

import { MatFormField, MatLabel } from '@angular/material/form-field';

import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-design-system-playground',

  imports: [
    MatFormField,
    MatLabel,

    MatSelect,
    MatOption,

    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,

    MatButton,

    MatCheckbox
  ],

  styleUrl: './design-system-playground.scss',
  templateUrl: './design-system-playground.html',
})
export class DesignSystemPlayground {}