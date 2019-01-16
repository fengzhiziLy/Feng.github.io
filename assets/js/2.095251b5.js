(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{176:function(t,e,a){t.exports=a.p+"assets/img/1.68439196.png"},177:function(t,e,a){t.exports=a.p+"assets/img/2.34aa197f.png"},178:function(t,e,a){t.exports=a.p+"assets/img/3.b7f5a8c5.png"},221:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"初始化及挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化及挂载","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化及挂载")]),t._v(" "),s("p",[s("img",{attrs:{src:a(176),alt:"内部流程图"}})]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("new Vue()")]),t._v("之后，Vue会调用"),s("code",[t._v("_init")]),t._v("函数进行初始化，也就是图片中的"),s("code",[t._v("init")]),t._v("过程，它会初始化生命周期、事件、props、methods、data、computed与watch等。其中最重要的是通过"),s("code",[t._v("Object.defineProperty")]),t._v("设置"),s("code",[t._v("setter")]),t._v("与"),s("code",[t._v("getter")]),t._v("函数，用来实现[响应式]以及[依赖收集]。")]),t._v(" "),s("p",[t._v("初始化之后调用"),s("code",[t._v("$mount")]),t._v("会挂载组件，如果是"),s("em",[t._v("运行时编译")]),t._v(",即不存在"),s("code",[t._v("render function")]),t._v("但是存在"),s("code",[t._v("template")]),t._v("的情况，需要进行[编译]步骤。")]),t._v(" "),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("p",[s("code",[t._v("compile")]),t._v("编译可以分为"),s("code",[t._v("parse")]),t._v(","),s("code",[t._v("optimize")]),t._v("与"),s("code",[t._v("generate")]),t._v("三个阶段，最终需要得到的是"),s("code",[t._v("render function")])]),t._v(" "),s("h3",{attrs:{id:"parse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parse","aria-hidden":"true"}},[t._v("#")]),t._v(" parse")]),t._v(" "),s("p",[s("code",[t._v("parse")]),t._v("会用正则表达式解析"),s("code",[t._v("template")]),t._v("模版中的指令、class、style等数据，形成AST(抽象语法树)")]),t._v(" "),s("h3",{attrs:{id:"optimize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optimize","aria-hidden":"true"}},[t._v("#")]),t._v(" optimize")]),t._v(" "),s("p",[s("code",[t._v("optimize")]),t._v("的主要作用是标记static静态节点，这是Vue在编译过程中的一处优化，后面当"),s("code",[t._v("update")]),t._v("更新界面时，会有一个"),s("code",[t._v("patch")]),t._v("的过程，diff算法会直接跳过静态节点，从而减少了比较的过程，优化了"),s("code",[t._v("patch")]),t._v("的性能")]),t._v(" "),s("h3",{attrs:{id:"generate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate","aria-hidden":"true"}},[t._v("#")]),t._v(" generate")]),t._v(" "),s("p",[s("code",[t._v("generate")]),t._v("是将AST转化为"),s("code",[t._v("render function")]),t._v("字符串的过程，得到结果是"),s("code",[t._v("render")]),t._v("字符串以及"),s("code",[t._v("staticRenderFns")]),t._v("字符串")]),t._v(" "),s("p",[t._v("在经历过"),s("code",[t._v("parse")]),t._v("、"),s("code",[t._v("optimize")]),t._v("与"),s("code",[t._v("generate")]),t._v("这三个阶段以后，组件中就会存在渲染VNode所需的"),s("code",[t._v("render function")]),t._v("了")]),t._v(" "),s("h2",{attrs:{id:"响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应式")]),t._v(" "),s("p",[s("img",{attrs:{src:a(177),alt:"响应式"}})]),t._v(" "),s("p",[t._v("这里的"),s("code",[t._v("getter")]),t._v("与"),s("code",[t._v("setter")]),t._v("是在"),s("code",[t._v("init")]),t._v("的时候通过"),s("code",[t._v("Object.defineProperty")]),t._v("进行了绑定，使得当被设置的对象被读取的时候会执行"),s("code",[t._v("getter")]),t._v("函数，而在当被赋值的时候会执行"),s("code",[t._v("setter")]),t._v("函数")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("render function")]),t._v("被渲染的时候，因为会读取所需对象的值，所以会触发"),s("code",[t._v("getter")]),t._v("函数进行[依赖收集],[依赖收集]的目的是"),s("strong",[t._v("将观察者Watcher对象存放到当前闭包中的订阅者Dep的subs中")]),t._v("。形成如下的关系：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(178),alt:"目的"}})]),t._v(" "),s("p",[t._v("在修改对象的值的时候，会触发对应的"),s("code",[t._v("setter")]),t._v("，"),s("code",[t._v("setter")]),t._v("通知之前的[依赖收集]得到的Dep中的每一个Watcher，告诉他们自己的值改变了，需要重新渲染视图。这时候这些Watcher就会调用"),s("code",[t._v("update")]),t._v("来更新视图。当然这中间还有一个"),s("code",[t._v("patch")]),t._v("的过程以及使用队列异步更新的策略")]),t._v(" "),s("h2",{attrs:{id:"virtual-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom","aria-hidden":"true"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),s("p",[s("code",[t._v("render function")]),t._v("会被转化为VNode节点。Virtual DOM其实就是一颗以javascript对象(VNode节点)作为基础的树，用对象属性来描述节点，实际上它只是一层对真实DOM的抽象。最终可以通过一系列操作是这棵树映射到真实环境中。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tag"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'div'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),s("span",{attrs:{class:"token comment"}},[t._v("/*这说明是一个div标签*/")]),t._v("\n  children"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("             "),s("span",{attrs:{class:"token comment"}},[t._v("/*存放在该标签中的子节点*/")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("       \n      tag"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'a'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),s("span",{attrs:{class:"token comment"}},[t._v("/*说明这时一个a标签*/")]),t._v("\n      text"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'click me'")]),t._v("    "),s("span",{attrs:{class:"token comment"}},[t._v("/*标签的内容*/")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("渲染后可以得到：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("a"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("click me"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("实际上的节点有更多的属性来标志节点，比如 isStatic （代表是否为静态节点）、 isComment （代表是否为注释节点）等。")]),t._v(" "),s("h2",{attrs:{id:"更新视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新视图")]),t._v(" "),s("p",[t._v("在修改一个对象值的时候，会通过"),s("code",[t._v("setter -> Watcher -> update")]),t._v("的流程来修改对应的视图，最终如何更新？")]),t._v(" "),s("p",[t._v("当数据变化后，执行"),s("code",[t._v("render function")]),t._v("就可以得到一个新的VNode节点，如果想要得到新的视图，最简单的方法就是直接解析这个新的VNode节点，然后用"),s("code",[t._v("innerHTML")]),t._v("直接全部渲染到真实DOM上，但是这样会有浪费，因为只是对其中的一小部分进行了修改")]),t._v(" "),s("p",[t._v("可以通过只修改那些“改变了的地方”。将新的VNode与旧的VNode一起传入"),s("code",[t._v("patch")]),t._v("进行比较，经过diff算法得出他们的[差异]，最后只要将这些差异的对应DOM进行修改即可。")])])}],v=a(0),_=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);_.options.__file="Vue运行机制全局概览.md";e.default=_.exports}}]);