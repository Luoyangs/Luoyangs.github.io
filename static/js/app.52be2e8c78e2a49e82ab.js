webpackJsonp([1],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=e("7+uW"),p=e("fVZs"),f=e.n(p),o=(e("clu/"),{name:"App",data:function(){return{def:'Markdown 语法简介\n=============\n\x3c!-- [语法详解](http://commonmark.org/help/) --\x3e\n[[toc]]\n\n## **目录**\n```\n[[toc]]\n```\n\n## **粗体**\n```\n**粗体**\n__粗体__\n```\n## *斜体*\n```\n*斜体*\n_斜体_\n```\n## 标题\n\n```\n# 一级标题\n## 二级标题\n### 三级标题\n#### 四级标题\n##### 五级标题\n###### 六级标题\n```\n\n## 换行\n使用`回车键`自行换行，参考下面\n```\n是多少的计算\n撒大声地所多\n撒大声地所电脑上\n山东省内十多年十多年\n```\n是多少的计算\n撒大声地所多\n撒大声地所电脑上\n山东省内十多年十多年\n\n## 分割线\n不要使用markdown自带的`---`或者`***`，会导致样式不一致\n[[HR]]\n```\n[[HR]]\n```\n\n## 间距\n每一个的(垂直)间距是8px，可以连续使用多个。请注意大小写\n备注：请不要在页面的开头使用此标签\n`<br />`\n或者\n`<br>`\n推荐使用前者\n\n```\n<br />\n<br /><br />\n```\n\n## ^上^角~下~标\n```\n上角标 x^2^\n下角标 H~2~0\n```\n## ++下划线++ ~~中划线~~\n```\n++下划线++\n~~中划线~~\n```\n## ==标记==\n```\n==标记==\n```\n## 段落引用\n```\n> 一级\n>> 二级\n>>> 三级\n...\n```\n\n## 列表\n```\n有序列表\n1.\n2.\n3.\n...\n无序列表\n-\n-\n...\n```\n\n## 任务列表\n\n- [x] 已完成任务\n- [ ] 未完成任务\n\n```\n- [x] 已完成任务\n- [ ] 未完成任务\n```\n\n## 链接\n```\n[链接](www.baidu.com)\n![图片描述](http://www.image.com)\n```\n\n## 代码段落\n\\``` type\n\n代码段落\n\n\\```\n\n\\` 代码块 \\`\n\n```c++\nint main()\n{\n    printf("hello world!");\n}\n```\n\n## 表格(table)\n```\n| 标题1 | 标题2 | 标题3 |\n| :--  | :--: | ----: |\n| 左对齐 | 居中 | 右对齐 |\n| ---------------------- | ------------- | ----------------- |\n```\n| 标题1 | 标题2 | 标题3 |\n| :--  | :--: | ----: |\n| 左对齐 | 居中 | 右对齐 |\n| ---------------------- | ------------- | ----------------- |\n\n## 表情(emoji)\n[参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\n```\n:laughing:\n:blush:\n:smiley:\n:)\n...\n```\n:laughing::blush::smiley::)\n\n## 图片\n支持自定义图片的尺寸（宽高），具体语法如下\n> 备注： test表示图片缺少是显示的文字，支持自定义，一般指图片的名字\n\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png)\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png =100x)\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png =200x100)\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png =x100)\n```\n原图\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png)\n宽度固定，高度自适应\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png =100x)\n高度固定，宽度自适应\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png =x100)\n固定宽高\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png =200x100)\n\n```\n\n## 高级布局\n页面总宽度被分成12列\n### 两列\n:::: row\n::: col :span="6"\n第一列\n这是普通文本\n\n\n这是一个危险警告\n  \n:::\n\n::: col :span="6"\n第二列\n\n这是普通文本\n  \n:::\n::::\n\n### 三列\n:::: row\n::: col :span="4"\n第一列\n这是普通文本\n:::\n\n::: col :span="4"\n第二列\n这是普通文本\n:::\n\n::: col :span="4"\n第三列\n这是普通文本\n:::\n::::\n\n### 四列\n:::: row\n::: col :span="3"\n第一列\n这是普通文本\n:::\n\n::: col :span="3"\n第二列\n这是普通文本\n:::\n\n::: col :span="3"\n第三列\n这是普通文本\n:::\n::: col :span="3"\n第四列\n这是普通文本\n:::\n::::\n\n\n### 左文右图\n:::: row\n::: col :span="10"\n第四列\n这是普通文本\n:::\n\n::: col :span="2"\n这是一个危险警告\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png =100x100)\n:::\n::::\n\n:::: row\n::: col :span="10"\n![test](https://pic2.zhimg.com/80/v2-14e5c9f519d6fd5f0f09b36af959e63c_hd.png)\n:::\n\n::: col :span="2"\n左图右文\n这是普通文本\n:::\n::::\n\n## 时间轴\n时间轴不能嵌套在`高级布局`中\n\n:::: tl\n::: tli time="06/01/2020 18:00" title="这是标题"\n修复了对主按钮的样式文案错误\n:::\n\n::: tli time="06/01/2020 18:00" title="这是标题"\n- 新增了白边幽灵按钮；\n- 新增了白边幽灵按钮；\n:::\n\n::: tli time="06/01/2020 18:00" title="这是标题"\n修复了对主按钮的样式文案错误\n:::\n\n::: tli time="06/01/2020 18:00" title="这是标题"\n修复了对主按钮的样式文案错误\n:::\n::::\n'}}}),i={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("mavon-editor",{model:{value:n.def,callback:function(t){n.def=t},expression:"def"}})],1)},staticRenderFns:[]};var s=e("VU/8")(o,i,!1,function(n){e("kJMp")},null,null).exports;c.default.use(f.a),c.default.config.productionTip=!1,new c.default({el:"#app",components:{App:s},template:"<App/>"})},"clu/":function(n,t){},kJMp:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.52be2e8c78e2a49e82ab.js.map