import { Component } from '@angular/core';

@Component({
  //selector: 'app-root',
  //selector: '.app-root',
  //selector: '#app-root',
  selector: 'app',
  templateUrl: './app.component.html',

  //template:`<product></product>`,

 /* template: `
      <h1>App Component</h1>
    <h2>{{gettitle()}}</h2>
    <p>
        {{todoItem.description}}
        {{todoItem.action}}

    </p>
  `,*/

  //styleUrls: ['./app.component.css']
  styles:[
    `
      p{
        color:red;
      }
    `
  ]
  
})
export class AppComponent {
   title = 'todo app';

  todoItem = {
    description: "Kahvaltı",
    action: true
  }

  gettitle(){
    return this.title;
  }
}
