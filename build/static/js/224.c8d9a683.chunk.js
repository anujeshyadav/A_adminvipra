(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[224],{2102:function(e,t,a){"use strict";a.r(t);var n=a(52),o=a(14),r=a(15),i=a(17),c=a(16),s=a(1),l=a.n(s),d=a(1100),m=a(1098),u=a(1099),p=a(174),h=a(1103),g=a(804),f=a(803),E=(a(805),a(830)),b=a(829),v=a(812),C=a.n(v),w=(a(821),a(810),a(118)),S=a(28),k=(a(811),function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var o=new FormData;o.append("image",e),n.send(o),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},r.onEditorStateChange=function(e){console.log(e),r.setState({editorState:e,desc:C()(Object(E.convertToRaw)(e.getCurrentContent()))})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=r.props.match.params.id;w.a.post("/admin/edit_term_cond/".concat(t),r.state).then((function(e){console.log(e),r.props.history.push("/app/pagesetup/termscondition/termConditionList")})).catch((function(e){console.log(e.response)}))},r.state={desc:"",editorState:E.EditorState.createEmpty()},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;w.a.get("/admin/getone_term_cond/".concat(t)).then((function(t){console.log(t.data.data.desc),e.setState({desc:C()(Object(E.convertToRaw)(t.data.data.desc.getCurrentContent()))})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(m.a,{className:"m-2"},l.a.createElement(u.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Term And Condition")),l.a.createElement(u.a,null,l.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return S.a.push("/app/pagesetup/termscondition/termConditionList")}},"Back"))),l.a.createElement(h.a,null,l.a.createElement(g.a,{onSubmit:this.submitHandler},l.a.createElement(u.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},l.a.createElement(f.a,null," Description"),l.a.createElement("br",null),l.a.createElement(b.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",value:this.state.desc,onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}})),l.a.createElement(p.a,{color:"primary"}," Submit"))))}}]),a}(l.a.Component));t.default=k},810:function(e,t,a){}}]);
//# sourceMappingURL=224.c8d9a683.chunk.js.map