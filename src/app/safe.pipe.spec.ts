import { SafePipe } from './safe.pipe';
import {inject} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';


describe('SafeHtmlPipe', () => {
  it('create an instance', inject([DomSanitizer], (sanitize: DomSanitizer) => {

    const pipe = new SafePipe(sanitize);
    expect(pipe).toBeTruthy();
  }));
});
