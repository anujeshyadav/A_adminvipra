(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[66],{1762:function(e,a,t){},2142:function(e,a,t){"use strict";t.r(a);var n=t(817),s=t(52),l=t(14),r=t(15),o=t(17),c=t(16),i=t(1),m=t.n(i),d=t(1098),u=t(1099),p=t(1100),f=t(804),h=t(1102),b=t(803),g=t(802),v=t(174),y=(t(1762),t(820)),E=t(274),N=t(799),w=(t(42),t(811)),j=t.n(w),O=t(118),x=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(s.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state.data);var a=new FormData;a.append("name",r.state.name),a.append("email",r.state.email),a.append("mobile",r.state.mobile),a.append("password",r.state.password),a.append("cnfmPassword",r.state.cnfmPassword),null!==r.state.selectedFile&&a.append("adminimg",r.state.selectedFile,r.state.selectedName);var t,s=Object(n.a)(a.values());try{for(s.s();!(t=s.n()).done;){var l=t.value;console.log(l)}}catch(m){s.e(m)}finally{s.f()}var o,c=Object(n.a)(a.keys());try{for(c.s();!(o=c.n()).done;){var i=o.value;console.log(i)}}catch(m){c.e(m)}finally{c.f()}O.a.post("/admin/editprofile/64535cc3c84d5b23e0102d4f",a,{headers:{"ad-token":localStorage.getItem("ad-token")}}).then((function(e){console.log(e.data.message),j()("Success!","Submitted SuccessFull!","success"),window.location.reload("/#/pages/profile")})).catch((function(e){j()("Error!","You clicked the button!","error"),console.log(e.response)}))},r.state={name:"",email:"",mobile:"",cnfmPassword:"",password:"",adminimg:"",selectedName:"",selectedFile:null,data:{}},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/admin/viewoneadmin/64535cc3c84d5b23e0102d4f").then((function(a){console.log(a),e.setState({data:a.data.data,name:a.data.data.name,email:a.data.data.email,mobile:a.data.data.mobile,password:a.data.data.password,cnfmPassword:a.data.data.cnfmPassword})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(N.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Profile"}),m.a.createElement("div",{id:"user-profile"},m.a.createElement(d.a,{className:"m-0 justify-content-center"},m.a.createElement(u.a,{lg:"4",md:"4",xl:"4",sm:"12"},m.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},m.a.createElement("div",{className:"profile-img text-center st-1"},m.a.createElement("img",{src:this.state.data.adminimg,alt:"adminimg",className:"img-fluid img-border rounded-circle box-shadow-1",width:"150"}),m.a.createElement("ul",{className:"lst-1"},m.a.createElement("li",{className:"lst-2"},"Name:"," ",m.a.createElement("span",{className:"lst-3"},this.state.data.name)),m.a.createElement("li",{className:"lst-2"},"Mobile:"," ",m.a.createElement("span",{className:"lst-3"},this.state.data.mobile)),m.a.createElement("li",{className:"lst-2"},"Email:"," ",m.a.createElement("span",{className:"lst-3"},this.state.data.email)))))),m.a.createElement(u.a,{sm:"12",xl:"8",lg:"8",md:"8",className:"d-flex justify-content-center"},m.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement("div",{className:"st-2"},m.a.createElement(h.a,null,m.a.createElement("h4",{className:"mb-3"},"Edit Profile"),m.a.createElement(u.a,null)),m.a.createElement(d.a,{className:"m-0"},m.a.createElement(u.a,{sm:"12",className:"p-0"},m.a.createElement(f.a,{action:"/"},m.a.createElement(b.a,null,"Name"),m.a.createElement(g.a,{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:this.changeHandler}),m.a.createElement(b.a,null,"Email"),m.a.createElement(g.a,{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:this.changeHandler}),m.a.createElement(b.a,null,"Mobile No."),m.a.createElement(g.a,{type:"number",name:"mobile",placeholder:"Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),m.a.createElement(b.a,null,"Password"),m.a.createElement(g.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler}),m.a.createElement(b.a,null,"Confirm Password"),m.a.createElement(g.a,{type:"password",name:"cnfmPassword",placeholder:"Reset password",value:this.state.cnfmPassword,onChange:this.changeHandler}),m.a.createElement(b.a,null,"User Image"),m.a.createElement(g.a,{className:"form-control",type:"file",name:"adminimg",onChange:this.onChangeHandler}),m.a.createElement(y.a,{color:"primary",icon:m.a.createElement(E.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0}),m.a.createElement("div",{className:"d-flex justify-content-between"},m.a.createElement(v.a.Ripple,{color:"primary",type:"submit"},"Submit"))))))))))))}}]),t}(m.a.Component);a.default=x},802:function(e,a,t){"use strict";var n=t(6),s=t(10),l=t(12),r=t(13),o=t(1),c=t.n(o),i=t(2),m=t.n(i),d=t(5),u=t.n(d),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,r=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),E=m||("select"===l||"textarea"===l?l:"input"),N="form-control";h?(N+="-plaintext",E=m||"input"):"file"===l?N+="-file":"range"===l?N+="-range":v&&(N=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var w=Object(p.mapToCssModules)(u()(a,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===E||m&&"function"===typeof m)&&(g.type=l),g.children&&!h&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:b,className:w,"aria-invalid":i}))},a}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},803:function(e,a,t){"use strict";var n=t(6),s=t(10),l=t(1),r=t.n(l),o=t(2),c=t.n(o),i=t(5),m=t.n(i),d=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,h=Object(s.a)(e,u),b=[];o.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var l,r=!n;if(Object(d.isObject)(s)){var o,c=r?"-":"-"+a+"-";l=g(r,a,s.size),b.push(Object(d.mapToCssModules)(m()(((o={})[l]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else l=g(r,a,s),b.push(l)}}));var v=Object(d.mapToCssModules)(m()(a,!!l&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return r.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},804:function(e,a,t){"use strict";var n=t(6),s=t(10),l=t(12),r=t(13),o=t(1),c=t.n(o),i=t(2),m=t.n(i),d=t(5),u=t.n(d),p=t(4),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,r=e.tag,o=e.innerRef,i=Object(s.a)(e,f),m=Object(p.mapToCssModules)(u()(a,!!l&&"form-inline"),t);return c.a.createElement(r,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},817:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(92);function s(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l,r=!0,o=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return r=e.done,e},e:function(e){o=!0,l=e},f:function(){try{r||null==s.return||s.return()}finally{if(o)throw l}}}}},820:function(e,a,t){"use strict";var n=t(14),s=t(15),l=t(17),r=t(16),o=t(1),c=t.n(o),i=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),t}(c.a.Component);a.a=i}}]);
//# sourceMappingURL=66.70161115.chunk.js.map