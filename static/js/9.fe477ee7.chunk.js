(this["webpackJsonpcv-speed-hiring"]=this["webpackJsonpcv-speed-hiring"]||[]).push([[9],{100:function(e,a,t){},125:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(0),i=t.n(r),l=t(103),c=t(113),o=t(114),m=t(126),s=t(54),d=t(79),u=t(76),p=t(70),g=t(102),h=(t(100),{email:"",senha:"",nome:"",descricao:"",linkSite:"",avatar:""}),E=function(e){var a=e.imageFinal,t=e.componentImage,n=Object(g.a)({initialValues:h});return i.a.createElement(s.a,{id:"form-page"},i.a.createElement("h2",null,"Cadastrar-se"),i.a.createElement(d.a,{onSubmit:function(e){e.preventDefault(),n.values.avatar=a,console.log(n.values)}},i.a.createElement(c.a,null,i.a.createElement(o.a,{for:"email"},"Email:"),i.a.createElement(u.a,Object.assign({type:"text",name:"email",id:"email",placeholder:"Digite seu email..."},n.getFieldProps("email")))),i.a.createElement(c.a,null,i.a.createElement(o.a,{for:"senha"},"Senha:"),i.a.createElement(u.a,Object.assign({type:"password",name:"senha",id:"senha",placeholder:"Digite uma senha..."},n.getFieldProps("senha")))),i.a.createElement(c.a,null,i.a.createElement(o.a,{for:"nome"},"Nome da Empresa:"),i.a.createElement(u.a,Object.assign({type:"text",name:"nome",id:"nome",placeholder:"Digite o nome da empresa..."},n.getFieldProps("nome")))),i.a.createElement(c.a,null,i.a.createElement(o.a,{for:"descricao"},"Descri\xe7\xe3o:"),i.a.createElement(u.a,Object.assign({type:"textarea",name:"descricao",id:"descricao",placeholder:"Fa\xe7a uma descri\xe7\xe3o da empresa..."},n.getFieldProps("descricao")))),i.a.createElement(c.a,null,i.a.createElement(o.a,{for:"linkSite"},"Site da Empresa:"),i.a.createElement(u.a,Object.assign({type:"text",name:"linkSite",id:"linkSite",placeholder:"Link do site da empresa..."},n.getFieldProps("linkSite")))),t,i.a.createElement("input",{type:"hidden",value:a}),i.a.createElement(p.a,null,"Cadastrar")))};a.default=function(){var e=Object(r.useState)(""),a=Object(n.a)(e,2),t=a[0],s=a[1],d=Object(r.useState)(""),u=Object(n.a)(d,2),p=u[0],g=u[1],h=Object(r.useState)({x:0,y:0}),f=Object(n.a)(h,2),b=f[0],v=f[1],O=Object(r.useState)(1),j=Object(n.a)(O,2),S=j[0],y=j[1],w=function(e,a){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"anonymous";return new Promise((function(t,n){var r=new Image;r.crossOrigin=a,r.onload=function(){return t(r)},r.onerror=n,r.setAttribute("src",e)}))}(e).then((function(e){var t=document.createElement("canvas");t.setAttribute("width",a.width),t.setAttribute("height",a.height),t.getContext("2d").drawImage(e,a.x,a.y,a.width,a.height,0,0,a.width,a.height),s(t.toDataURL("image/png"))}))},C=Object(r.useCallback)((function(e,a){w(p,a)}),[p]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{imageFinal:t,componentImage:i.a.createElement(c.a,null,i.a.createElement(o.a,{for:"avatar"},"Logo da Empresa:"),i.a.createElement(m.a,{type:"file",name:"avatar",id:"avatar",label:"Selecione uma imagem",onChange:function(e){"undefined"!==typeof e.target.files[0]?g(URL.createObjectURL(e.target.files[0])):(s(""),g(""))}}),i.a.createElement("div",{id:"crop-image"},p&&i.a.createElement("div",{id:"form-cadastro"},i.a.createElement("div",{id:"image_cropper"},i.a.createElement(l.a,{image:p,crop:b,zoom:S,aspect:4/3,onCropChange:v,onCropComplete:C,onZoomChange:y})))))}))}}}]);
//# sourceMappingURL=9.fe477ee7.chunk.js.map