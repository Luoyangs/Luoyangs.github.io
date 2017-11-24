function Observer(obj, vm) {
  Object.keys(obj).forEach(function(key) {
    defineRelative(vm, key, obj[key]);
  });
}

function defineRelative(vm, key, val) {
  var dep = new Dep();
  Object.defineProperty(vm, key, {
    enumerable: false,
    configurable: true,
    get: function() {
      if (Dep.target) {
        console.log(Dep.target)
        dep.addSubs(Dep.target);
      }
      return val;
    },
    set: function(newVal) {
      if (val == newVal) return;
      val = newVal;
      dep.notify();
    }
  });
}