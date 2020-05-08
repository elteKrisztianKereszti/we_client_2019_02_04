import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { GlinkComponent } from './glink/glink.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent,
    GlinkComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
