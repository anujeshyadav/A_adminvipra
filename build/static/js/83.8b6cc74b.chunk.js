(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[83],{2081:function(e,a,t){"use strict";t.r(a);var l=t(14),c=t(15),n=t(17),m=t(16),s=t(1),o=t.n(s),r=t(1098),i=t(1099),d=t(1096),u=t(1097),b=t(1100),h=t(174),g=t(1103),p=t(867),E=t(28),f=(t(832),t(800),t(799),t(841)),v=t.n(f),N=t(118),y=(t(42),function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).state={data:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/admin/viewonePdctCategory/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(r.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(d.a,{listTag:"div"},o.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(u.a,{href:"/app/productmanager/category/categoryList",tag:"a"},"Product Category List"),o.a.createElement(u.a,{active:!0}," Product Category"))))),o.a.createElement(b.a,{className:"overflow-hidden app-ecommerce-details"},o.a.createElement(r.a,{className:"m-2"},o.a.createElement(i.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Product Category")),o.a.createElement(i.a,null,o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/productmanager/category/categoryList")}},"Back"))),o.a.createElement(g.a,{className:"pb-0"},o.a.createElement(r.a,{className:"ml-4"},o.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},o.a.createElement("h4",null,"Name"),o.a.createElement("h6",{className:""}," ",this.state.data.name)),o.a.createElement(i.a,{className:"pl-0",sm:"12",lg:"6"},o.a.createElement("h4",null,"Image"),o.a.createElement(p.a,{className:"d-sm-flex d-block"},o.a.createElement(p.a,{className:"mt-md-1 mt-0",left:!0},null===(e=this.state.data)||void 0===e||null===(a=e.img)||void 0===a?void 0:a.map((function(e){return o.a.createElement("img",{className:"border-black m-0",src:e,alt:"user avatar",height:"100"})}))),o.a.createElement(p.a,{body:!0})))),o.a.createElement(r.a,{className:"ml-4"},o.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},o.a.createElement("h4",null,"Description"),o.a.createElement("h6",{className:""}," ",v()(this.state.data.desc))),o.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},o.a.createElement("h4",null,"Status"),o.a.createElement("h6",{className:""}," ",this.state.data.status)))))))}}]),t}(o.a.Component));a.default=y},800:function(e,a,t){},832:function(e,a,t){},842:function(e,a){},867:function(e,a,t){"use strict";var l=t(6),c=t(10),n=t(1),m=t.n(n),s=t(2),o=t.n(s),r=t(5),i=t.n(r),d=t(4),u=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],b={body:o.a.bool,bottom:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,heading:o.a.bool,left:o.a.bool,list:o.a.bool,middle:o.a.bool,object:o.a.bool,right:o.a.bool,tag:d.tagPropType,top:o.a.bool},h=function(e){var a,t=e.body,n=e.bottom,s=e.className,o=e.cssModule,r=e.heading,b=e.left,h=e.list,g=e.middle,p=e.object,E=e.right,f=e.tag,v=e.top,N=Object(c.a)(e,u);a=r?"h4":N.href?"a":N.src||p?"img":h?"ul":"div";var y=f||a,j=Object(d.mapToCssModules)(i()(s,{"media-body":t,"media-heading":r,"media-left":b,"media-right":E,"media-top":v,"media-bottom":n,"media-middle":g,"media-object":p,"media-list":h,media:!t&&!r&&!b&&!E&&!v&&!n&&!g&&!p&&!h}),o);return m.a.createElement(y,Object(l.a)({},N,{className:j}))};h.propTypes=b,a.a=h}}]);
//# sourceMappingURL=83.8b6cc74b.chunk.js.map