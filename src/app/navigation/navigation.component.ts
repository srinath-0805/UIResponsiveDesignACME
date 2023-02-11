import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // nav.component.ts
  public opened: boolean | undefined;

  public menuItems: any = [{ text: 'Home', icon: 'fa-solid fa-house' }, { text: 'Dashboard', icon: 'fa-solid fa-gauge' },
  { text: 'Inbox', icon: 'fa-solid fa-inbox' }, { text: 'Products', icon: 'fa-solid fa-clipboard-list' }, { text: 'Admin', icon: 'fa-solid fa-gear' }];
  public ngOnInit() {
  }

  public SideNavigationActive(value: string) {
    this.menuItems.forEach((element: any, index: number) => {
      var dom=document.querySelector(`#${element.text + index}`);
        dom?.classList.remove('active');
    });
    document.querySelector(`#${value}`)?.classList.add('active');
  }
  public toggleProfileDetails(){
document.querySelector('.profile-details')?.classList.toggle('hide')
  }
  public sidenavToggleStyle(){
    document.querySelector('.add-sitenav-border-class')?.classList.toggle('add');
  }
}






