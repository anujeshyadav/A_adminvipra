(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[138],{2019:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),c=t(16),m=t(15),s=t(0),r=t.n(s),o=t(1093),i=t(1094),d=t(1091),E=t(1092),u=t(1095),h=t(173),v=t(1098),b=(t(827),t(56)),f=t(117),p=t(831),N=t.n(p),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;f.a.get("/admin/admin_getone_event/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(i.a,{sm:"12"},r.a.createElement("div",null,r.a.createElement(d.a,{listTag:"div"},r.a.createElement(E.a,{href:"/analyticsDashboard",tag:"a"},"Home"),r.a.createElement(E.a,{href:"/app/event/bookEvent/bookEventList",tag:"a"},"Book Event List"),r.a.createElement(E.a,{active:!0},"View Book Event"))))),r.a.createElement(u.a,{className:"overflow-hidden app-ecommerce-details"},r.a.createElement(o.a,{className:"m-2"},r.a.createElement(i.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Book Event")),r.a.createElement(i.a,null,r.a.createElement(b.b,{render:function(e){var a=e.history;return r.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/event/bookEvent/bookEventList")}},"Back")}}))),r.a.createElement(v.a,{className:"pb-0"},r.a.createElement(o.a,{className:"mb-5 mt-2"},r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Enent Name"),r.a.createElement("h6",{className:""}," ",null===(e=this.state.data.event_list)||void 0===e?void 0:e.event_name)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Price OnLine"),r.a.createElement("h6",{className:""}," ",this.state.data.price_online)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Price OffLine"),r.a.createElement("h6",{className:""}," ",this.state.data.price_offline)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Description"),r.a.createElement("h6",{className:""}," ",N()(this.state.data.desc))))))))}}]),t}(r.a.Component);a.default=k},827:function(e,a,t){},832:function(e,a){}}]);
//# sourceMappingURL=138.56a76271.chunk.js.map