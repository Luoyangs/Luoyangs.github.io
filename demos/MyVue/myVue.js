function MyVue(options) {
  this.data = options.data;
  var data = this.data;

  Observer(data, this);

  var id = options.el;
  this.el = document.getElementById(id);
  var dom = nodeToFragment(this.el, this);
  this.el.appendChild(dom);

  return this;
}