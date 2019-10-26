import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ILayoutPersonalizado } from './layout-personalizado.component';
import { UtilService } from 'src/app/services/util.services';

@Injectable({ providedIn: 'root' })
export class LayoutPersonalizadoResolver implements Resolve<ILayoutPersonalizado> {

    constructor(public utilService: UtilService) {}

    async resolve(route: ActivatedRouteSnapshot): Promise<ILayoutPersonalizado> {
        let layout;
        await this.utilService.obterTemplate()
        .then(resp => layout = resp || [])
        .catch(err => layout = []);
        return {
            layout: layout
        };
    }


}