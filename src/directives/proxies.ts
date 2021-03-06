/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@d2-code/wc-lib';


export declare interface D2ArgEditor extends Components.D2ArgEditor {}
@ProxyCmp({
  inputs: ['data', 'edit']
})
@Component({
  selector: 'd2-arg-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data', 'edit']
})
export class D2ArgEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface D2Argument extends Components.D2Argument {}
@ProxyCmp({
  inputs: ['data', 'edit']
})
@Component({
  selector: 'd2-argument',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data', 'edit']
})
export class D2Argument {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
