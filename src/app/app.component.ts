import { AfterViewInit, Component, Compiler, Injector, ViewChild,
         ViewContainerRef } from '@angular/core';

declare const SystemJS: any;

@Component({
  selector: 'app-root',
  template: '<div [froalaEditor]>Hello, Froala!</div>'
})
export class AppComponent {
}
