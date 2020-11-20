import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "ns-language",
    templateUrl: "./language.component.html"
})
export class LanguageComponent {

    constructor(
        private translate: TranslateService,
        private router: RouterExtensions,
    ) { }

    langSelected(lang: 'en' | 'fr') {
        this.translate.use(lang);
        this.router.navigateByUrl('enter-code');
    }
}
