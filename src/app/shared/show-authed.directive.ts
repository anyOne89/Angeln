import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { UserService } from "../core/services/user.service";

@Directive({ selector: "[appShowAuthed]" })
export class ShowAuthedDirective implements OnInit {
  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

  condition: boolean;

  constructor(
    // The templateRef grabs the "what needs to be inserted dynamically"
    // and the ViewContainerRef tells where it should be inserted based on condition.
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.userService.isAuthenticated.subscribe((isAuthenticated) => {
      if (
        (isAuthenticated && this.condition) ||
        (!isAuthenticated && !this.condition)
      ) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
