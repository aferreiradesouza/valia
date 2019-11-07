import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    constructor(public router: Router) { }

    ngOnInit() { }

    irDetalhe() {
        this.router.navigateByUrl('detalhe-remessa');
    }
}
