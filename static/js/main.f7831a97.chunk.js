(this["webpackJsonpusersgroups-ui"]=this["webpackJsonpusersgroups-ui"]||[]).push([[0],{37:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r),a=n(15),c=n.n(a),i=(n(37),n(8)),o=n(9),l=n(11),j=n(10),h=n(1),u=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrolJRiEFTV7D9hPXPZFhdfqat8uEcSOnK0w&usqp=CAU",width:"300",className:"img-thumbnail",style:{marginTop:"20px"}}),Object(h.jsx)("hr",{}),Object(h.jsx)("h5",{children:Object(h.jsx)("i",{children:"presents"})}),Object(h.jsx)("h1",{children:"App with React + Django"})]})}}]),n}(r.Component),d=u,b=n(78),p=n(79),O=n(80),g=n(77),m=n(73),x=n(81),f=n(74),y=n(75),v=n(32),C=n(69),S=n(70),k=n(71),w=n(72),U=n(14),E=n.n(U),A="http://localhost:8000/api/users/",D=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={username:"",email:"",password:"",group:"",admin:""},e.onChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.createUser=function(t){t.preventDefault(),E.a.post(A,e.state).then((function(){e.props.resetState(),e.props.toggle()}))},e.editUser=function(t){t.preventDefault(),E.a.put(A+e.state.pk,e.state).then((function(){e.props.resetState(),e.props.toggle()}))},e.defaultIfEmpty=function(e){return""===e?"":e},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){if(this.props.user){var e=this.props.user,t=e.username,n=e.email,r=(e.password,e.group),s=e.admin;this.setState({username:t,email:n,group:r,admin:s})}}},{key:"render",value:function(){return Object(h.jsxs)(C.a,{onSubmit:this.props.user?this.editUser:this.createUser,children:[Object(h.jsxs)(S.a,{children:[Object(h.jsx)(k.a,{for:"username",children:"Username:"}),Object(h.jsx)(w.a,{type:"username",name:"username",onChange:this.onChange,value:this.defaultIfEmpty(this.state.username)})]}),Object(h.jsxs)(S.a,{children:[Object(h.jsx)(k.a,{for:"email",children:"Email:"}),Object(h.jsx)(w.a,{type:"email",name:"email",onChange:this.onChange,value:this.defaultIfEmpty(this.state.email)})]}),Object(h.jsxs)(S.a,{children:[Object(h.jsx)(k.a,{for:"password",children:"Password:"}),Object(h.jsx)(w.a,{type:"password",name:"password",onChange:this.onChange,value:this.defaultIfEmpty(this.state.password)})]}),Object(h.jsxs)(S.a,{children:[Object(h.jsx)(k.a,{for:"group",children:"Group:"}),Object(h.jsxs)("select",{className:"form-select","aria-label":"Default select example",children:[Object(h.jsx)("option",{selected:!0,children:"Open this select menu"}),Object(h.jsx)("option",{value:"users",children:"users"}),Object(h.jsx)("option",{value:"moderators",children:"moderators"}),Object(h.jsx)("option",{value:"admins",children:"admins"})]})]}),Object(h.jsxs)(S.a,{children:[Object(h.jsx)(k.a,{for:"admin",children:"Admin:"}),Object(h.jsx)(w.a,{type:"checkbox",name:"admin",onChange:this.onChange})]}),Object(h.jsx)(m.a,{children:"Send"})]})}}]),n}(s.a.Component),F=D,N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={modal:!1},e.toggle=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.create,t="Editing User",n=Object(h.jsx)(m.a,{onClick:this.toggle,children:"Edit"});return e&&(t="Creating New User",n=Object(h.jsx)(m.a,{color:"primary",className:"float-right",onClick:this.toggle,style:{minWidth:"200px"},children:"Create New"})),Object(h.jsxs)(r.Fragment,{children:[n,Object(h.jsxs)(x.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(h.jsx)(f.a,{toggle:this.toggle,children:t}),Object(h.jsx)(y.a,{children:Object(h.jsx)(F,{resetState:this.props.resetState,toggle:this.toggle,user:this.props.user})})]})]})}}]),n}(r.Component),I=N,P=n(76),T=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={modal:!1},e.toggle=function(){e.setState((function(e){return{modal:!e.modal}}))},e.deleteUser=function(t){E.a.delete(A+t).then((function(){e.props.resetState(),e.toggle()}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(m.a,{color:"danger",onClick:function(){return e.toggle()},children:"Remove"}),Object(h.jsxs)(x.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(h.jsx)(f.a,{toggle:this.toggle,children:"Do you really wanna delete this user?"}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(m.a,{type:"button",onClick:function(){return e.toggle()},children:"Cancel"}),Object(h.jsx)(m.a,{type:"button",color:"primary",onClick:function(){return e.deleteUser(e.props.pk)},children:"Yes"})]})]})]})}}]),n}(r.Component),L=T,q=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.users;return Object(h.jsxs)(g.a,{dark:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"id"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Group"}),Object(h.jsx)("th",{children:"Admin"}),Object(h.jsx)("th",{children:"Actions"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:!t||t.length<=0?Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"6",align:"center",children:Object(h.jsx)("b",{children:"Ops, no one here yet"})})}):t.map((function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.id}),Object(h.jsx)("td",{children:t.email}),Object(h.jsx)("td",{children:t.group}),Object(h.jsx)("td",{children:t.admin}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:"Large button"}),Object(h.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg",children:"Large button"})]}),Object(h.jsxs)("td",{align:"center",children:[Object(h.jsx)(I,{create:!1,user:t,resetState:e.props.resetState}),"\xa0\xa0",Object(h.jsx)(L,{pk:t.pk,resetState:e.props.resetState})]})]},t.pk)}))})]})}}]),n}(r.Component),G=q,J=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={users:[]},e.getUsers=function(){E.a.get(A).then((function(t){return e.setState({users:t.data})}))},e.resetState=function(){e.getUsers()},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.resetState()}},{key:"render",value:function(){return Object(h.jsxs)(b.a,{style:{marginTop:"20px"},children:[Object(h.jsx)(p.a,{children:Object(h.jsx)(O.a,{children:Object(h.jsx)(G,{users:this.state.users,resetState:this.resetState})})}),Object(h.jsx)(p.a,{children:Object(h.jsx)(O.a,{children:Object(h.jsx)(I,{create:!0,resetState:this.resetState})})})]})}}]),n}(r.Component),M=J,R=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(d,{}),Object(h.jsx)(M,{})]})}}]),n}(r.Component),B=R,K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};n(67);c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),K()}},[[68,1,2]]]);
//# sourceMappingURL=main.f7831a97.chunk.js.map