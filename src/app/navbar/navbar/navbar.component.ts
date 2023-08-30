import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isSidebarActive = false;
  isDropdownToggle = true;
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
    this.isDropdownToggle = !this.isDropdownToggle;
  }

}
