class Square {
    constructor(ctx, listId, length, lung, x, y, color) {
      this.ctx = ctx;
      this.listId = listId;
      this.length = length;
      this.lung - lung;
      this.x = x;
      this.y = y;
      this.color = color;
      this.name = 'Patrat';
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.length, this.length);
    }
  
    reportArea() {
      let listItem = document.createElement('li');
      listItem.textContent = `${this.name}: aria este ${this.length * this.length}px patrati.`
  
      let list = document.getElementById(this.listId);
      list.appendChild(listItem);
    }
  
    reportPerimeter() {
      let listItem = document.createElement('li');
      listItem.textContent = `${this.name}: perimetrul este ${this.length * 2 }px.`
  
      let list = document.getElementById(this.listId);
      list.appendChild(listItem);
    }
  }
  
  export { Square };