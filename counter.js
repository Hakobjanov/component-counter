export default class Counter extends EventTarget {
  constructor(count) {
    super();
    this.count = count;
    this.render();
    this.assignHandler();
  }

  render() {
    if (!this.el) this.el = document.createElement("div");
    this.el.innerHTML = `
      <button class="add" value="1">+</button>
      <button class="sub" value="-1">-</button>
      <strong class="counterEl">${this.count}</strong>
    `;
  }

  assignHandler() {
    this.el.addEventListener("click", (e) => {
      const value = +e.target.value;
      if (value) {
        this.count += value;
        this.render();
        this.dispatchEvent(new Event("change"));
      }
    });
  }

  appendTo(parent) {
    parent.append(this.el);
  }
}
