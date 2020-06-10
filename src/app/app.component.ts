import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('contentSlide', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('0ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class AppComponent {
  pdfSrc = 'https://docs.google.com/gview?url=https://drive.google.com/file/d/1O2Rcvk4QxHa97jp8jbel4CHhSQ0l_L2W/view?usp=sharing';

  // defines active content card for display
  activeContent: string = '';

  public setActiveContent(content: string) {
    this.activeContent = content;
  }
}
