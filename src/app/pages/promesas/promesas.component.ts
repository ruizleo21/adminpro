import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);
    });
  }

  getUsuarios() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(body => resolve(body.data));
    });
  }

}
