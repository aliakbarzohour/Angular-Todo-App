import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
// App title
  title = 'TodoApp';
// New todo 
  newTodo:string = '';
  // Default Todo's
  Todos:string[]= [
    'Make a Todo App with Angular',
    'Learning Vue.js'
  ]
  // Add Todo Function
  addTodo(){
    // input check
    if(this.newTodo == ''){
      alert("input is empty . ")
    }else{
      // Add todo
      this.Todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
  // Remove Todo Function
  removeTodo(index:number){
    this.Todos.splice(index+1)
  }
}
