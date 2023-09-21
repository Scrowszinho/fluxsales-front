import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteUtilsService {
    constructor( private route: Router ) {}
    
    static disableFooterRoutes = ['/login', '/signup'];
    static disableHeaderRoutes = ['/login', '/signup'];
    
    shouldEnableFooter(): boolean {
        let enable = true;
        RouteUtilsService.disableFooterRoutes.forEach(element => {
            if( element === this.route.url ) enable = false;
        });
        return enable
    }

    shouldEnableHeader(): boolean {
        let enable = true;
        RouteUtilsService.disableHeaderRoutes.forEach(element => {
            if( element === this.route.url ) enable = false;
        });
        return enable
    }
}
