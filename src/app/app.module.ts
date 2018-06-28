import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router,RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ExamComponent } from './exam/exam.component';
import { InstructionComponent } from './instruction/instruction.component';
import { Instruction2Component } from './instruction2/instruction2.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { QuizComponent } from './quiz/quiz.component';
const appRout:Routes=[
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
  {path:'Login',component:ExamComponent},
  {path:'instruction', component:InstructionComponent},
  {path:'instructions', component:Instruction2Component},
  {path:'quiz', component:QuizComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ExamComponent,
    InstructionComponent,
    Instruction2Component,
    UserProfileComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRout),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
