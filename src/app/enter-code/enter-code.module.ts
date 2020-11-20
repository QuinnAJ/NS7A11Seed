import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EnterCodeRoutingModule } from './enter-code-routing.module';
import { EnterCodeComponent } from './enter-code.component';


@NgModule({
    imports: [
        EnterCodeRoutingModule,
        TranslateModule.forChild(),
    ],
    declarations: [
        EnterCodeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EnterCodeModule { }
