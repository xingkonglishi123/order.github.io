webpackJsonp([1],{"6heU":function(t,s){},"H/y0":function(t,s){},Hf3k:function(t,s){},LS8M:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("MVMM"),n=e("zO6J"),i=e("uAC3"),r=e.n(i),o={computed:{currentUser:function(){return console.log(this.$store.getters.currentUser),this.$store.getters.currentUser},isLogin:function(){return console.log(this.$store.getters.isLogin),this.$store.getters.isLogin}},created:function(){var t=r.a.get("name");console.log("cookie name"),console.log(t)}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"py-2",attrs:{href:"#"}},[e("svg",{staticClass:"d-block mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),e("line",{attrs:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"}}),e("line",{attrs:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"}}),e("line",{attrs:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"}}),e("line",{attrs:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"}}),e("line",{attrs:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"}}),e("line",{attrs:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"}})])]),t._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("pizza")]),t._v(" "),e("ul",{staticClass:"navbar-nav"},[e("li",[e("router-link",{attrs:{to:"/","nav-link":""}},[t._v("主页")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"menu","nav-link":""}},[t._v("菜单")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"admin","nav-link":""}},[t._v("管理")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"about","nav-link":""}},[t._v("关于")])],1)]),t._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"nav-link",attrs:{to:"login"}},[t._v("登录")])],1),t._v(" "),e("li",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"nav-link",attrs:{to:"register"}},[t._v("注册")])],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"nav-link"},[t._v("\n        "+t._s(t.currentUser)+"\n      ")]),t._v(" "),e("li",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"nav-link",attrs:{to:"login"}},[t._v("[退出]")])],1)])])])},staticRenderFns:[]};var l={name:"App",components:{appHeader:e("vSla")(o,c,!1,function(t){e("bHN6")},null,null).exports}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("app-header"),this._v(" "),s("router-view")],1),this._v(" "),s("br"),this._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-4"},[s("router-view",{attrs:{name:"orderingGuide"}})],1),this._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("router-view",{attrs:{name:"delivery"}})],1),this._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("router-view",{attrs:{name:"history"}})],1)])])])},staticRenderFns:[]};var v=e("vSla")(l,u,!1,function(t){e("LS8M")},null,null).exports,d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 text-center",attrs:{id:"home"}},[s("div",{staticClass:"background"},[s("h1",[this._v("欢迎大家品尝pizza")]),this._v(" "),s("h2",[this._v("这里有你喜欢的")]),this._v(" "),s("button",{staticClass:"btn btn-sucess",on:{click:this.gotoMenu}},[this._v("订餐")])])])])},staticRenderFns:[]};var m=e("vSla")({methods:{gotoMenu:function(){this.$router.push({path:"/menu"})}}},d,!1,function(t){e("Yc3R")},null,null).exports,p=e("aozt"),h=e.n(p),_={data:function(){return{basket:[],basketText:"购物车没有任何商品"}},methods:{addToBasket:function(t,s){var e={name:t.name,size:s.size,price:s.price,quantity:1};if(console.log("--------"),console.log(e),this.basket.length>0){var a=this.basket.filter(function(e){return e.name===t.name&&e.price===s.price});null!=a&&a.length>0?a[0].quantity++:this.basket.push(e)}else this.basket.push(e)},add:function(t){t.quantity=t.quantity+1},reduce:function(t){t.quantity=t.quantity-1,0===t.quantity&&this.remove(t)},remove:function(t){this.basket.splice(this.basket.indexOf(t),1)},fetchData:function(){var t=this;this.http.get("https://wd3780466709glsyyc.wilddogio.com/menu1.json").then(function(s){t.$store.commit("setMenuItems",s.data)})}},computed:{total:function(){var t=0;for(var s in this.basket)t+=this.basket[s].price*this.basket[s].quantity;return t},getMenuItems:function(){return this.$store.getters.getMenuItems}},created:function(){this.fetchData()}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-8"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.getMenuItems,function(s){return e("tbody",[e("tr",[e("td",[e("s",[t._v(t._s(s.name))])])]),t._v(" "),t._l(s.options,function(a){return e("tr",[e("td",[t._v(t._s(a.size))]),t._v(" "),e("td",[t._v(t._s(a.price))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-outline-success",on:{click:function(e){t.addToBasket(s,a)}}},[t._v("+")])])])})],2)})],2)]),t._v(" "),e("div",{staticClass:"col-md-4 col-sm-12"},[t.basket.length>0?e("div",[e("table",{staticClass:"table"},[t._m(1),t._v(" "),t._l(t.basket,function(s){return e("tbody",[e("tr",[e("td",[e("button",{staticClass:"btn btn-sm",on:{click:function(e){t.reduce(s)}}},[t._v("-")]),t._v(" "),e("span",[t._v(t._s(s.quantity))]),t._v(" "),e("button",{staticClass:"btn btn-sm",on:{click:function(e){t.add(s)}}},[t._v("+")])]),t._v(" "),e("td",[t._v(t._s(s.name)+t._s(s.size))]),t._v(" "),e("td",[t._v(t._s(s.price*s.quantity))])])])})],2),t._v(" "),e("p",[t._v("总价："+t._s(t.total+"RMB"))]),t._v(" "),e("button",{staticClass:"btn btn-block btn-success"},[t._v("提交")])]):e("div",[t._v("\n      "+t._s(t.basketText)+"\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",{staticClass:"thead-default"},[s("tr",[s("th",[this._v("尺寸")]),this._v(" "),s("th",[this._v("价格")]),this._v(" "),s("th",[this._v("加入")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",{staticClass:"thead-default"},[s("tr",[s("th",[this._v("数量")]),this._v(" "),s("th",[this._v("品种")]),this._v(" "),s("th",[this._v("价格")])])])}]},g=e("vSla")(_,f,!1,null,null,null).exports,w=e("3cXf"),C=e.n(w),b={name:"NewPizza",data:function(){return{newPizza:{name:"",description:"",size1:"",price1:"",size2:"",price2:""}}},methods:{add:function(){var t=this,s={name:this.newPizza.name,description:this.newPizza.description,options:[{size:this.newPizza.size1,price:this.newPizza.price1},{size:this.newPizza.size2,price:this.newPizza.price2}]};fetch("https://wd3780466709glsyyc.wilddogio.com/menu1.json",{method:"POST",headers:{"Content-type":"application/json"},body:C()(s)}).then(function(t){return t.json()}).then(function(s){console.log(s),t.$store.commit("pushToMenuItems",s)}).catch(function(t){return console.log(t)})},togo:function(){this.$router.push({path:"/menu"})}}},z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",[e("h3",{staticClass:"text-muted my-5",on:{click:t.togo}},[t._v("添加新pizza")]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-1"},[t._v("品种")]),t._v(" "),e("div",{staticClass:"col-sm-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.name,expression:"newPizza.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.name},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"name",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-1"},[t._v("描述")]),t._v(" "),e("div",{staticClass:"col-sm-11"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.description,expression:"newPizza.description"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.newPizza.description},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"description",s.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-1"},[t._v("尺寸")]),t._v(" "),e("div",{staticClass:"col-sm-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.size1,expression:"newPizza.size1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.size1},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"size1",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-1"},[t._v("价格")]),t._v(" "),e("div",{staticClass:"col-sm-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.price1,expression:"newPizza.price1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.price1},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"price1",s.target.value)}}})])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-1"},[t._v("尺寸")]),t._v(" "),e("div",{staticClass:"col-sm-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.size2,expression:"newPizza.size2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.size2},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"size2",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-1"},[t._v("价格")]),t._v(" "),e("div",{staticClass:"col-sm-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.price2,expression:"newPizza.price2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.price2},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"price2",s.target.value)}}})])]),t._v(" "),e("button",{staticClass:"btn btn-success btn-block",attrs:{type:"button"},on:{click:t.add}},[t._v("添加")])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("s",[this._v("选项1")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("s",[this._v("选项2")])])}]};var y={components:{NewPizza:e("vSla")(b,z,!1,function(t){e("PqHx")},"data-v-55d2eaae",null).exports},data:function(){return{}},created:function(){var t=this;console.log(r.a.get("name")),fetch("https://wd3780466709glsyyc.wilddogio.com/menu1.json").then(function(t){return t.json()}).then(function(s){console.log(s);var e=[];for(var a in s)s[a].id=a,e.push(s[a]);t.$store.commit("setMenuItems",e)})},methods:{del:function(t){var s=this;fetch("https://wd3780466709glsyyc.wilddogio.com/menu1/"+t.id+"/.json",{method:"DELETE",headers:{"Content-type":"application/json"}}).then(function(t){return t.json()}).then(function(e){s.$store.commit("removeMenuItems",t)}).catch(function(t){return console.log(t)})}},computed:{getMinuItems:{get:function(){return console.log(this.$store.state.menuItems),this.$store.getters.getMenuItems},set:function(){}}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-8"},[e("new-pizza")],1),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("h3",{staticClass:"text-muted my-5"},[t._v("菜单")]),t._v(" "),e("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.getMinuItems,function(s){return e("tbody",[e("tr",[e("td",[t._v(t._s(s.name))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){t.del(s)}}},[t._v("×")])])])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",{staticClass:"table table-default"},[s("tr",[s("th",[this._v("品种")]),this._v(" "),s("th",[this._v("删除")])])])}]},k=e("vSla")(y,x,!1,null,null,null).exports,P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"list-group mb-5"},[e("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/history"}},[e("a",{staticClass:"list-group-item list-group-item-action"},[t._v("\n            历史订单\n          ")])]),t._v(" "),e("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/contact"}},[e("a",{staticClass:"list-group-item list-group-item-action"},[t._v("\n            联系我们\n          ")])]),t._v(" "),e("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/order"}},[e("a",{staticClass:"list-group-item list-group-item-action"},[t._v("\n            点餐文档\n          ")])]),t._v(" "),e("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/delivery"}},[e("a",{staticClass:"list-group-item list-group-item-action"},[t._v("\n            快递信息\n          ")])])],1)]),t._v(" "),e("div",{staticClass:"col-8"},[e("router-view")],1)])])},staticRenderFns:[]};var $=e("vSla")({name:"About"},P,!1,function(t){e("stNx")},"data-v-69101872",null).exports,E={data:function(){return{email:"",password:""}},beforeRouteEnter:function(t,s,e){e(function(t){return t.$store.dispatch("setUser",null)})},methods:{onSubmit:function(){var t=this;this.email,this.password;h.a.get("https://wd3780466709glsyyc.wilddogio.com/user1.json").then(function(s){console.log(s);var e=[];for(var a in s.data)e.push(s.data[a]);console.log(e);var n=e.filter(function(s){return s.email===t.email&&t.password===s.password});""!=n&&n.length>0?(t.$store.dispatch("setUser",n[0].email),r.a.set("name",n[0].email),t.$router.push({path:"/"})):(alert("账号或密码错误！"),t.$store.dispatch("setUser",null))})}}},S={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-12 col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"mx-auto d-block",attrs:{src:e("fqxG"),alt:""}}),t._v(" "),a("form",{on:{submit:function(s){return s.preventDefault(),t.onSubmit(s)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("邮箱")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-block btn-success"},[t._v("登录")])])])])])])},staticRenderFns:[]},M=e("vSla")(E,S,!1,null,null,null).exports,N={data:function(){return{email:"",password:"",confirmPassword:""}},methods:{onSubmit:function(){var t=this;if(this.password==this.confirmPassword){var s={email:this.email,password:this.password,confirmPassword:this.confirmPassword};console.log(s),h.a.post("https://wd3780466709glsyyc.wilddogio.com/user1.json",s).then(function(s){console.log(s),t.$router.push({path:"/login"})})}else alert("两次密码不一致！")}}},q={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-12 col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"mx-auto d-block",attrs:{src:e("fqxG"),alt:""}}),t._v(" "),a("form",{on:{submit:function(s){return s.preventDefault(),t.onSubmit(s)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("邮箱")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"confirm-password"}},[t._v("确认密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.confirmPassword},on:{input:function(s){s.target.composing||(t.confirmPassword=s.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-block btn-success"},[t._v("注册")])])])])])])},staticRenderFns:[]},I=e("vSla")(N,q,!1,null,null,null).exports,L={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"card text-dark bg-light mb-3"},[e("div",{staticClass:"card-header"},[t._v("联系我们")]),t._v(" "),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("联系我们")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("15454212@qq.com")]),t._v(" "),e("router-link",{attrs:{to:"/phone"}},[t._v("电话")]),t._v(" "),e("router-link",{attrs:{to:"/personname"}},[t._v("联系人")]),t._v(" "),e("router-view")],1)])])},staticRenderFns:[]};var R=e("vSla")({name:"Contact"},L,!1,function(t){e("oysh")},"data-v-58368d21",null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"card text-dark bg-light mb-3"},[s("div",{staticClass:"card-header"},[this._v("快递信息")]),this._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[this._v("快递信息")]),this._v(" "),s("p",{staticClass:"card-text"},[this._v("15454212@qq.com")])])])])}]};var F=e("vSla")({name:"Delivery"},U,!1,function(t){e("m9W4")},"data-v-4f77d17e",null).exports,j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"card text-dark bg-light mb-3"},[s("div",{staticClass:"card-header"},[this._v("历史订单")]),this._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[this._v("历史订单")]),this._v(" "),s("p",{staticClass:"card-text"},[this._v("15454212@qq.com")])])])])}]};var H=e("vSla")({name:"History"},j,!1,function(t){e("H/y0")},"data-v-c6edfb4e",null).exports,T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"card text-dark bg-light mb-3"},[s("div",{staticClass:"card-header"},[this._v("点餐文档")]),this._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[this._v("点餐文档")]),this._v(" "),s("p",{staticClass:"card-text"},[this._v("15454212@qq.com")])])])])}]};var D=e("vSla")({name:"Order"},T,!1,function(t){e("Hf3k")},"data-v-283c3bf1",null).exports,A={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("13520059405")])},staticRenderFns:[]};var B={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("耿学朋")])},staticRenderFns:[]};var G=[{path:"/",components:{default:m,orderingGuide:D,delivery:F,history:H}},{path:"/menu",component:g},{path:"/about",component:$,redirect:"/contact",children:[{path:"/contact",component:R,redirect:"/phone",children:[{path:"/phone",component:e("vSla")({name:"Phone"},A,!1,function(t){e("z44T")},"data-v-7323d8e2",null).exports},{path:"/personname",component:e("vSla")({name:"PersonName"},B,!1,function(t){e("6heU")},"data-v-538f4a51",null).exports}]},{path:"/delivery",component:F},{path:"/history",component:H},{path:"/order",component:D}]},{path:"/admin",component:k},{path:"/login",component:M},{path:"/register",component:I},{path:"*",redirect:"/"}],O=e("9rMa"),J={state:{menuItems:{}},getters:{getMenuItems:function(t){return t.menuItems}},mutations:{setMenuItems:function(t,s){t.menuItems=s},removeMenuItems:function(t,s){t.menuItems.forEach(function(e,a){e==s&&t.menuItems.splice(a,1)})},pushToMenuItems:function(t,s){t.menuItems.push(s)}},actions:{}},W={state:{currentUser:null,isLogin:!1},getters:{currentUser:function(t){return t.currentUser},isLogin:function(t){return t.isLogin}},mutations:{userStatus:function(t,s){s?(t.currentUser=s,t.isLogin=!0):(t.currentUser=null,t.isLogin=!1)}},actions:{setUser:function(t,s){(0,t.commit)("userStatus",s)}}};a.a.use(O.a);var Y=new O.a.Store({modules:{menu:J,users:W}});h.a.defaults.baseRUL="https://wd5259196195tskwvr.wilddogio.com/",a.a.prototype.http=h.a,a.a.use(n.a);var V=new n.a({routes:G,mode:"history",scrollBehavior:function(t,s,e){return e||{x:0,y:0}}});V.beforeEach(function(t,s,e){e()}),a.a.config.productionTip=!1,new a.a({el:"#app",store:Y,router:V,components:{App:v},template:"<App/>"})},PqHx:function(t,s){},Yc3R:function(t,s){},bHN6:function(t,s){},fqxG:function(t,s,e){t.exports=e.p+"static/img/icon.c43f32c.png"},m9W4:function(t,s){},oysh:function(t,s){},stNx:function(t,s){},z44T:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.fbd93c6ddfa120254d65.js.map