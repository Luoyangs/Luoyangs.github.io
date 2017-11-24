function nodeToFragment(node, vm) {
  var fragments = document.createDocumentFragment();
  var child;
  while (child = node.firstChild) {
    compile(child, vm);
    fragments.appendChild(child);
  }
  return fragments;
}

function compile(node, vm) {
  var reg = /\{\{(.*)\}\}/;
  if (node.nodeType === 1) {
    var attrs = node.attributes;
    for (var i = 0; i < attrs.length; i++) {
      if (attrs[i].nodeName == 'v-model') {
        var key = attrs[i].nodeValue;
        //view -> model
        node.addEventListener('input', function(ev) {
          vm[key] = ev.target.value;
        });
        node.removeAttribute('v-model');
      }
    }

    //model -> view
    new Watcher(vm, node, key, 'input');
  } else if (node.nodeType === 3) {
    if (reg.test(node.nodeValue)) {
      var key = RegExp.$1;
      key = key.trim();

      //model -> view
      new Watcher(vm, node, key, 'text');
    }
  }
}