import { Observable } from "rxjs";
import { TranslateLoader } from '@ngx-translate/core';

import * as en from './en.json';
import * as fr from './fr.json';

export class CustomTranslateLoader implements TranslateLoader {
    public getTranslation(lang: string): Observable<any> {
        return new Observable((observer: any) => {
            if (lang === 'en') {
                observer.next(en['default']);
            } else {
                observer.next(fr['default']);
            }
            observer.complete();
        });
    }
}