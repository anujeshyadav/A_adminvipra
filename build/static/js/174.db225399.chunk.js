(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[174],{2062:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProduct",(function(){return O}));var n=a(817),r=a(52),l=a(14),c=a(15),o=a(17),i=a(16),s=a(1),m=a.n(s),d=a(1100),u=a(1098),p=a(1099),g=a(174),h=a(1103),f=a(804),v=a(803),E=a(802),y=a(788),b=a(118),C=(a(805),a(57)),S=a(799),N=a(812),w=a.n(N),P=a(829),H=a(830),O=(a(821),a(810),a(1081),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler=function(e){c.setState({selectedFile:e.target.files}),c.setState({selectedName:e.target.files.name}),console.log(e.target.files)},c.uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},c.onEditorStateChange=function(e){c.setState({editorState:e,desc:w()(Object(H.convertToRaw)(e.getCurrentContent()))})},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(r.a)({},e.target.name,e.target.value))},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(r.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),console.log(c.props.match.params,c.state);var t=new FormData;t.append("title",c.state.title),t.append("productname",c.state.productname),t.append("category",c.state.category),t.append("desc",c.state.desc),t.append("price",c.state.price),t.append("limit",c.state.limit),t.append("status",c.state.status),null!==c.state.selectedFile&&t.append("image",c.state.selectedFile,c.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var l=a.value;console.log(l)}}catch(d){r.e(d)}finally{r.f()}var o,i=Object(n.a)(t.keys());try{for(i.s();!(o=i.n()).done;){var s=o.value;console.log(s)}}catch(d){i.e(d)}finally{i.f()}var m=c.props.match.params.id;b.a.post("/admin/editproduct/".concat(m),t).then((function(e){console.log(e),c.props.history.push("/app/productmanager/product/productList")})).catch((function(e){console.log(e)}))},c.state={title:"",productname:"",category:"",image:"",desc:"",price:"",limit:"",selectedFile:void 0,selectedName:"",status:"",editorState:H.EditorState.createEmpty()},c.state={categoryP:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/admin/getproductcalegory").then((function(t){console.log(t),e.setState({categoryP:t.data.data})})).catch((function(e){console.log(e)})),console.log(this.props.match.params);var t=this.props.match.params.id;b.a.get("admin/viewoneProduct/".concat(t)).then((function(t){console.log(t),e.setState({title:t.data.data.title,productname:t.data.data.productname,category:t.data.data.category,image:t.data.data.image,desc:t.data.data.desc,price:t.data.data.price,limit:t.data.data.limit,status:t.data.data.status})}))}},{key:"render",value:function(){var e,t=this;return m.a.createElement("div",null,m.a.createElement(S.a,{breadCrumbTitle:"Edit Product",breadCrumbParent:" Product Management",breadCrumbActive:"Edit Product"}),m.a.createElement(d.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Product")),m.a.createElement(p.a,null,m.a.createElement(C.b,{render:function(e){var t=e.history;return m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/customer/customerList")}},"Back")}}))),m.a.createElement(h.a,null,m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(v.a,null,"Product Title"),m.a.createElement(E.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title",value:this.state.title,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(v.a,null,"Product Name"),m.a.createElement(E.a,{required:!0,type:"text",name:"productname",placeholder:"Enter Title",value:this.state.productname,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Product Category"),m.a.createElement(y.a,{type:"select",name:"category",value:this.state.category,onChange:this.changeHandler},m.a.createElement("option",null,"Select Product Category"),null===(e=this.state.categoryP)||void 0===e?void 0:e.map((function(e){return m.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))),m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(v.a,null,"Price(MRP)"),m.a.createElement(E.a,{required:!0,type:"number",name:"price",placeholder:"Enter price",value:this.state.price,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(v.a,null,"limit"),m.a.createElement(E.a,{required:!0,type:"number",name:"limit",placeholder:"Enter limit",value:this.state.limit,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(v.a,null,"Thumnail Image"),m.a.createElement(v.a,null,"Image"),m.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler})),m.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},m.a.createElement(v.a,null,"Description"),m.a.createElement("br",null),m.a.createElement(P.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),m.a.createElement(u.a,null,m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(s.Component));t.default=O},810:function(e,t,a){},817:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(92);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,c=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){o=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw l}}}}}}]);
//# sourceMappingURL=174.db225399.chunk.js.map