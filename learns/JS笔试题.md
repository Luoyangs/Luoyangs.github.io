> 1、有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，将其按key-value形式返回到一个json结构中，如{a:'1', b:'2', c:'', d:'xxx', e:undefined}。
```JS
function getDataFromURL(url) {
  var result = {};
  var params = url.split('?')[1].split('&');
  for (var i = 0; i < params.length; i++) {
    var element = params[i];
    if(/=/.test(element)){
      var item = element.split('=');
      result[item[0]] = item[1];
    }else{
      result[element] = undefined;
    }
  }
  return result;
}
```   
> 2、请编写一个JavaScript函数，它的作用是校验输入的字符串是否是一个有效的电子邮件地址。   
要求：    
a)   使用正则表达式。    
b)   如果有效返回true ，反之为false。   
```JS
function checkEmail(email){  
    var reg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;  
    return reg.test(email);  
}  
```
> 3、按照CommonJS规范，在任何模块代码的作用域下内置了以下哪些变量？   
A、module  
B、context  
C、require  
D、exports   
```
ACD
```
> 5、请使用原生js实现一个div可拖拽，需要考虑浏览器兼容性。  
```JS 
function drag(obj) {  
  obj.onmousedown = function(e) {  
    var e = e || window.event;  
    var X = e.clientX - this.offsetLeft;  
    var Y = e.clientY - this.offsetTop;  
    if ( obj.setCapture ) {  
      obj.setCapture();  
    }  
    document.onmousemove = function(e) {  
      var e = e || window.event;  
      obj.style.left = e.clientX - X + 'px';  
      obj.style.top = e.clientY - Y + 'px';  
    }  
    document.onmouseup = function() {  
      document.onmousemove = document.onmouseup = null;//释放全局捕获   
      if ( obj.releaseCapture ) {  
          obj.releaseCapture();  
      }  
    }  
    return false;  
  }  
}  
说明：
var e = e || window.event //兼容W3C和IE
var X=event.clientX-whole.offsetLeft; //获取当前框内点击点对元素左边的最短距离
var Y=event.clicntY-whole.offsetTop; //获取当前框内点击点对元素上边的最短距离 
obj.style.left = e.clientX - X + 'px'; //鼠标的横坐标-X得到当前元素的左边距
obj.style.top = e.clientY - Y + 'px'; //鼠标的纵坐标-Y得到当前元素的上边距
document.onmousemove = document.onmouseup = null;//当鼠标松开时，将元素固定在当前位置，取消document的onmousemove事件 
obj.setCapture(); //兼容浏览器？？
```
>1、请给Array本地对象增加一个原型方法，它用于删除数组条目中重复的条目(可能有多个)，返回值是一个包含被删除的重复条目的新数组。  
```JS
Array.prototype.getRepeat=function(){  
  var newArr=[];  
  for (var i = 0; i < this.length; i++) {  
    for (var j = i+1; j < this.length; j++) {  
      if (this[i]===this[j]) {  
        newArr.push(this.splice(j--,1)[0]);  
      }  
    }  
  }  
  return newArr;  
}  
console.log(['a','b','c','a','c','d','b','e'].getRepeat()); //["a", "b", "c"] 
```
>2、请填充代码，使mySort()能使传入的参数按照从小到大的顺序显示出来。   
```JS
function mySort() {   
    var tags = new Array();//使用数组作为参数存储容器   
    __________________   
    return tags;//返回已经排序的数组   
}    
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定   
console.info(result);//显示结果  

function mySort() {  
  var tags = new Array();//使用数组作为参数存储容器  
  if(arguments.length){  
    tags=[...arguments].slice(0);  
    tags.sort(function(item1,item2){  
      return item1-item2;  
    })  
  }  
  return tags;//返回已经排序的数组  
}   
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定  
console.info(result);//显示结果 
```
> 3、javascript里面的继承怎么实现，如何避免原型链上面的对象共享。  
```JS
答案：通过原型链实现继承，借用构造函数避免原型对象共享
function SuperType(){    
    this.property=true;    
}    
      
SuperType.prototype.getSuperValue=function(){    
    return this.property;    
}    
      
function SubType(){    
    this.subproperty=false;    
}    
          
//继承了SuperType    
SubType.prototype=new SuperType();    
      
SubType.prototype.getSubValue=function(){    
    return this.subproperty;    
}    
      
var instance=new Son();    
alert(instance.getSuperValue());       //true    
      
alert(instance instanceof Object);     //true    
alert(instance instanceof SuperType);  //true    
alert(instance instanceof SubType);    //true 
```
> 4.请问在javascript程序中,alert(undefined==null)的输出结果是
```
true
说明：==是true ===是false
```
> 5、下面有关浏览器中使用js跨域获取数据的描述，说法错误的是？         
A、域名、端口相同，协议不同，属于相同的域   
B、js可以使用jsonp进行跨域  
C、通过修改document.domain来跨子域   
D、使用window.name来进行跨域   
```
A
说明：域名、端口、协议三者必须相同，才能称为相同的域
```
> 6、在文件/home/somebody/workspace/somemodule.js中第一行引用了一个模块：require(‘othermodule‘)，请问required 的查找模块的顺序 ？  
A./home/somebody/workspace/node_modules/othermodule/index.js    
B./home/somebody/workspace/node_modules/othermodule.js    
C.CORE MODULES named othermodule    
D./home/somebody/node_modules/othermodule/index.js   
A、C D A B    
B、C B D A    
C、C B A D    
D、C D B A   
```
C
说明：（node.js知识）
(1)首先，Node在当前目录下查找package.json(CommonJS包规范定义的包描述文件)，通过JSON.parse()解析出包描述对象，从中取出main属性指定的文件名进行定位。如果文件缺少扩展名，将会进入扩展名分析的步骤。
(2)而如果main属性制定的文件名错误，或者压根没有package.json文件，Node会将index当做默认文件名，然后依次查找index.js、index.node、index.json.
(3)如果在目录分析的过程中没有定位成功任何文件，则自定义模块进入下一个模块路径进行查找。如果模块路径数组都被遍历完毕，依然没有查找到目标文件，则会抛出查找失败异常。 　　
按照上面的思路，首先应该查找package.json文件，看看里面有没有核心模块，应该是C最先，othermodule不是核心模块，那么接着应该进入扩展名分析的步骤，就应该是查找othermodule. js，对应B，紧接着就是以index为默认文件名，也就是A，再接下来就是上一个文件目录D了
```
> 7、编写一个JavaScript函数，输入指定类型的选择器(仅需支持id，class，tagName三种简单CSS选择器，无需兼容组合选择器)可以返回匹配的DOM节点，需考虑浏览器兼容性和性能。   
/**   
* @param selector {String} 传入的CSS选择器。   
* @return {Array}   
*/    
var query = function(selector){    
  return [];//返回查找到的节点数组   
}  
```JS
var query = function(selector){  
  var arr = [];  
  if(/^#/.test(selector)){ //匹配id选择器  
    arr.push(document.getElementById(selector.slice(1));  
  }else if(/^\./.test(selector)){ //匹配类选择器  
    var values = document.getElementsByClassName(selector.slice(1);  
    if(values.length != 0){ //判断是否匹配到        
      arr.push(...values);  
    }  
  }else{ //匹配标签选择器  
    var values = document.getElementsByTagName(selector);  
    if(values.length != 0){ //判断是否匹配到  
      arr.push(...values);  
    }  
  }  
  return arr;//返回查找到的节点数组  
}
```
> 8、请编写一个JavaScript 函数toRGB，它的作用是转换CSS中常用的颜色编码。     
要求：   
alert(toRGB("#0000FF"));   // 输出 rgb(0, 0, 255)    
alert(toRGB("invalid"));   // 输出 invalid    
alert(toRGB("#G00"));      // 输出 #G00    
```JS
function toRGB(color){  
  var reg=/^#[0-9a-f]{6}/i;  
  return reg.test(color)?'rgb('+color.slice(1).replace(/[0-9a-f]{2}/ig,function($0){  
      return parseInt($0,16)+',';  
  }).slice(0,-1)+')':color;  
}  
console.log(toRGB("#00ff00"));
说明：利用字符串的replace方法，在回调函数中将每次匹配到的2位十六进制数转换为十进制，slice(0,-1)是去掉最后一个多余的逗号
```
> 1:下列事件哪个不是由鼠标触发的事件（）   
A、click    
B、contextmenu   
C、mouseout   
D、keydown   
```
D
click是鼠标点击事件
contextmenu 是当浏览者按下鼠标右键出现菜单时或者通过键盘的按键触发页面菜单时触发的事件
 [ 试试在页面中的 <body> 中加入onContentMenu="return false" 就可禁止使用鼠标右键了 ]
mouseout 事件会在鼠标指针移出指定的对象时发生。
keydown 事件会在用户按下一个键盘按键时发生，由键盘触发
```
> 2:下面关于CSS布局的描述，不正确的是？   
A、块级元素实际占用的宽度与它的 width 属性有关；   
B、块级元素实际占用的宽度与它的 border 属性有关；   
C、块级元素实际占用的宽度与它的 padding 属性有关；   
D、块级元素实际占用的宽度与它的 background 属性有关。   
```
D
块级元素的宽度是指块级元素内容区、左右内边距、左右边框和左右外边距的宽度之和。而块级元素内容区的宽度由该元素的width属性来表示（或设置）。(w3c标准盒子模型)
```
> 3:下面有关html的描述，不推荐的是？   
A、在页面顶部添加 doctype声明；   
B、在 `</head> … <body>` 中间插入 HTML 代码；   
C、避免使用 `<font>` 标签；   
D、使用 `<table>` 元素展现学生成绩表等数据。  
```
B
HTML代码是插入在<body>..</body>之间，因为body是页面的主体部分，我们浏览网页的时候除了标题之外的东西都是在body中呈现的；
建议使用CSS样式（代替 <font>）来定义文本的字体、字体颜色、字体尺寸。
``` 
> 4:浏览器在一次 HTTP 请求中，需要传输一个 4097 字节的文本数据给服务端，可以采用那些方式?  
A、存入 IndexdDB   
B、写入 COOKIE  
C、放在 URL 参数  
D、写入 Session   
E、使用 POST  
F、放在 Local Storage  
```
E
IndexdDB 是 HTML5 的本地存储，把一些数据存储到浏览器（客户端）中，当与网络断开时，可以从浏览器中读取数据，用来做一些离线应用。
Cookie 通过在客户端 ( 浏览器 ) 记录信息确定用户身份，最大为 4 kb 。
url 参数用的是 get 方法，从服务器上获取数据，大小不能大于 2 kb 。
Session 是服务器端使用的一种记录客户端状态的机制 。
post 是向服务器传送数据，数据量较大。
local Storage 也是 HTML5 的本地存储，将数据保存在客户端中（一般是永久的）
```
> 5:下面哪个属性不会让 div 脱离文档流（normal flow）？   
A、position: absolute;   
B、position: fixed;   
C、position: relative;   
D、float: left;  
```
C
A：position: absolute;
生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位；都绝对定位了，肯定脱离了文档流。。
B:position: fixed;
生成绝对定位的元素，相对于浏览器窗口进行定位;相对于浏览器了，也和正常顺序排下来没什么关系。。
C:position: relative;
生成相对定位的元素，相对于其正常位置进行定位。生成相对定位，也就是说还在原本的上下左右之间，上下左右的元素都不变，so这个没有能脱离文档流。。就这个了
D:float: left;都浮动出去了，还上哪保持原位置去。。
```
> 6:javascript 语言特性中，有很多方面和我们接触的其他编程语言不太一样，比如说，javascript语言实现继承机制的核心就是 ___1____ ，而不是Java语言那样的类式继承。Javascript 解析引擎在读取一个Object的属性的值时，会沿着 ____2____向上寻找，如果最终没有找到，则该属性值为_____3_____ ； 如果最终找到该属性的值，则返回结果。与这个过程不同的是，当javascript解析引擎执行“给一个Object的某个属性赋值”的时候，如果当前Object存在该属性，则改写该属性的值，如果当前的Object本身并不存在该属性，则赋值该属性的值 。
```
1、prototype
2、原型链
3、undefined
```
> 7:填写内容让下面代码支持a.name = “name1”; b.name = “name2”;   
function obj(name){    
    _____1_____    
}   
obj. ______2_____ = "name2";   
var a = obj("name1");   
var b = new obj;   
```
1、if(name){ this.name = name;}return this;  //判断obj实例有没有name属性，如果有则给this对象，如果没有就从原型上找name 。
2、prototype.name
```
> 10：实现如下页面布局。核心区域左侧自适应，右侧固定宽度 200px  
```CSS
.header{  
    border: 1px solid #0f0;  
    position: relative;  
}  
.header .logo{  
    border: 1px solid #f00;  
    width: 10%;  
    height: 100px;  
    margin: 5px;  
}  
.header .username{  
    border: 1px solid #ccc;  
    width: 10%;  
    position: absolute;  
    bottom: 5px;  
    right: 5px;  
    text-align: right;  
}  
.main{  
    position: relative;  
}  
.main .content{  
    margin-top: 5px;  
    margin-bottom: 5px;  
    height: 400px;  
    width: 82%;  
    border: 1px solid purple;  
}  
.main .aside{  
    margin-left: 2%;  
    width: 200px;  
    border: 1px solid #f00;  
    position: absolute;  
    right: 0;  
    top: 0;     
}  
.footer{  
    border: 1px solid #ccc;  
    text-align: center;  
}  
```
```HTML
<div class="container">  
  <div class="header">  
    <div class="logo">logo</div>  
    <div class="username">用户名</div>  
  </div>  
  <div class="main">  
    <div class="content">content-自适应宽度</div>  
    <div class="aside">aside-定宽200px</div>  
  </div>  
  <div class="footer">footer</div>  
</div> 
```
> 2、请编写一个通用的事件注册函数
```JS
function addEvent(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}

// 获取事件：
getEvent = function(event) {
  return event ? event : window.event;
};
// 获取Target
getTarge = function(event) {
  return event.target || event.srcElement;
};
// 阻止默认事件
preventDefault = function(event) {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
};
// 通用移除事件函数
removeHandler = function(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
};
// 阻止冒泡：
stopPropagation = function(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
};
```
> 6、请给JavaScript的String 原生对象添加一个名为trim 的原型方法，用于截取空白字符。  
```JS
String.prototype.trim = function() {
  var reg = /^\s*([a-zA-Z]{1,})\s*$/;
  return this.match(reg)[1];
}
console.log("taobao ".trim());
说明：match（）匹配返回的数组中，第一项是原字符串，第二项是操作后的字符串；
```
> 7、请编写一段JavaScript脚本生成下面这段DOM结构。要求：使用标准的DOM方法或属性。  
`<div id=”example”>`    
    `<p class=”slogan”>淘！你喜欢</p>`   
`</div>`
```JS
window.onload = function() {
  var Div = document.createElement("div");
  Div.setAttribute("id", "example");
  var P = document.createElement("p");
  P.className = "slogan";
  P.innerHTML = "淘！你喜欢";
  Div.appendChild(P);
  document.body.appendChild(Div);
}
说明：要注意现将所有要添加的都添加到一个代码片中，最后一次性再添加到body中
createElement（）：创建节点
setAttribute（）：设置属性
appendChild（）：添加子节点
```
>9、请说明下面各种情况的执行结果，并注明产生对应结果的理由。     
function doSomething() {   
   alert(this);   
}  
① element.onclick = doSomething，点击element元素后。    
② element.onclick = function() {doSomething()}， 点击element元素后。    
③ 直接执行doSomething()。
```
①弹出element对象，通过函数赋值方式，this直接指向element对象
②弹出window对象，this是写在doSomething这个函数里面的，而函数的this和谁调用它有关。如果没有对象调用它，那么this是window
③刷新页面弹出window，没有绑定对象的情况下this默认指向window
```