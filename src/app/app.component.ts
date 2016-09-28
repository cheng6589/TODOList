import { Component } from '@angular/core';
import {ToDoList} from './ToDoList';

const DefaultToDo = [
  new ToDoList("Eat your Breakfast"),
  new ToDoList("Eat your lunch"),
  new ToDoList("Eat your dinner"),
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  addNew:string;
  ToDoList:Array<ToDoList>;

  constructor()
  {
    this.ToDoList = DefaultToDo;
  }

  DeleteItem(index:number){
    this.ToDoList.splice(index, 1)
  }

  AddItem(){
    
    this.ToDoList.push(new ToDoList(this.addNew));
    this.addNew = '';
  }
}




