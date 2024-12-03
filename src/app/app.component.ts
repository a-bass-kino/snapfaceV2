import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'snapface';

  interval$!: Observable<string>;

  ngOnInit(): void {
    // this.interval$ = interval(1000).pipe(
    //   filter(value => value % 7 === 0),
    //   map(value => value % 2 === 0 ? 
    //     `Je suis ${value} et je suis pair` :
    //     `Je suis ${value} et je suis impair`
    //    ),
    //    tap(text => this.logger(text))
    // )
    // interval$.subscribe(value => console.log(value))
    // setTimeout(() => interval$.subscribe(value => console.log(value)), 3000)
  }

  logger(text: string) {
    console.log(`Log : ${text}`)
  }
}
