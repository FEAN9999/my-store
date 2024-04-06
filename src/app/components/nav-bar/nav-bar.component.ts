import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgClass, NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  tabMenu: { name: string; link: string; isActive: boolean }[] = [];
  constructor() {}

  ngOnInit() {
    this.tabMenu = [
      { name: 'Home', link: '/', isActive: true },
      { name: 'Cart', link: '/cart', isActive: false },
    ];
  }

  toggleActive(index: number) {
    for (let index = 0; index < this.tabMenu.length; index++) {
      this.tabMenu[index].isActive = false;
    }
    this.tabMenu[index].isActive = true;
  }
}
