import template from "./template.html!text";

export default class Test {
  constructor() {
    console.log(`ES6 class created: ${template}`);
    System.import('lib/template.html!text').then((asyncTemplate) => {
      let div = document.createElement('div');
      div.innerHTML = `<h3>Async template loaded:</h3>${asyncTemplate}`;
      document.body.appendChild(div);
    })
  }
}