import { Component, OnInit, Output, EventEmitter, OnDestroy, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    faBars = faBars;
    openedMenuResposive = false;

    constructor(
        private translate: TranslateService,
        public router: Router) {

        this.translate.addLangs(['en','es']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }

    ngOnInit() {
    } 

    ngOnDestroy(){
    }
}
