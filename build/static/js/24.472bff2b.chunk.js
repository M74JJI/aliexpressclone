(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[24],{1145:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(1),l=a.n(c),r=a(10),s=a(2),o=(a(998),a(1104),a(239),a(16)),i=(a(1107),a(1108),a(1106),a(52)),m=a(77),u=a(74),p=a(32);t.default=function(e){var t=e.history,a=Object(r.c)((function(e){return Object(n.a)({},e)})),c=a.cart,d=a.user,E=Object(r.b)(),g=function(){return c.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2)};return l.a.createElement("div",{className:"cart-page",style:{backgroundColor:c.length>0?"#e4e4e4":""}},l.a.createElement(m.a,null),l.a.createElement("div",{className:"cart-container"},c.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"cart-left"},l.a.createElement("div",{className:"cart-left-title"},l.a.createElement("h4",null,"Shopping Cart(",c.length,")")),l.a.createElement("div",{className:"cart-items"},c.length?c.map((function(e){return l.a.createElement("div",{className:"cart-item"},l.a.createElement("div",{className:"cart-header"},l.a.createElement("div",{className:"cart-header-left"},l.a.createElement(s.b,null,"SPLOV Official Store")),l.a.createElement("span",null,"Get Coupons")),l.a.createElement("div",{className:"cart-product"},l.a.createElement("img",{src:e.images[0].url,alt:""}),l.a.createElement("div",{className:"cart-product-infos"},l.a.createElement("div",{className:"cart-product-title"},e.title),l.a.createElement("div",{className:"cart-product-color"},l.a.createElement("span",null,"Color : "),l.a.createElement("span",null,"red")),l.a.createElement("p",null,e.title.substring(0,10),"... x ",e.qty," = $",e.price*e.qty),l.a.createElement("div",{className:"cart-product-price"},"US $",e.price),l.a.createElement("div",{className:"cart-product-discount"},l.a.createElement("span",null,"US $",e.priceBefore),l.a.createElement("span",null,"New User BONUS")),l.a.createElement("div",{className:"cart-product-shipping"},l.a.createElement("span",{class:"shippingfreeotNot "},"Free Shipping"),l.a.createElement("span",null,"via Cainiao Super Economy Global Estimated delivery"),l.a.createElement(u.a,{style:{marginTop:"3px"}}))),l.a.createElement("div",{className:"cart-product-operations"},l.a.createElement("div",{className:"cart-wishlist-delete"},l.a.createElement(p.f,{onClick:function(t){return function(e,t){t.preventDefault(),Object(i.a)(e._id,d.token).then((function(e){console.log("ADDED TO WISHLIST",e.data),o.b.success("added to wishlist")}))}(e,t)}}),l.a.createElement(p.e,{onClick:function(){return function(e){var t=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){a._id===e._id&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)),E({type:"ADD_TO_CART",payload:t}))}(e)}})))))})):l.a.createElement("p",null,"No products in cart."))),l.a.createElement("div",{className:"cart-right"},l.a.createElement("div",{className:"cart-summary"},l.a.createElement("h2",{className:"cart-summary-title"},"Order Summary"),l.a.createElement("div",{className:"cart-subtotal-shipping"},l.a.createElement("span",null,"Subtotal"),l.a.createElement("span",null,"US $",g())),l.a.createElement("div",{className:"cart-subtotal-shipping"},l.a.createElement("span",null,"Shipping"),l.a.createElement("span",null,"US $0.00")),l.a.createElement("div",{className:"cart-total"},l.a.createElement("span",null,"Total"),l.a.createElement("span",null,"US $",g())),d&&d.token?l.a.createElement(l.a.Fragment,null," ",l.a.createElement("button",{className:"cart-btn",onClick:function(){Object(i.m)(c,d.token).then((function(e){console.log("CART POST RES",e),e.data.ok&&t.push("/checkout")})).catch((function(e){return console.log("cart save err",e)}))}},"Buy"),l.a.createElement("button",{className:"cart-btn",onClick:function(){E({type:"COD",payload:!0}),Object(i.m)(c,d.token).then((function(e){console.log("CART POST RES",e),e.data.ok&&t.push("/checkout")})).catch((function(e){return console.log("cart save err",e)}))}},"Pay Cash on Delievery")):l.a.createElement(s.b,{className:"cart-link",to:{pathname:"/login",state:{from:"cart"}}},"Login to Checkout")))):l.a.createElement("div",{className:"cart-empty"},l.a.createElement("div",{className:"cart-empty-logo"}),l.a.createElement("h2",null,"Your Shopping Cart is empty"),l.a.createElement("p",null,l.a.createElement(s.b,{to:"/shop"},"Don't miss out on great deals! Start shopping"),"or",l.a.createElement(s.b,null,"log in")," to view products added."))))}},998:function(e,t,a){}}]);
//# sourceMappingURL=24.472bff2b.chunk.js.map