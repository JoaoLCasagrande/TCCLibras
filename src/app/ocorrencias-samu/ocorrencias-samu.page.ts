import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ocorrencias-samu',
  templateUrl: './ocorrencias-samu.page.html',
  styleUrls: ['./ocorrencias-samu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OcorrenciasSamuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
