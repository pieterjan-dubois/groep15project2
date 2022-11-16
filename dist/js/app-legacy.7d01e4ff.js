(function(){"use strict";var t={4126:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(8935),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("NavHeader"),e("router-view")],1)},a=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark",attrs:{role:"navigation"}},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand mr-auto",attrs:{to:"/"}},[t._v("Blue Online Store")]),e("ul",{staticClass:"navbar-nav mr-auto"}),e("ul",{staticClass:"nav navbar-nav"},[t.isAuthenticated?t._e():e("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link",on:{click:t.onLoginClicked}},[t._v("Login")])]),t.isAuthenticated?e("li",{staticClass:"li-pointer nav-item"},[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.getUserName())+" ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Account Settings")]),e("a",{staticClass:"dropdown-item",on:{click:t.onLogoutClicked}},[t._v("Logout "+t._s(t.userEmail))])])])]):t._e(),e("li",[e("ShoppingCart")],1)],1)],1)])},o=[],c=(e(8309),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("button",{staticClass:"btn btn-primary navbar-btn",attrs:{"data-toggle":"modal","data-target":"#shoppingCart"}},[e("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),t._v(" ( "+t._s(t.numInCart)+" ) ")]),e("div",{staticClass:"modal fade",attrs:{id:"shoppingCart"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("table",{staticClass:"table"},[e("tbody",[t._l(t.inCart,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(n.title))]),e("td",[t._v("$"+t._s(n.price))]),e("td",[e("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){return t.removeFromCart(n)}}},[t._v(" × ")])])])})),e("tr",[e("th"),e("th",[t._v("$"+t._s(t.total))]),e("th")])],2)])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal"}},[t._v(" Keep shopping ")]),e("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.checkout()}}},[t._v(" Check out ")])])])])])])}),u=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[e("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),t._v(" Shopping cart ")]),e("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],l=(e(1539),{name:"ShoppingCart",computed:{inCart:function(){return this.$store.getters.inCart},numInCart:function(){return this.inCart.length},total:function(){return this.inCart.reduce((function(t,n){return t+n.price}),0)},isAuthenticated:function(){return this.$store.state.user.isAuthenticated}},methods:{removeFromCart:function(t){this.$store.commit("removeFromCart",t)},checkout:function(){this.isAuthenticated?0!=this.numInCart||alert("Your cart is empty!"):alert("Please login to checkout")}}}),d=l,m=e(1001),p=(0,m.Z)(d,c,u,!1,null,null,null),h=p.exports,f={components:{ShoppingCart:h},name:"NavHeader",computed:{userEmail:function(){return this.isLoggedIn?this.currentUser.email:""},isAuthenticated:function(){return this.$store.state.user.isAuthenticated}},methods:{onLoginClicked:function(){window.location=this.$store.state.endpoints.login},onLogoutClicked:function(){this.$store.commit("logout")},getUserName:function(){return this.$store.state.user.name}}},v=f,C=(0,m.Z)(v,s,o,!1,null,null,null),g=C.exports,_={components:{NavHeader:g},mounted:function(){this.$store.dispatch("getProducts")}},b=_,k=(0,m.Z)(b,i,a,!1,null,null,null),w=k.exports,$=e(2809),y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.products,(function(t){return e("Item",{key:t.id,attrs:{item:t}})})),1)])])},x=[],Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-sm-4 item"},[e("div",{staticClass:"card text-center"},[e("div",[e("img",{staticClass:"card-img-top grow",attrs:{src:t.item.thumbnail_url,alt:""}})]),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),e("h6",{staticClass:"card-subtitle mb-2 remain"},[t._v(" "+t._s(t.item.quantity)+" left in stock ")]),e("p",{staticClass:"card-text"},[t._v(t._s(t._f("shortDescription")(t.item.description)))]),e("div",{staticClass:"row"},[e("p",{staticClass:"col-6 lead"},[t._v("$"+t._s(t.item.price))]),e("p",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-success",attrs:{disabled:0===t.item.quantity},on:{click:function(n){return t.addToCart(t.item)}}},[t._v(" Add to cart ")])])])])])])},A=[],O={name:"item",props:["item"],data:function(){return{size:""}},filters:{shortDescription:function(t){return t&&t.length>70?t.substring(0,70)+"...":t}},methods:{addToCart:function(t){this.$store.commit("addToCart",t)}}},T=O,E=(0,m.Z)(T,Z,A,!1,null,"18c3e15e",null),L=E.exports,P={name:"Home",computed:{products:function(){return this.$store.state.products}},components:{Item:L}},j=P,S=(0,m.Z)(j,y,x,!1,null,null,null),I=S.exports,q=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login"},[e("h4",{staticStyle:{"margin-top":"30px","margin-bottom":"30px"}},[t._v("Logging in ...")])])}],N={name:"Login",mounted:function(){var t=this.$route.query.name,n=this.$route.query.email,e=this.$route.query.id_token,r={name:t,email:n,idToken:e};t&&n&&e&&""!=t&&""!=n&&""!=e?this.$store.commit("login",r):this.$store.commit("logout"),this.$router.push("/")}},H=N,B=(0,m.Z)(H,q,F,!1,null,"d12c403e",null),M=B.exports;r.Z.use($.Z);var U=[{path:"/",name:"home",component:I},{path:"/loginwithtoken",name:"loginwithtoken",component:M}],D=new $.Z({mode:"history",base:"/",routes:U}),R=D,z=e(6198),K=(e(8975),e(561),e(4665));r.Z.use(K.ZP);var Y="http://localhost:8000/products",G={Accept:"application/json"},J=new K.ZP.Store({state:{products:[],inCart:[],user:{isAuthenticated:!1,name:"",email:"",idToken:""},endpoints:{login:"http://localhost:3000/login"}},getters:{products:function(t){return t.products},inCart:function(t){return t.inCart}},mutations:{setProducts:function(t,n){t.products=n},addToCart:function(t,n){console.log(n),t.inCart.push(n)},removeFromCart:function(t,n){t.inCart.splice(n,1)},logout:function(t){t.user.isAuthenticated=!1,t.user.name="",t.user.email="",t.user.idToken=""},login:function(t,n){t.user.isAuthenticated=!0,t.user.name=n.name,t.user.email=n.email,t.user.idToken=n.idToken}},actions:{getProducts:function(t){return(0,z.Z)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(Y,{headers:G});case 2:return e=n.sent,n.next=5,e.json();case 5:r=n.sent,t.commit("setProducts",r),console.log(r);case 8:case"end":return n.stop()}}),n)})))()}},modules:{}});r.Z.config.productionTip=!1,new r.Z({router:R,store:J,render:function(t){return t(w)}}).$mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return t[r](a,a.exports,e),a.loaded=!0,a.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,a){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],a=t[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(o=!1,a<s&&(s=a));if(o){t.splice(l--,1);var u=i();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,i,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,a,s=r[0],o=r[1],c=r[2],u=0;if(s.some((function(n){return 0!==t[n]}))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(c)var l=c(e)}for(n&&n(r);u<s.length;u++)a=s[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(l)},r=self["webpackChunkshopping_cart"]=self["webpackChunkshopping_cart"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4126)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.7d01e4ff.js.map