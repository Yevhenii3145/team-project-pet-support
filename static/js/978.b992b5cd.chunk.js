"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[978],{6136:function(e,t,a){a.d(t,{Z:function(){return d}});var n="modal-add-notice_modal__p4+M2",o="modal-add-notice_modal__section__qVEZ-",i=a(2791),c=a(4164),s=a(3329),_=document.querySelector("#modal-root"),d=function(e){var t=e.onClose,a=e.children;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]);return a=i.cloneElement(a,{close:t}),(0,c.createPortal)((0,s.jsx)("div",{className:n,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,s.jsx)("div",{className:o,children:a})}),_)}},1949:function(e,t,a){a.r(t),a.d(t,{default:function(){return he}});var n=a(9439),o=a(1087),i=a(7689),c=a(9434),s="notices-category-list_card_list__4IPGY",_=a(5861),d=a(4687),l=a.n(d),r=a(2791),m=a(4851),u=a(5264),p=a(1328),g="notice-category-item_card_item__uexVC",h="notice-category-item_card_img__58IEw",x="notice-category-item_card_info__AzLhT",f="notice-category-item_card_info_title__LWqOq",b="notice-category-item_card_info_list__2gR+T",j="notice-category-item_card_info_item__QoL9B",y="notice-category-item_card_info_item_text__MNBZM",N="notice-category-item_card_info_item_link__D6AhA",v="notice-category-item_add_to_favorite_btn__T0Qwy",Z="notice-category-item_add_to_favorite_btn_active__INR4C",A="notice-category-item_edit_notice_btn__AFruO",w="notice-category-item_box_btn__x86Ci",C="notice-category-item_learn_more_btn__dO2pq",k="notice-category-item_delete_btn__P2w14",S="notice-category-item_card_text__sHq7p",B=a(3220),L=a(6132),P=a(1212),F="modal_modal__bONGM",T="modal_modal__section__Fz897",E=a(4164),I=a(3329),D=document.querySelector("#modal-root"),z=function(e){var t=e.onClose,a=e.children;(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]);return(0,E.createPortal)((0,I.jsx)("div",{className:F,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,I.jsx)("div",{className:T,children:a})}),D)},O={button__primary_not_main:"modal-notice_button__primary_not_main__pcm6D",button__primary_main:"modal-notice_button__primary_main__h9uiK",button__secondary:"modal-notice_button__secondary__F3afp",button__secondary_active:"modal-notice_button__secondary_active__0fwvg",button__learn:"modal-notice_button__learn__lQ06I",modal_notice__button_favorite:"modal-notice_modal_notice__button_favorite__cdzVY",modal_notice__content:"modal-notice_modal_notice__content__kkOz+",modal_notice__close:"modal-notice_modal_notice__close__+4iyR",modal_notice__image_content:"modal-notice_modal_notice__image_content__4Plvt",modal_notice__image:"modal-notice_modal_notice__image__PT9wD",modal_notice__category:"modal-notice_modal_notice__category__G+poE",modal_notice__title:"modal-notice_modal_notice__title__YzmOb",modal_notice__list:"modal-notice_modal_notice__list__ndXYX",modal_notice__item:"modal-notice_modal_notice__item__oieYh",modal_notice__item_title:"modal-notice_modal_notice__item_title__8hbiX",modal_notice__item_description:"modal-notice_modal_notice__item_description__FOGaP",modal_notice__item_description_link:"modal-notice_modal_notice__item_description_link__7ZLaz",modal_notice__item_comment:"modal-notice_modal_notice__item_comment__Dj+qE",modal_notice__button_container:"modal-notice_modal_notice__button_container__wHtlH",modal_notice__button:"modal-notice_modal_notice__button__zP4Dy",modal_notice__content_info:"modal-notice_modal_notice__content_info__8IKqs"},q=a(9313),R=function(e){var t=e.onClose,a=e.onAddDelete,n=e.categoryNotice,i=e.favorite,s=e.deleteNotice,_=e.info,d=(0,c.v9)((function(e){return e.auth.user.userId})),l=(0,P.Z)(),r=(0,c.I0)(),m=_._id,u=_.image,p=_.title,g=_.breed,h=_.location,x=_.birthday,f=_.price,b=_.category,j=_.owner,y=_.comments,N=_.name,v=_.sex;return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)("div",{className:O.modal_notice__content,children:[(0,I.jsxs)("div",{className:O.modal_notice__content_info,children:[(0,I.jsx)("div",{className:O.modal_notice__close,onClick:t,children:(0,I.jsx)(B.Z,{id:"icon-close"})}),(0,I.jsxs)("div",{className:O.modal_notice__image_content,children:[(0,I.jsx)("img",{className:O.modal_notice__image,src:u,alt:N}),(0,I.jsx)("span",{className:O.modal_notice__category,children:n(b)})]}),(0,I.jsxs)("div",{children:[(0,I.jsx)("h3",{className:O.modal_notice__title,children:p}),(0,I.jsxs)("ul",{className:O.modal_notice__list,children:[(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"Name:"}),(0,I.jsx)("p",{className:O.modal_notice__item_description,children:N})]}),(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"Birthday:"}),(0,I.jsx)("p",{className:O.modal_notice__item_description,children:function(e){var t=new Date(e);return"".concat(t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,".").concat(t.getDate()<10?"0".concat(t.getDate()):t.getDate(),".").concat(t.getFullYear())}(x)})]}),(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"Breed:"}),(0,I.jsx)("p",{className:O.modal_notice__item_description,children:g})]}),(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"Location:"}),(0,I.jsx)("p",{className:O.modal_notice__item_description,children:h})]}),(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"The sex:"}),(0,I.jsx)("p",{className:O.modal_notice__item_description,children:v})]}),(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"Email:"}),(0,I.jsx)("a",{href:"mailto:".concat(j.email),className:"".concat(O.modal_notice__item_description," ").concat(O.modal_notice__item_description_link),type:"button",children:j.email})]}),(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"Phone:"}),(0,I.jsx)("a",{href:"tel:+".concat(j.phone),className:"".concat(O.modal_notice__item_description," ").concat(O.modal_notice__item_description_link),type:"button",children:"+".concat(j.phone)})]}),"sell"===b&&(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"Price:"}),(0,I.jsx)("p",{className:O.modal_notice__item_description,children:f})]}),(0,I.jsxs)("li",{className:O.modal_notice__item,children:[(0,I.jsx)("h4",{className:O.modal_notice__item_title,children:"Owner:"}),(0,I.jsxs)(o.rU,{to:j._id===d?"/user":"/user/".concat(j._id),onClick:function(){j._id!==d?(document.body.style.overflow="visible",r((0,q.B)(j._id),(0,q.H)(j._id))):document.body.style.overflow="visible"},className:"".concat(O.modal_notice__item_description," ").concat(O.modal_notice__item_description_link),children:[j.name," \u2199"]})]})]})]})]}),(0,I.jsxs)("article",{className:O.modal_notice__item_comment,children:[(0,I.jsx)("span",{className:O.modal_notice__item_title,children:"Comments:"}),y]}),(0,I.jsxs)("div",{className:O.modal_notice__button_container,children:[(0,I.jsx)("a",{href:"tel:+".concat(j.phone),className:"".concat(O.button__primary_main," ").concat(O.modal_notice__button," ").concat(O.modal_notice__button_contact),type:"button",children:"Contact"}),(0,I.jsxs)("button",{onClick:function(){a(m)},className:"".concat(O.button__primary_not_main," ").concat(O.modal_notice__button),type:"button",children:[i?"Remove":"Add to",(0,I.jsx)(B.Z,{className:O.modal_notice__button_favorite,id:"icon-heart-favorite"})]}),l&&d===j._id&&(0,I.jsxs)("button",{type:"button",className:"".concat(O.button__primary_not_main," ").concat(O.modal_notice__button),onClick:function(){return s(j._id)},children:["Delete",(0,I.jsx)(B.Z,{id:"icon-delete-notice"})]})]})]})})},M=a(6136),Y=a(9108),U=a(5299),W=(a(7621),a(9557)),Q=a(9773),H=function(e){var t=e.close,a=e.notice,o=e.noticeCategory,i=(0,r.useState)(!0),s=(0,n.Z)(i,2),_=s[0],d=s[1],l=(0,r.useState)(a.category),m=(0,n.Z)(l,2),p=m[0],g=m[1],h=(0,r.useState)(a.name),x=(0,n.Z)(h,2),f=x[0],b=x[1],j=(0,r.useState)(a.title),y=(0,n.Z)(j,2),N=y[0],v=y[1],Z=(0,r.useState)(a.birthday),A=(0,n.Z)(Z,2),w=A[0],C=A[1],k=(0,r.useState)(a.breed),S=(0,n.Z)(k,2),P=S[0],F=S[1],T=(0,r.useState)(a.sex),E=(0,n.Z)(T,2),D=E[0],z=E[1],O=(0,r.useState)(a.location),q=(0,n.Z)(O,2),R=q[0],M=q[1],H=(0,r.useState)(Number.parseFloat(a.price)),X=(0,n.Z)(H,2),G=X[0],V=X[1],K=(0,r.useState)((function(){return a.price.split(" ")[1]})),J=(0,n.Z)(K,2),$=J[0],ee=J[1],te=(0,r.useState)(a.image),ae=(0,n.Z)(te,2),ne=ae[0],oe=ae[1],ie=(0,r.useState)(a.comments),ce=(0,n.Z)(ie,2),se=ce[0],_e=ce[1],de=(0,c.I0)();var le=function(e){switch(e.currentTarget.name){case"title":v(e.currentTarget.value);break;case"name":b(e.currentTarget.value);break;case"breed":F(e.currentTarget.value);break;case"location":M(e.currentTarget.value);break;case"price":V(e.currentTarget.value);break;case"comments":_e(e.currentTarget.value);break;default:return}},re=function(){return d(!_)},me=function(e){g(e.target.value)},ue=function(e){z(e.target.value)};return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)("div",{className:Y.Z.modalAdds_page,children:[(0,I.jsx)("div",{className:Y.Z.modal_notice__close,onClick:t,children:(0,I.jsx)(B.Z,{id:"icon-close-add-notice"})}),(0,I.jsx)("h3",{className:Y.Z.modalAdds_page__tittle,children:"Add pet"}),_&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("p",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["Type of category ",(0,I.jsx)("span",{className:Y.Z.star,children:"*"})]}),(0,I.jsxs)("div",{className:Y.Z.buttonCont,children:[(0,I.jsx)("input",{id:"lost-found",required:!0,name:"petCategory",value:"lost-found",type:"radio",checked:"lost-found"===p,className:Y.Z.radioButtonInput,onChange:me}),(0,I.jsx)("label",{htmlFor:"lost-found",className:Y.Z.buttonCategory,children:"lost/found"}),(0,I.jsx)("input",{id:"for-free",required:!0,name:"petCategory",value:"for-free",type:"radio",checked:"for-free"===p,className:Y.Z.radioButtonInput,onChange:me}),(0,I.jsx)("label",{htmlFor:"for-free",className:Y.Z.buttonCategory,children:"in good hands"}),(0,I.jsx)("input",{id:"sell",required:!0,name:"petCategory",value:"sell",type:"radio",checked:"sell"===p,className:Y.Z.radioButtonInput,onChange:me}),(0,I.jsx)("label",{htmlFor:"sell",className:Y.Z.buttonCategory,children:"sell"})]}),(0,I.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===p)return U.Report.warning("Warning!","Please, selected type of category!","Okay");if(""===w)return U.Report.warning("Warning!","Please, selected date of birth!","Okay");var t=e.currentTarget.elements,a=t.title,n=t.name,o=t.date,i=t.breed;return v(a.value),b(n.value),C(o.value),F(i.value),re()},children:[(0,I.jsxs)("label",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["Tittle of ad ",(0,I.jsx)("span",{className:Y.Z.star,children:"*"})]}),(0,I.jsx)("input",{className:Y.Z.modalAdds_page__input,name:"title",placeholder:"Type name",type:"text",minLength:"2",maxLength:"48",required:!0,value:N,onChange:le}),(0,I.jsxs)("label",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["Name pet ",(0,I.jsx)("span",{className:Y.Z.star,children:"*"})]}),(0,I.jsx)("input",{className:Y.Z.modalAdds_page__input,name:"name",placeholder:"Type name pet",type:"text",minLength:"2",maxLength:"16",required:!0,value:f,onChange:le}),(0,I.jsxs)("label",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["Data of birth ",(0,I.jsx)("span",{className:Y.Z.star,children:"*"})]}),(0,I.jsx)(W.Z,{className:Y.Z.modalAdds_page__input,options:{dateFormat:"m.d.Y",maxDate:new Date},name:"date",type:"text",placeholder:"Type date of birth",value:w,required:!0}),(0,I.jsxs)("label",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["Breed ",(0,I.jsx)("span",{className:Y.Z.star,children:"*"})]}),(0,I.jsx)("input",{className:Y.Z.modalAdds_page__input,type:"text",name:"breed",placeholder:"Type breed",minLength:"2",maxLength:"24",required:!0,value:P,onChange:le}),(0,I.jsxs)("div",{className:Y.Z.addPet__button,children:[(0,I.jsx)("button",{className:"".concat(Y.Z.button__primary_main," ").concat(Y.Z.modalAdds_page__button),type:"submit",children:"Next"}),(0,I.jsx)("span",{className:"".concat(Y.Z.button__primary_not_main," ").concat(Y.Z.modalAdds_page__button),onClick:t,children:"Cancel"})]})]})]}),!_&&(0,I.jsxs)("form",{id:"book-add-form",encType:"multipart/form-data",onSubmit:function(e){if(e.preventDefault(),""===D)return U.Report.warning("Warning!","Please, selected type of sex!","Okay");if(!Q.find((function(e){return"".concat(e.city,", ").concat(e.admin_name)===R})))return console.log("not"),U.Report.warning("Warning!","Please, selected location from the list!","Okay");var n=e.currentTarget,i=n.elements.image,c=new FormData;return c.append("category",p),c.append("title",N),c.append("name",f),c.append("birthday",w),c.append("breed",P),c.append("sex",D),c.append("location",R),c.append("price","".concat(G," ").concat($)),i.files.length>0&&c.append("image",i.files[0]),c.append("comments",se),de((0,L.aQ)({id:a._id,data:c})).then((function(){return de((0,L.wz)(o))})),v(""),g(""),F(""),C(""),b(""),M(""),V(""),z(""),ee("UAH"),oe(null),n.reset(),t()},children:[(0,I.jsxs)("section",{children:[(0,I.jsxs)("h2",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["The sex",(0,I.jsx)("span",{className:Y.Z.star,children:"*"}),":"]}),(0,I.jsxs)("div",{className:Y.Z.radioButtonSection,children:[(0,I.jsx)("input",{required:!0,className:Y.Z.radioButtonInputSex,type:"radio",name:"sex",value:D,defaultChecked:!0}),(0,I.jsx)("input",{id:"male",required:!0,className:Y.Z.radioButtonInputSex,type:"radio",name:"sex",value:"male",onChange:ue}),(0,I.jsxs)("label",{htmlFor:"male",className:Y.Z.radioButton,children:[(0,I.jsx)(B.Z,{id:"icon-male"}),"Male"]}),(0,I.jsx)("input",{id:"female",required:!0,className:Y.Z.radioButtonInputSex,type:"radio",name:"sex",value:"female",onChange:ue}),(0,I.jsxs)("label",{htmlFor:"female",className:Y.Z.radioButton,children:[(0,I.jsx)(B.Z,{id:"icon-female"}),"Female"]})]})]}),(0,I.jsxs)("label",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["Location",(0,I.jsx)("span",{className:Y.Z.star,children:"*"}),":"]}),(0,I.jsx)("input",{className:Y.Z.modalAdds_page__input,list:"region",name:"location",value:R,placeholder:"City, region",onChange:le}),(0,I.jsx)("datalist",{id:"region",children:Q.map((function(e){return(0,I.jsx)("option",{value:"".concat(e.city,", ").concat(e.admin_name)},"".concat(e.city,".").concat(e.lat))}))}),"sell"===p&&(0,I.jsxs)("label",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["Price",(0,I.jsx)("span",{className:Y.Z.star,children:"*"}),":",(0,I.jsxs)("div",{className:Y.Z.modalAdds_page__input_price,children:[(0,I.jsxs)("select",{name:"currency",value:$,className:Y.Z.modalAdds_page__input_select,onChange:function(e){ee(e.target.value)},children:[(0,I.jsx)("option",{value:"UAH",children:"UAH"}),(0,I.jsx)("option",{value:"USD",children:"USD"}),(0,I.jsx)("option",{value:"EUR",children:"EUR"})]}),(0,I.jsx)("input",{className:Y.Z.modalAdds_page__input_select,type:"number",name:"price",min:"1",required:!0,placeholder:"Type price",value:G,onChange:le})]})]}),(0,I.jsxs)("div",{className:Y.Z.add__pet__container,children:[(0,I.jsxs)("p",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_page_box),children:["Load the pet\u2019s image ",(0,I.jsx)("span",{className:Y.Z.star,children:"*"})]}),(0,I.jsx)("input",{className:Y.Z.addspet__imgInput,type:"file",name:"image",accept:"image/png, image/jpeg, image/jpg, image/webp",id:"img",onChange:function(e){var t=new FileReader,a=e.target.files[0];if((null===a||void 0===a?void 0:a.size)>5242880)return u.Notify.warning("File is too big, please download max 5 mb!",{timeout:6e3}),void oe(null);t.onloadend=function(){oe(t.result)},t.readAsDataURL(a)}}),(0,I.jsx)("label",{className:Y.Z.addspet__imgLabel,htmlFor:"img",children:ne&&(0,I.jsx)("div",{className:Y.Z.addspetPhoto__container,children:(0,I.jsx)("img",{src:ne,alt:"pet",className:Y.Z.addspet__photo})})}),(0,I.jsxs)("label",{className:"".concat(Y.Z.modalAdds_page__label," ").concat(Y.Z.modalAdds_commit_box),children:["Comments ",(0,I.jsx)("span",{className:Y.Z.star,children:"*"})]}),(0,I.jsx)("textarea",{className:Y.Z.modalAdds_commit,type:"text",name:"comments",defaultValue:se,placeholder:"Type comment",required:!0,minLength:"8",maxLength:"120",onChange:le}),(0,I.jsxs)("div",{className:Y.Z.addPet__button,children:[(0,I.jsx)("button",{className:"".concat(Y.Z.button__primary_main," ").concat(Y.Z.modalAdds_page__button),type:"submit",children:"Done"}),(0,I.jsx)("span",{className:"".concat(Y.Z.button__primary_not_main," ").concat(Y.Z.modalAdds_page__button),onClick:re,children:"Back"})]})]})]})]})})},X=function(e){var t=e.notice,a=e.value,i=t._id,s=t.image,d=t.title,F=t.breed,T=t.location,E=t.birthday,D=t.price,O=t.category,Y=t.owner,U=(0,r.useState)(!1),W=(0,n.Z)(U,2),Q=W[0],X=W[1],G=(0,r.useState)(!1),V=(0,n.Z)(G,2),K=V[0],J=V[1],$=(0,c.I0)(),ee=(0,P.Z)(),te=(0,c.v9)((function(e){return e.auth.user.userId})),ae=(0,c.v9)((function(e){return e.notices.favoriteNotices})),ne=(0,r.useState)(!1),oe=(0,n.Z)(ne,2),ie=oe[0],ce=oe[1];(0,r.useEffect)((function(){ae.length>0&&ae.map((function(e){return e._id===i&&ce(!0)}))}),[ae,$,i]);var se=function(){var e=(0,_.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee){e.next=5;break}return u.Notify.failure("You need authorization",{distance:"100px",opacity:"0.8",useIcon:!1,fontSize:"18px",borderRadius:"20px",showOnlyTheLastOne:!0}),e.abrupt("return");case 5:if(ie){e.next=12;break}return e.next=8,$((0,L.x8)(t));case 8:return ce(!0),e.abrupt("return");case 12:if(!ie){e.next=18;break}return e.next=15,$((0,L.QR)(t));case 15:return ce(!1),e.next=18,$((0,L.wz)(a));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function _e(){X(!1),document.body.style.overflow="visible"}var de=function(e){p.Confirm.show("","Are you sure you want to delete notis?","Yes","No",(function(){$((0,L.Zt)(e))}),(function(){}),{messageFontSize:"20px",borderRadius:"8px",cssAnimationStyle:"zoom",okButtonColor:"#ffffff",okButtonBackground:"#eebb9c",cancelButtonColor:"#ffffff",cancelButtonBackground:"#F59256"})},le=(0,m.Z)(new Date,new Date(E)),re=function(e){return"for-free"===e&&(e="in good hands"),"lost-found"===e&&(e="lost/found"),e};return(0,I.jsxs)(I.Fragment,{children:[Q&&(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(z,{onClose:_e,children:(0,I.jsx)(R,{onClose:_e,onAddDelete:se,categoryNotice:re,favorite:ie,deleteNotice:de,info:t})})}),K&&(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(M.Z,{onClose:function(){document.body.style.overflow="visible",J(!1)},children:(0,I.jsx)(H,{notice:t,noticeCategory:a})})}),(0,I.jsxs)("li",{className:g,children:[(0,I.jsx)("img",{src:s,alt:"pet",className:h}),(0,I.jsxs)("div",{className:x,children:[(0,I.jsx)("h3",{className:f,children:d}),(0,I.jsxs)("ul",{className:b,children:[(0,I.jsxs)("li",{className:j,children:[(0,I.jsx)("p",{className:y,children:"Breed:"}),(0,I.jsx)("p",{children:F||"no information"})]}),(0,I.jsxs)("li",{className:j,children:[(0,I.jsx)("p",{className:y,children:"Place:"}),(0,I.jsx)("p",{children:T.split(", ")[0]})]}),(0,I.jsxs)("li",{className:j,children:[(0,I.jsx)("p",{className:y,children:"Age:"}),(0,I.jsx)("p",{children:le})]}),"sell"===O&&(0,I.jsxs)("li",{className:j,children:[(0,I.jsx)("p",{className:y,children:"Price:"}),(0,I.jsx)("p",{children:D})]}),(0,I.jsxs)("li",{className:j,children:[(0,I.jsx)("p",{className:y,children:"Owner:"}),(0,I.jsxs)(o.rU,{to:Y._id===te?"/user":"/user/".concat(Y._id),onClick:function(){Y._id!==te&&$((0,q.B)(Y._id),(0,q.H)(Y._id))},className:N,"data-action":"owner",children:[Y.name," \u2199"]})]})]}),(0,I.jsxs)("div",{className:w,children:[(0,I.jsx)("button",{type:"button",className:C,onClick:function(){document.body.style.overflow="hidden",X(!0)},children:"Learn more"}),ee&&te===Y._id&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("button",{type:"button",className:k,onClick:function(){return de(i)},children:["Delete",(0,I.jsx)(B.Z,{id:"icon-delete-notice"})]}),(0,I.jsx)("button",{type:"button",className:A,onClick:function(){J(!0),document.body.style.overflow="hidden"},children:(0,I.jsx)(B.Z,{id:"icon-edit"})})]}),(0,I.jsx)("button",{onClick:function(){return se(i)},type:"button",className:ie?"".concat(v," ").concat(Z):v,children:(0,I.jsx)(B.Z,{id:"icon-heart"})})]}),(0,I.jsx)("p",{className:S,children:re(O)})]})]})]})},G=function(e){var t=e.notices;return{loading:t.loading,error:t.error}},V=function(e){return e.notices.items},K=function(e){return e.notices.totalNotices},J=function(e){var t=e.data,a=(0,c.v9)(V);return(0,I.jsx)("ul",{className:s,children:a.map((function(e){return(0,I.jsx)(X,{notice:e,value:t},e._id)}))})},$=a(6107);var ee=a.p+"static/media/cat_for_empty_favorite_list.56f5c52ca27d63a15669c79edd286ff5.svg",te="empty-favorite-list_emptyPetsList_wrap__lhB6y",ae="empty-favorite-list_emptyPetsList_box__XHrTU",ne="empty-favorite-list_emptyPetsList_img__c6kJ7",oe="empty-favorite-list_emptyPetsList_text__l4DBR";function ie(){return(0,I.jsx)("div",{className:te,children:(0,I.jsxs)("div",{className:ae,children:[(0,I.jsx)("img",{className:ne,src:ee,alt:"cat"}),(0,I.jsxs)("p",{className:oe,children:["Add your favorite animals ",(0,I.jsx)("br",{})," so as not to lose"]})]})})}var ce=a(8277),se="empty-own-list_emptyPetsList_wrap__22VQV",_e="empty-own-list_emptyPetsList_box__SnSAh",de="empty-own-list_emptyPetsList_img__vjtFC",le="empty-own-list_emptyPetsList_text__rc19C";function re(){return(0,I.jsx)("div",{className:se,children:(0,I.jsxs)("div",{className:_e,children:[(0,I.jsx)("img",{className:de,src:ce.Z,alt:"cat"}),(0,I.jsxs)("p",{className:le,children:["You haven`t added any ",(0,I.jsx)("br",{})," animals to your list yet"]})]})})}var me="load-more_buttonLoad__5ocen",ue=a(5667),pe=function(e){var t=e.scroll,a=e.changePage;return(0,I.jsxs)("div",{onClick:function(){return t()},children:[(0,I.jsx)("button",{type:"button",className:me,onClick:function(){return a((function(e){return e+1}))},children:"Load more..."}),(0,I.jsx)(ue.W_,{className:"element",name:"scroll-to-element"})]})},ge=a(1081),he=function(){var e=(0,c.I0)(),t=(0,i.UO)().categoryName,a=(0,c.v9)(V),s=(0,c.v9)(K),_=(0,c.v9)(G),d=_.loading,l=_.error,m=(0,P.Z)(),p=(0,r.useState)(1),g=(0,n.Z)(p,2),h=g[0],x=g[1],f=(0,r.useState)(1),b=(0,n.Z)(f,2),j=b[0],y=b[1],N=(0,r.useState)("sell"),v=(0,n.Z)(N,2),Z=v[0],A=v[1],w=(0,o.lr)(),C=(0,n.Z)(w,2),k=C[0],S=C[1],B=k.get("keyword"),F=(0,r.useMemo)((function(){return{categoryName:(Z===t||(A(t),x(1)),Z),page:h,limit:8}}),[t,h,8,Z]);(0,r.useEffect)((function(){e((0,ge.x)([t,h,j]))}),[t,h,j,e]),(0,r.useEffect)((function(){ue.zW.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),ue.zW.scrollEvent.register("end",(function(){console.log("end",arguments)}))}),[]),(0,r.useEffect)((function(){return function(){ue.zW.scrollEvent.remove("begin"),ue.zW.scrollEvent.remove("end")}})),(0,r.useEffect)((function(){m&&e((0,L.EE)())}),[m,e,a]),(0,r.useEffect)((function(){B||(S({}),e((0,L.wz)(F)))}),[e,F,S,B]);return(0,I.jsxs)(I.Fragment,{children:[d&&(0,I.jsx)($.Z,{}),"own"===t&&0===a.length&&(0,I.jsx)(re,{}),"favorite"===t&&0===a.length&&(0,I.jsx)(ie,{}),a.length>0&&(0,I.jsx)(J,{data:F}),s/8>(B?j:h)?(0,I.jsx)(pe,{scroll:function(){ue.OK.scrollTo("scroll-to-element",{duration:2e3,delay:100,smooth:"easeInOutQuint",offset:-150})},changePage:B?y:x}):null,l&&u.Notify.failure("Oops, something went wrong",{distance:"100px",opacity:"0.8",useIcon:!1,fontSize:"18px",borderRadius:"20px",showOnlyTheLastOne:!0})]})}},1212:function(e,t,a){var n=a(9434),o=a(6628);t.Z=function(){return(0,n.v9)(o.bg)}},9108:function(e,t){t.Z={button__primary_not_main:"modal-add-pet-pages_button__primary_not_main__hyv5g",button__primary_main:"modal-add-pet-pages_button__primary_main__n3Mnw",button__secondary:"modal-add-pet-pages_button__secondary__0pcn2",button__secondary_active:"modal-add-pet-pages_button__secondary_active__khrwr",button__learn:"modal-add-pet-pages_button__learn__kxNox",modalAdds_page:"modal-add-pet-pages_modalAdds_page__yta44",modalAdds_page__tittle:"modal-add-pet-pages_modalAdds_page__tittle__xl3nz",modalAdds_page__input:"modal-add-pet-pages_modalAdds_page__input__3vXAv",modalAdds_page__label:"modal-add-pet-pages_modalAdds_page__label__M0taL",modalAdds_page__button:"modal-add-pet-pages_modalAdds_page__button__8zICY",addspet__imgInput:"modal-add-pet-pages_addspet__imgInput__i5+YA",addspet__imgLabel:"modal-add-pet-pages_addspet__imgLabel__FX0-F",modalAdds_page__input_price:"modal-add-pet-pages_modalAdds_page__input_price__lJB5f",modalAdds_page__input_select:"modal-add-pet-pages_modalAdds_page__input_select__Xy3DM",add__pet__container:"modal-add-pet-pages_add__pet__container__zMQvu",addspetPhoto__container:"modal-add-pet-pages_addspetPhoto__container__Q8mdp",addspet__photo:"modal-add-pet-pages_addspet__photo__nZSGt",addspet__imgLabel_select:"modal-add-pet-pages_addspet__imgLabel_select__BJpk1",modalAdds_page__field:"modal-add-pet-pages_modalAdds_page__field__5S4fQ",modal_notice__close:"modal-add-pet-pages_modal_notice__close__cNr7P",modalAdds_page_box:"modal-add-pet-pages_modalAdds_page_box__zThjz",modalAdds_page__photoBox:"modal-add-pet-pages_modalAdds_page__photoBox__dRzxu",modalAdds_commit_box:"modal-add-pet-pages_modalAdds_commit_box__19S+Y",modalAdds_commit:"modal-add-pet-pages_modalAdds_commit__9S-aO",addPet__button:"modal-add-pet-pages_addPet__button__KGGsi",modalAdds_descriptions:"modal-add-pet-pages_modalAdds_descriptions__ZlwtW",star:"modal-add-pet-pages_star__Cet6B",divNoticesCategoriesNav:"modal-add-pet-pages_divNoticesCategoriesNav__M12hd",radioButtonSection:"modal-add-pet-pages_radioButtonSection__5M5bX",buttonCont:"modal-add-pet-pages_buttonCont__RFc-k",buttonCategory:"modal-add-pet-pages_buttonCategory__wZ7p8",radioButtonInput:"modal-add-pet-pages_radioButtonInput__TASKn",radioButton:"modal-add-pet-pages_radioButton__fFSpY",radioButtonInputSex:"modal-add-pet-pages_radioButtonInputSex__hYE1h"}}}]);
//# sourceMappingURL=978.b992b5cd.chunk.js.map