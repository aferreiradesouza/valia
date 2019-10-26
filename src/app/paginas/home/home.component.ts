import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { EmpregadosEnum } from 'src/app/enums/empregados.enum';
import { StorageMemoryService } from 'src/app/services/storage-memory.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    public step: 1 | 2 | 3;

    constructor(public router: Router) { }

    ngOnInit() {
    }

    configurarLayoutPersonalizado() {
        this.router.navigateByUrl('/layout-personalizado');
    }

    configurarLayoutValia() {
        this.router.navigateByUrl('/layout-valia');
    }
}