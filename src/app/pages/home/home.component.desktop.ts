import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home.component.desktop.html',
})
export class HomeDesktopComponent implements OnInit {

  constructor(
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.meta.updateTag({
      description: 'Welcome to about section',
    });
  }
}
