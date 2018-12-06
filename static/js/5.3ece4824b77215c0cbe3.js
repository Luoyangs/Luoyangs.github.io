webpackJsonp([5],{AiGR:function(s,a,t){s.exports=t("WtFH")},WtFH:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=["success","info","warning","error","closed","help","checked","check","close","goods","cart","service","flag","survey","document","book","ticket","list","table","time","date","bell","voice","fire","users","user","circle","phone","password","view","email","message","love","loved","location","chat","upload","download","minus","add","edit","back","arrowup","arrowdown","left","right","down","up","prev","next","chart","piechart","linechart","sexw","sexm","star","stared","like","liked","fullscreen","outscreen","tag","webpack","camera","picture","video","pause","play","sort","menu","more","top","refresh","loading","setting","delete","share","dollar","search","zoom","code","home"],l={data:function(){return{icons:n}},methods:{handleCopy:function(s){alert("Copied: "+s)}}},r={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("图标 Icon")]),s._v(" "),t("h2",[s._v("基础用法 ["+s._s(s.icons.length)+"]")]),s._v(" "),t("p",[s._v("AsUI 的所有图标全部采用字体形式，取材于阿里巴巴矢量图标库（iconfont）。因此你可以把一个 icon 看作是一个普通的文字，这意味着你直接用 css 控制文字属性，如 color、font-size，就可以改变图标的颜色和大小。")]),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("div",{staticClass:"demo-block"},s._l(s.icons,function(a,n){return t("div",{directives:[{name:"copy",rawName:"v-copy",value:a,expression:"item"},{name:"copy",rawName:"v-copy:callback",value:s.handleCopy,expression:"handleCopy",arg:"callback"}],key:n,staticClass:"icon-item"},[t("as-icon",{attrs:{name:a}}),s._v(" "),t("label",[s._v(s._s(a))])],1)}))]),s._v(" "),t("h1"),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-block"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"icon-item"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-copy")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-copy:callback")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"handleCopy"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(item, index) in icons"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("as-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("as-icon")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("{{item}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" iconList = [\n      "),t("span",{attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'info'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'warning'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'closed'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'help'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'checked'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'check'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'close'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'goods'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'cart'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'service'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'flag'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'survey'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'document'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'book'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'ticket'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'list'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'table'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'time'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'date'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'bell'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'voice'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'fire'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'users'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'user'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'circle'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'phone'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'password'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'view'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'email'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'message'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'love'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'loved'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'location'")]),s._v(",  "),t("span",{attrs:{class:"hljs-string"}},[s._v("'chat'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'upload'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'download'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'minus'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'add'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'edit'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'back'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'arrowup'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'arrowdown'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'down'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'up'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'prev'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'next'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'chart'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'piechart'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'linechart'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'sexw'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'sexm'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'star'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'stared'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'like'")]),s._v(",  "),t("span",{attrs:{class:"hljs-string"}},[s._v("'liked'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'fullscreen'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'outscreen'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'tag'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'webpack'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'camera'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'picture'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'video'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'pause'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'play'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'sort'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'menu'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'more'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'refresh'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'loading'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'setting'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'delete'")]),s._v(",  "),t("span",{attrs:{class:"hljs-string"}},[s._v("'share'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'dollar'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'search'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'zoom'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'code'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'home'")]),s._v("\n    ];\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("icons")]),s._v(": iconList\n        };\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        handleCopy(value) {\n          alert("),t("span",{attrs:{class:"hljs-string"}},[s._v("`Copied: "),t("span",{attrs:{class:"hljs-subst"}},[s._v("${value}")]),s._v("`")]),s._v(");\n        }\n      }\n    };\n  ")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"scss"')]),s._v(">")]),t("span",{attrs:{class:"undefined"}},[s._v("\n  .icon-item {\n    display: inline-block;\n    text-align: center;\n    width: 90px;\n    height: 90px;\n    .as-icon {\n      font-size: 30px;\n      transition: transform .3s ease-in;\n      &:hover {\n        cursor: pointer;\n        transform: scale(2);\n      }\n    }\n    label {\n      display: block;\n      margin-top: 16px;\n    }\n  }\n  ")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]};var v=t("VU/8")(l,r,!1,function(s){t("f/m3")},null,null);a.default=v.exports},"f/m3":function(s,a,t){var n=t("j8ws");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("53ee5206",n,!0,{})},j8ws:function(s,a,t){(s.exports=t("FZ+f")(!1)).push([s.i,".icon-item{display:inline-block;text-align:center;width:90px;height:90px}.icon-item .as-icon{font-size:30px;-webkit-transition:-webkit-transform .3s ease-in;transition:-webkit-transform .3s ease-in;transition:transform .3s ease-in;transition:transform .3s ease-in,-webkit-transform .3s ease-in}.icon-item .as-icon:hover{cursor:pointer;-webkit-transform:scale(2);transform:scale(2)}.icon-item label{display:block;margin-top:16px}",""])}});
//# sourceMappingURL=5.3ece4824b77215c0cbe3.js.map