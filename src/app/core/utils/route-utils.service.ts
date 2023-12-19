import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteUtilsService {
    constructor( private route: Router ) {}
    
    static disableFooterRoutes = ['/signout', '/signin'];
    static disableHeaderRoutes = ['/signout', '/signin'];
    
    shouldEnableFooter(): boolean {
        let enable = true;
        RouteUtilsService.disableFooterRoutes.forEach(element => {
            if( this.route.url.includes(element) ) enable = false;
        });
        return enable
    }

    shouldEnableHeader(): boolean {
        let enable = true;
        RouteUtilsService.disableHeaderRoutes.forEach(element => {
            if( this.route.url.includes(element) ) enable = false;
        });
        return enable
    }

    shouldEnableProfileSidebar(): boolean {
        let enable = false;
        if( this.route.url.includes('/profile') ) enable = true;
        return enable
    }
}
