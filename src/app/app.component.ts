import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChild("meuCanvas", { static: true })
  elemento!: ElementRef;

    ngOnInit(){
      new Chart(this.elemento.nativeElement, {
        type: 'line',
        data: {
          labels: ["Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],

          datasets: [
            {
              data: [85,58,52,58,14,25,35,87,87,55,85,65]
            } 
          ]
        }

    });
  }
}
