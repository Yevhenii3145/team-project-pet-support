"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[868],{1086:function(e,t,a){a.d(t,{X:function(){return c}});var n=a(8277),s="empty-pets-list_emptyPetsList_box__olodG",o="empty-pets-list_emptyPetsList_img__7Y3IF",i="empty-pets-list_emptyPetsList_text__wlcVE",r=a(3329);function c(e){var t=e.text;return(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)("img",{className:o,src:n.Z,alt:"cat"}),(0,r.jsx)("p",{className:i,children:t})]})}},3855:function(e,t,a){a.r(t),a.d(t,{default:function(){return le}});var n=a(2791),s=a(5830),o=a(9439),i=a(3220),r=a(9434),c=a(4632),l=a(3263),d=a(5264),u=(a(7621),a(9557)),m=a(8966),_=a(3329),p="https://backend-team-project-pet-support.onrender.com";function x(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.auth.user})),a=(0,r.v9)((function(e){return e.auth.token})),l=(0,n.useState)(""),x=(0,o.Z)(l,2),h=x[0],f=x[1],b=(0,n.useState)(""),g=(0,o.Z)(b,2),v=g[0],j=g[1],Z=(0,n.useState)(""),N=(0,o.Z)(Z,2),y=N[0],D=N[1],k=(0,n.useState)(""),F=(0,o.Z)(k,2),w=F[0],P=F[1],C=(0,n.useState)(""),S=(0,o.Z)(C,2),L=S[0],I=S[1],T=(0,n.useState)(""),E=(0,o.Z)(T,2),A=E[0],M=E[1],B=new Date,R=function(e){var t=new Date(e);return"".concat(t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,".").concat(t.getDate()<10?"0".concat(t.getDate()):t.getDate(),".").concat(t.getFullYear())};(0,n.useEffect)((function(){f(!0),void 0===a?(j(t.name),D(t.email),P(void 0!==t.birthday?R(t.birthday):"00.00.0000"),I(t.phone),M(t.city),f(!1)):fetch("".concat(p,"/api/users/current"),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).then((function(e){j(e.name),D(e.email),P(void 0!==e.birthday?R(e.birthday):"00.00.0000"),I(e.phone),M(e.city),f(!1)})).catch((function(e){console.log(e),f(!1)}))}),[t,a]);var U=function(e){switch(e.currentTarget.name){case"name":j(e.currentTarget.value);break;case"email":D(e.currentTarget.value);break;case"phone":I(e.currentTarget.value);break;case"city":M(e.currentTarget.value);break;default:return}},q=(0,n.useState)(""),z=(0,o.Z)(q,2),Y=z[0],V=z[1],W=function(e){if(Y===e)return V("");V(e)},G=function(e){return Y===e?(0,_.jsx)(i.Z,{id:"icon-done"}):(0,_.jsx)(i.Z,{id:"icon-edit-active"})};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:s.Z.userDataForm_box,children:h?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:s.Z.loader__content,children:(0,_.jsx)("div",{className:s.Z.loader_oval,children:(0,_.jsx)(m.iT,{height:60,width:60,color:"#F59256",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#F59256",strokeWidth:2,strokeWidthSecondary:2})})})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("form",{onSubmit:function(t){t.preventDefault();var a=t.currentTarget.elements.name;if(a.disabled)return a.value?e(c.ZP.updateUser({name:a.value})):d.Notify.failure("Required!",{timeout:5e3})},children:(0,_.jsxs)("div",{className:s.Z.field_box,children:[(0,_.jsx)("label",{className:s.Z.userDataForm_label,children:"Name:"}),Y&&"name"===Y?(0,_.jsx)("input",{onChange:U,type:"name",name:"name",value:v,className:s.Z.userDataForm_field_active}):(0,_.jsx)("input",{onChange:U,type:"name",name:"name",value:v,disabled:!0,className:s.Z.userDataForm_field}),(0,_.jsx)("button",{className:s.Z.iconEdit_btn,onClick:function(){return W("name")},type:"submit",children:Y?G("name"):(0,_.jsx)(i.Z,{id:"icon-edit"})})]})}),(0,_.jsx)("form",{onSubmit:function(t){t.preventDefault();var a=t.currentTarget.elements.email;if(a.disabled)return a.value?/^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i.test(a.value)&&a.value.length<36?e(c.ZP.updateUser({email:a.value})):d.Notify.failure("Invalid email address!",{timeout:5e3}):d.Notify.failure("Required!",{timeout:5e3})},children:(0,_.jsxs)("div",{className:s.Z.field_box,children:[(0,_.jsx)("label",{className:s.Z.userDataForm_label,children:"Email:"}),Y&&"email"===Y?(0,_.jsx)("input",{onChange:U,type:"email",name:"email",value:y,className:s.Z.userDataForm_field_active}):(0,_.jsx)("input",{onChange:U,type:"email",name:"email",value:y,disabled:!0,className:s.Z.userDataForm_field}),(0,_.jsx)("button",{className:s.Z.iconEdit_btn,onClick:function(){return W("email")},children:Y?G("email"):(0,_.jsx)(i.Z,{id:"icon-edit"})})]})}),(0,_.jsx)("form",{onSubmit:function(t){t.preventDefault();var a=t.currentTarget.elements.birthday;if(a.disabled)return a.value?e(c.ZP.updateUser({birthday:a.value})):d.Notify.failure("Required!",{timeout:5e3})},children:(0,_.jsxs)("div",{className:s.Z.field_box,children:[(0,_.jsx)("label",{className:s.Z.userDataForm_label,children:"Birthday:"}),Y&&"birthday"===Y?(0,_.jsx)(u.Z,{options:{dateFormat:"m.d.Y",maxDate:"".concat(R(B))},onChange:function(e){var t=(0,o.Z)(e,1)[0];P(R(t))},type:"text",name:"birthday",value:w,className:s.Z.userDataForm_field_active}):(0,_.jsx)(u.Z,{options:{dateFormat:"m.d.Y",maxDate:"".concat(R(B))},onChange:function(e){var t=(0,o.Z)(e,1)[0];P(R(t))},type:"text",name:"birthday",value:w,disabled:!0,className:s.Z.userDataForm_field}),(0,_.jsx)("button",{className:s.Z.iconEdit_btn,onClick:function(){return W("birthday")},children:Y?G("birthday"):(0,_.jsx)(i.Z,{id:"icon-edit"})})]})}),(0,_.jsx)("form",{onSubmit:function(t){t.preventDefault();var a=t.currentTarget.elements.phone;if(a.disabled)return a.value?12!==a.value.length?d.Notify.failure("Is not correct format, must 380xxxxxxxxx!",{timeout:5e3}):/^3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/.test(a.value)?e(c.ZP.updateUser({phone:a.value})):d.Notify.failure("Is not correct format, must 380xxxxxxxxx!",{timeout:5e3}):d.Notify.failure("Required!",{timeout:5e3})},children:(0,_.jsxs)("div",{className:s.Z.field_box,children:[(0,_.jsx)("label",{className:s.Z.userDataForm_label,children:"Phone:"}),Y&&"phone"===Y?(0,_.jsx)("input",{onChange:U,type:"tel",name:"phone",value:L,className:s.Z.userDataForm_field_active}):(0,_.jsx)("input",{onChange:U,type:"tel",name:"phone",value:"+".concat(L),disabled:!0,className:s.Z.userDataForm_field}),(0,_.jsx)("button",{className:s.Z.iconEdit_btn,onClick:function(){return W("phone")},type:"submit",children:Y?G("phone"):(0,_.jsx)(i.Z,{id:"icon-edit"})})]})}),(0,_.jsx)("form",{onSubmit:function(t){t.preventDefault();var a=t.currentTarget.elements.city;if(a.disabled)return a.value?/^[aA-zZ]/.test(a.value)?e(c.ZP.updateUser({city:a.value})):d.Notify.failure("Is not correct format, must only letters!",{timeout:5e3}):d.Notify.failure("Required!",{timeout:5e3})},children:(0,_.jsxs)("div",{className:s.Z.field_box,children:[(0,_.jsx)("label",{className:s.Z.userDataForm_label,children:"City:"}),Y&&"city"===Y?(0,_.jsx)("input",{onChange:U,type:"text",name:"city",value:A,className:s.Z.userDataForm_field_active}):(0,_.jsx)("input",{onChange:U,type:"text",name:"city",value:A,disabled:!0,className:s.Z.userDataForm_field}),(0,_.jsx)("button",{className:s.Z.iconEdit_btn,onClick:function(){return W("city")},children:Y?G("city"):(0,_.jsx)(i.Z,{id:"icon-edit"})})]})})]})})})}l.Z.defaults.baseURL="".concat(p,"/api");function h(){var e=(0,r.v9)((function(e){return e.auth.user})),t=((0,r.v9)((function(e){return e.auth.token})),(0,r.I0)());return(0,_.jsxs)("div",{className:s.Z.userItem_container,children:[(0,_.jsxs)("div",{className:s.Z.userItem_box_yourPhoto,children:[(0,_.jsx)("img",{className:s.Z.userItem__yourPhoto,src:e.avatar?e.avatar:"https://dummyimage.com/150x150/FDF7F2.gif&text=Add+your+photo!",alt:""}),(0,_.jsxs)("div",{className:s.Z.userItem_box_btnPhoto,children:[(0,_.jsx)("input",{className:s.Z.userItem_input_edit_photo,type:"file",name:"file",accept:"image/png, image/jpeg, image/jpg, image/webp",id:"file",onChange:function(e){var a=new FileReader,n=e.target.files[0];(null===n||void 0===n?void 0:n.size)>5242880?d.Notify.warning("File is too big, please download max 5 mb!",{timeout:5e3}):(a.onloadend=function(){t(c.ZP.updateUserAvatar(n))},a.readAsDataURL(n))}}),(0,_.jsxs)("label",{htmlFor:"file",className:s.Z.userItem_edit_photo,children:[(0,_.jsx)(i.Z,{id:"icon-edit-avatar"}),"Edit photo"]})]})]}),(0,_.jsx)(x,{})]})}function f(){return(0,_.jsx)(h,{})}l.Z.defaults.baseURL="".concat("https://backend-team-project-pet-support.onrender.com","/api");var b="logout_logout_button__+D532",g="logout_logout_box__J-pf9",v="logout_logout_text__M3+5u";function j(){var e=(0,r.I0)();return(0,_.jsx)("div",{className:g,children:(0,_.jsxs)("button",{className:b,onClick:function(){e(c.ZP.logout())},children:[(0,_.jsx)(i.Z,{id:"icon-logout"}),(0,_.jsx)("p",{className:v,children:"Logout"})]})})}var Z=a(3205),N=a(543),y=a(6107),D=a(5861),k=a(4687),F=a.n(k),w="modal-add-pet-pages_button__primary_not_main__ypj+S",P="modal-add-pet-pages_button__primary_main__6UTLB",C="modal-add-pet-pages_modalAdds_page__kFD-P",S="modal-add-pet-pages_modalAdds_page__close__-OWMm",L="modal-add-pet-pages_modalAdds_page__tittle__4VovM",I="modal-add-pet-pages_modalAdds_page__input__tw8e9",T="modal-add-pet-pages_modalAdds_page__label__XtbYI",E="modal-add-pet-pages_modalAdds_page__button__7tqZx",A="modal-add-pet-pages_addspet__imgInput__4dH5p",M="modal-add-pet-pages_addspet__imgLabel__qsG+d",B="modal-add-pet-pages_add__pet__container__xobGG",R="modal-add-pet-pages_addspetPhoto__container__ddf3R",U="modal-add-pet-pages_addspet__photo__D4mvs",q="modal-add-pet-pages_modalAdds_page__field__aCNSS",z="modal-add-pet-pages_modalAdds_page_box__K2BZF",Y="modal-add-pet-pages_modalAdds_commit_box__W6XU2",V="modal-add-pet-pages_modalAdds_commit__DKD3W",W="modal-add-pet-pages_addPet__button__RnKuE",G=a(5299);l.Z.defaults.baseURL="".concat("https://backend-team-project-pet-support.onrender.com","/api");var H=function(e){var t=e.close,a=e.pets,s=e._id,c=(0,n.useState)(!0),m=(0,o.Z)(c,2),p=m[0],x=m[1],h=(0,r.v9)((function(e){return e.user.loading})),f=a.find((function(e){return e._id===s})),b=f.birthday,g=new Date(b),v=g.getMonth()+1,j=g.getDate(),Z=g.getFullYear(),N="".concat(v,".").concat(j,".").concat(Z),k=(0,n.useState)(f.name),U=(0,o.Z)(k,2),H=U[0],O=U[1],X=(0,n.useState)(N),K=(0,o.Z)(X,2),J=K[0],Q=K[1],$=(0,n.useState)(f.breed),ee=(0,o.Z)($,2),te=ee[0],ae=ee[1],ne=(0,n.useState)(f.image),se=(0,o.Z)(ne,2),oe=se[0],ie=se[1],re=(0,n.useState)(f.comments),ce=(0,o.Z)(re,2),le=ce[0],de=ce[1],ue=(0,n.useState)(!1),me=(0,o.Z)(ue,2),_e=me[0],pe=me[1],xe=function(e){switch(e.currentTarget.name){case"name":O(e.currentTarget.value);break;case"date":Q(e.currentTarget.value);break;case"breed":ae(e.currentTarget.value);break;default:return}},he=function(){return x(!p)},fe=new Date,be=function(e){var t=new Date(e);return"".concat(t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,".").concat(t.getDate()<10?"0".concat(t.getDate()):t.getDate(),".").concat(t.getFullYear())},ge=function(){var e=(0,D.Z)(F().mark((function e(a){var n,o,i,r,c;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=a.currentTarget,o=n.elements,i=o.image,r=o.comments,de(r.value),!(i.files.length>0)){e.next=22;break}return(c=new FormData).append("name",H),c.append("birthday",J),c.append("breed",te),c.append("comments",le),c.append("image",i.files[0]),e.prev=11,e.next=14,l.Z.put("/users/".concat(s),c);case 14:pe(!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),pe(!1);case 20:e.next=32;break;case 22:return e.prev=22,e.next=25,l.Z.put("/users/".concat(s),{name:H,birthday:J,breed:te,comments:le,image:oe});case 25:console.log("imageURL",oe),pe(!1),e.next=32;break;case 29:e.prev=29,e.t1=e.catch(22),pe(!1);case 32:return de(""),ae(""),Q(""),O(""),ie(null),n.reset(),e.abrupt("return",t());case 39:case"end":return e.stop()}}),e,null,[[11,17],[22,29]])})));return function(t){return e.apply(this,arguments)}}();return(0,_.jsxs)(_.Fragment,{children:[h&&(0,_.jsx)(y.Z,{}),(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("div",{className:S,onClick:t,children:(0,_.jsx)(i.Z,{id:"icon-close"})}),(0,_.jsx)("h3",{className:L,children:"Edite pet"}),p&&(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.name,n=t.date,s=t.breed;return O(a.value),Q(n.value),ae(s.value),new Date(J)>=new Date(be)?G.Report.info("Pet Info","Please choose a date no later than today.","Okay"):he()},children:[(0,_.jsx)("label",{className:"".concat(T," ").concat(z),children:"Name pet"}),(0,_.jsx)("input",{className:I,name:"name",placeholder:"Type name pet",type:"text",value:H,onChange:xe}),(0,_.jsx)("label",{className:"".concat(T," ").concat(z),children:"Date of birth"}),(0,_.jsx)(u.Z,{className:I,name:"date",type:"text",placeholder:"Type date of birth",value:J,options:{dateFormat:"m.d.Y",maxDate:"".concat(be(fe))},onChange:function(e){var t=(0,o.Z)(e,1)[0];Q(be(t))}}),(0,_.jsx)("label",{className:"".concat(T," ").concat(z),children:"Breed"}),(0,_.jsx)("input",{className:I,type:"text",name:"breed",placeholder:"Type breed",value:te,onChange:xe}),(0,_.jsxs)("div",{className:W,children:[(0,_.jsx)("button",{className:"".concat(P," ").concat(E),type:"submit",children:"Next"}),(0,_.jsx)("span",{className:"".concat(w," ").concat(E),onClick:t,children:"Cancel"})]})]}),!p&&(0,_.jsx)("form",{action:"",id:"book-add-form",encType:"multipart/form-data",onSubmit:ge,children:(0,_.jsxs)("div",{className:B,children:[(0,_.jsx)("p",{className:q,children:"Add photo and some comments"}),(0,_.jsx)("input",{className:A,type:"file",name:"image",accept:"image/png, image/jpeg, image/jpg, image/webp",id:"img",title:"is required",multiple:!0,onChange:function(e){var t=new FileReader,a=e.target.files[0];if((null===a||void 0===a?void 0:a.size)>5242880)return d.Notify.warning("File is too big, please download max 5 mb!",{timeout:6e3}),void ie(null);t.onloadend=function(){ie(t.result)},t.readAsDataURL(a)}}),(0,_.jsx)("label",{className:M,htmlFor:"img"}),(0,_.jsx)("div",{className:R,children:(0,_.jsx)("img",{src:oe,alt:"pet"})}),(0,_.jsx)("label",{className:"".concat(T," ").concat(Y),children:"Comments"}),(0,_.jsx)("textarea",{className:V,type:"text",name:"comments",placeholder:"Type comments",defaultValue:le,minLength:8}),(0,_.jsxs)("div",{className:W,children:[(0,_.jsx)("button",{className:"".concat(P," ").concat(E),type:"submit",disabled:_e,children:"Done"}),(0,_.jsx)("span",{className:"".concat(w," ").concat(E),onClick:he,children:"Back"})]})]})})]})]})},O="modaladdspet_modal__-styr",X="modaladdspet_modal__section__Su0Hj",K=a(4164),J=document.querySelector("#modal-root"),Q=function(e){var t=e.onClose,a=e.children;(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]);return a=n.cloneElement(a,{close:t}),(0,K.createPortal)((0,_.jsx)("div",{className:O,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,_.jsx)("div",{className:X,children:a})}),J)},$=a(1328);function ee(){var e=(0,r.I0)(),t=(0,n.useState)(!1),a=(0,o.Z)(t,2),s=a[0],c=a[1],l=(0,n.useState)(!1),d=(0,o.Z)(l,2),u=d[0],m=d[1],p=(0,n.useState)(!1),x=(0,o.Z)(p,2),h=x[0],f=x[1],b=(0,r.v9)((function(e){return e.user.loading}));(0,n.useEffect)((function(){e(N.Z.getUserPet())}),[e]);var g=(0,r.v9)((function(e){return e.user.pets})),v=function(){c(!1),document.body.style.overflow="visible",e(N.Z.getUserPet())},j=function(){c(!0),document.body.style.overflow="hidden"},D=u?"icon-delete":"icon-deletepet",k=h?"icon-edit_active":"icon-edit",F=Array.isArray(g)&&g.map((function(t){var a,n=t.name,o=t.birthday,r=t.breed,c=t.image,l=t.comments,d=t._id;return(0,_.jsxs)("li",{className:Z.Z.petsList_box,children:[b&&(0,_.jsx)(y.Z,{}),(0,_.jsx)("img",{className:Z.Z.petsList_photo,src:c,alt:""}),(0,_.jsxs)("div",{className:Z.Z.petsList_text_box,children:[(0,_.jsxs)("p",{className:Z.Z.petsList_field,children:[(0,_.jsx)("span",{className:Z.Z.labelPets,children:"Name:"}),n]}),(0,_.jsxs)("p",{className:Z.Z.petsList_field,children:[(0,_.jsx)("span",{className:Z.Z.labelPets,children:"Date of birth:"}),(a=o,a.slice(0,10).split("-").reverse().join("."))]}),(0,_.jsxs)("p",{className:Z.Z.petsList_field,children:[(0,_.jsx)("span",{className:Z.Z.labelPets,children:"Breed:"}),r," "]}),(0,_.jsxs)("p",{className:Z.Z.petsList_field,children:[(0,_.jsx)("span",{className:Z.Z.labelPets,children:"Comments:"}),l," "]}),(0,_.jsx)("button",{className:Z.Z.petsList_button,onClick:function(){return function(t){$.Confirm.show("","Are you sure you want to delete your petcard?","Yes","No",(function(){e(N.Z.deletePet(t)).then((function(){e(N.Z.getUserPet())}))}),(function(){}),{messageFontSize:"20px",borderRadius:"8px",cssAnimationStyle:"zoom",okButtonColor:"#ffffff",okButtonBackground:"#eebb9c",cancelButtonColor:"#ffffff",cancelButtonBackground:"#F59256"})}(d)},type:"button",onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:(0,_.jsx)(i.Z,{className:Z.Z.icon_delete,id:D})}),(0,_.jsx)("button",{className:Z.Z.iconEdit_btn,onClick:j,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:(0,_.jsx)(i.Z,{id:k})}),(0,_.jsx)("div",{children:s&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(Q,{onClose:v,children:(0,_.jsx)(H,{_id:d,pets:g})})})})]})]},d)}));return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("ol",{className:Z.Z.petList_container,children:F})})}var te=a(1086),ae=function(e){var t=e.close,a=(0,n.useState)(!0),s=(0,o.Z)(a,2),c=s[0],l=s[1],m=(0,n.useState)(""),p=(0,o.Z)(m,2),x=p[0],h=p[1],f=(0,n.useState)(""),b=(0,o.Z)(f,2),g=b[0],v=b[1],j=(0,n.useState)(""),Z=(0,o.Z)(j,2),D=Z[0],k=Z[1],F=(0,n.useState)(null),H=(0,o.Z)(F,2),O=H[0],X=H[1],K=(0,r.v9)((function(e){return e.user.loading})),J=(0,r.I0)(),Q=function(e){switch(e.currentTarget.name){case"name":h(e.currentTarget.value);break;case"breed":k(e.currentTarget.value);break;default:return}},$=function(){return l(!c)},ee=new Date,te=function(e){var t=new Date(e);return"".concat(t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,".").concat(t.getDate()<10?"0".concat(t.getDate()):t.getDate(),".").concat(t.getFullYear())};return(0,_.jsxs)(_.Fragment,{children:[K&&(0,_.jsx)(y.Z,{}),(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("div",{className:S,onClick:t,children:(0,_.jsx)(i.Z,{id:"icon-close"})}),(0,_.jsx)("h3",{className:L,children:"Add pet"}),c&&(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.name,n=t.date,s=t.breed;return h(a.value),v(n.value),k(s.value),$()},children:[(0,_.jsx)("label",{className:"".concat(T," ").concat(z),children:"Name pet"}),(0,_.jsx)("input",{className:I,name:"name",placeholder:"Type name pet",type:"text",required:!0,value:x,onChange:Q}),(0,_.jsx)("label",{className:"".concat(T," ").concat(z),children:"Date of birth"}),(0,_.jsx)(u.Z,{className:I,name:"date",type:"text",placeholder:"Type date of birth",required:!0,value:g,options:{dateFormat:"m.d.Y",maxDate:"".concat(te(ee))},onChange:function(e){var t=(0,o.Z)(e,1)[0];v(te(t))}}),(0,_.jsx)("label",{className:"".concat(T," ").concat(z),children:"Breed"}),(0,_.jsx)("input",{className:I,type:"text",name:"breed",placeholder:"Type breed",required:!0,value:D,onChange:Q}),(0,_.jsxs)("div",{className:W,children:[(0,_.jsx)("button",{className:"".concat(P," ").concat(E),type:"submit",children:"Next"}),(0,_.jsx)("span",{className:"".concat(w," ").concat(E),onClick:t,children:"Cancel"})]})]}),!c&&(0,_.jsx)("form",{action:"",id:"book-add-form",encType:"multipart/form-data",onSubmit:function(e){e.preventDefault();var a=e.currentTarget,n=a.elements,s=n.image,o=n.comments,i=new FormData;return i.append("name",x),i.append("birthday",g),i.append("breed",D),i.append("comments",o.value),i.append("image",s.files[0]),k(""),v(""),h(""),X(null),J(N.Z.addPet(i)),a.reset(),t()},children:(0,_.jsxs)("div",{className:B,children:[(0,_.jsx)("p",{className:q,children:"Add photo and some comments"}),(0,_.jsx)("input",{className:A,type:"file",name:"image",accept:"image/png, image/jpeg, image/jpg, image/webp",id:"img",required:!0,title:"is required",multiple:!0,onChange:function(e){var t=new FileReader,a=e.target.files[0];if((null===a||void 0===a?void 0:a.size)>5242880)return d.Notify.warning("File is too big, please download max 5 mb!",{timeout:6e3}),void X(null);t.onloadend=function(){X(t.result)},t.readAsDataURL(a)}}),(0,_.jsx)("label",{className:M,htmlFor:"img",children:O&&(0,_.jsx)("div",{className:R,children:(0,_.jsx)("img",{src:O,alt:"pet",className:U})})}),(0,_.jsx)("label",{className:"".concat(T," ").concat(Y),children:"Comments"}),(0,_.jsx)("textarea",{className:V,type:"text",name:"comments",placeholder:"Type comments",minLength:8,required:!0}),(0,_.jsxs)("div",{className:W,children:[(0,_.jsx)("button",{className:"".concat(P," ").concat(E),type:"submit",onClick:function(){O||G.Report.warning("Pet Warning","Please add a photo.","Okay")},children:"Done"}),(0,_.jsx)("span",{className:"".concat(w," ").concat(E),onClick:$,children:"Back"})]})]})})]})]})},ne=a(2986);var se=function(){var e=(0,n.useState)(!1),t=(0,o.Z)(e,2),a=t[0],s=t[1],c=(0,r.I0)();(0,n.useEffect)((function(){c(N.Z.getUserPet())}),[c]);var l=(0,r.v9)((function(e){return e.user.pets})),d=(0,r.v9)((function(e){return e.user.loading}));return(0,_.jsxs)(_.Fragment,{children:[d&&(0,_.jsx)(y.Z,{}),(0,_.jsxs)("div",{className:ne.Z.petsData_title_box,children:[(0,_.jsx)("h2",{className:ne.Z.petsData_title,children:"My pets:"}),(0,_.jsx)("div",{className:ne.Z.addPetModal_buttonBox,children:(0,_.jsxs)("button",{className:ne.Z.addPetModal_button,type:"button",onClick:function(){s(!0),document.body.style.overflow="hidden"},children:["Add pet"," ",(0,_.jsx)(i.Z,{className:ne.Z.iconAddPet,id:"icon-add-pet"})]})})]}),(0,_.jsxs)("div",{className:ne.Z.petsData__container,children:[a&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(Q,{onClose:function(){s(!1),document.body.style.overflow="visible"},children:(0,_.jsx)(ae,{})})}),(0,_.jsx)("div",{className:ne.Z.overflow,children:0===l.length?(0,_.jsx)(te.X,{text:"You haven`t added any animals to your list yet"}):(0,_.jsx)(ee,{})})]})]})},oe={delete_account_button:"delete-account_delete_account_button__hYzSV",delete_account_box:"delete-account_delete_account_box__Knbbz",delete_icon:"delete-account_delete_icon__si2ko"};function ie(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.auth.token}));return(0,_.jsx)("div",{className:oe.delete_account_box,children:(0,_.jsxs)("button",{className:oe.delete_account_button,onClick:function(){$.Confirm.show("","Are you sure you want to delete your account?","Yes","No",(function(){e(c.ZP.deleteAccount(t)).then((function(){window.location.replace("http://localhost:3000/register")}))}),(function(){}),{messageFontSize:"20px",borderRadius:"8px",cssAnimationStyle:"zoom",okButtonColor:"#ffffff",okButtonBackground:"#eebb9c",cancelButtonColor:"#ffffff",cancelButtonBackground:"#F59256"})},children:[(0,_.jsx)("p",{className:oe.delete_account_text,children:"Delete account"}),(0,_.jsx)(i.Z,{id:"icon-delete"})]})})}l.Z.defaults.baseURL="".concat("https://backend-team-project-pet-support.onrender.com","/api");var re=a(5973),ce=a(5578);var le=function(){return(0,_.jsx)("div",{className:ce.Z.userPage_container,children:(0,_.jsxs)("div",{className:re.Z.container,children:[(0,_.jsxs)("div",{className:ce.Z.userPage_section,children:[(0,_.jsx)("h2",{className:ce.Z.userPage_title,children:"My information:"}),(0,_.jsxs)("div",{className:ce.Z.userData_box,children:[(0,_.jsx)(f,{}),(0,_.jsxs)("div",{className:ce.Z.userData_box_btn,children:[(0,_.jsx)(j,{}),(0,_.jsx)(ie,{})]})]})]}),(0,_.jsx)("div",{className:ce.Z.petsData_section,children:(0,_.jsx)(se,{})})]})})}},2986:function(e,t){t.Z={petsData_section:"pets-data_petsData_section__UieBz",petsData_title_box:"pets-data_petsData_title_box__8HxHW",petsData_title:"pets-data_petsData_title__Qq4C7",addPetModal_buttonBox:"pets-data_addPetModal_buttonBox__HEU95",addPetModal_button:"pets-data_addPetModal_button__qP0Zy",petModal_button:"pets-data_petModal_button__sBu2c",petModal_box_btn:"pets-data_petModal_box_btn__IdO3N",petsData__container:"pets-data_petsData__container__2G1w-",overflow:"pets-data_overflow__Rtx7o"}},3205:function(e,t){t.Z={petsList_box:"pets-list_petsList_box__bIXg+",petsList_photo:"pets-list_petsList_photo__JyEpp",petsList_text_box:"pets-list_petsList_text_box__Vg0+q",labelPets:"pets-list_labelPets__xVmkl",petsList_field:"pets-list_petsList_field__+BhHE",petsList_button:"pets-list_petsList_button__QczPj",iconEdit_btn:"pets-list_iconEdit_btn__tEFOh",petList_container:"pets-list_petList_container__jrBD0",icon_edit:"pets-list_icon_edit__HNwQg"}},5830:function(e,t){t.Z={userItem_container:"user-data-item_userItem_container__neJio",userItem_box_yourPhoto:"user-data-item_userItem_box_yourPhoto__A6dWO",userItem_box_btnPhoto:"user-data-item_userItem_box_btnPhoto__e8bo1",userItem_button:"user-data-item_userItem_button__0Gg6V",userDataForm_box:"user-data-item_userDataForm_box__UwT0M",field_box:"user-data-item_field_box__4xcgt",userDataForm_field:"user-data-item_userDataForm_field__32mZT",userDataForm_field_active:"user-data-item_userDataForm_field_active__CXnHf",userDataForm_field_input:"user-data-item_userDataForm_field_input__1QaxO",iconEdit_btn:"user-data-item_iconEdit_btn__LP-z7",userDataForm_label:"user-data-item_userDataForm_label__oNaKJ",userItem_button_icon:"user-data-item_userItem_button_icon__rwvks",userItem_edit_photo:"user-data-item_userItem_edit_photo__55rGT",userItem_input_edit_photo:"user-data-item_userItem_input_edit_photo__LoxV3",userItem__yourPhoto:"user-data-item_userItem__yourPhoto__Xt9Av",iconEdit_active:"user-data-item_iconEdit_active__6fdvC",iconEdit:"user-data-item_iconEdit__qx3-w",iconEdit_done:"user-data-item_iconEdit_done__EvnCx",loader__content:"user-data-item_loader__content__SyicD",loader_oval:"user-data-item_loader_oval__YNlqW"}},5578:function(e,t){t.Z={userPage_container:"user-page_userPage_container__PYPVq",userPage_section:"user-page_userPage_section__+jTMM",petsData_section:"user-page_petsData_section__jEW1G",userPage_title:"user-page_userPage_title__bSasD",userData_box:"user-page_userData_box__sKupV",userData_box_btn:"user-page_userData_box_btn__ZDRDR"}}}]);
//# sourceMappingURL=868.9e357ab3.chunk.js.map