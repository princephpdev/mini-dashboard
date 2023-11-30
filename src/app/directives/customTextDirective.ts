import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appCustomText]",
  standalone: true,
})
export class CustomTextDirective {
  @Input() appCustomText: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setProperty(
      this.el.nativeElement,
      "innerText",
      this.appCustomText
    );
  }
}
