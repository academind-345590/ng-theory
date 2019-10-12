import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private rout: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
  }

  openCarsPage(){
    this.router.navigate(['cars'], {relativeTo: this.rout})
  }

  changeAuthStatus(status: string){
    if(status === 'login'){
      this.auth.logIn();
      console.log("Status: Login");
    }else{
      this.auth.logOut();
      console.log('Status: LogOut');
    }
  }

}
