function Watcher(vm, node, name, nodeType) {
  //Dep表示订阅器
  Dep.target = this;
  this.vm = vm;
  this.node = node;
  this.name = name;
  this.nodeType = nodeType;
  this.update();
  Dep.target = null;
}

Watcher.prototype = {
  update: function() {
    // 触发相应属性的get
    this.value = this.vm[this.name];
    if (this.nodeType == 'input') {
      this.node.value = this.value;
    } else if (this.nodeType == 'text') {
      this.node.nodeValue = this.value;
    }
  }
}