"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[682],{682:function(e,a,r){r.d(a,{Z:function(){return S}});var n=r(9439),s={button__primary_not_main:"auth-form_button__primary_not_main__8P-fg",button__primary_main:"auth-form_button__primary_main__MnTkE",button__secondary:"auth-form_button__secondary__KPh8C",button__secondary_active:"auth-form_button__secondary_active__NYsjk",button__learn:"auth-form_button__learn__aF1Az",form__input_container:"auth-form_form__input_container__aA0wO",form__label:"auth-form_form__label__kvu1f",form__input:"auth-form_form__input__PCyqB",form__input_phone:"auth-form_form__input_phone__3+Prq",form__input_number:"auth-form_form__input_number__ad5x5",form__input__password_show:"auth-form_form__input__password_show__m0iHa",error__mesage:"auth-form_error__mesage__60rvQ",form__login__input:"auth-form_form__login__input__goTNO",coordination__box:"auth-form_coordination__box__IaRI-",coordination__box_input:"auth-form_coordination__box_input__45QT5",coordination__box_title:"auth-form_coordination__box_title__Ub9P3",coordination__box_link:"auth-form_coordination__box_link__4TUNL",form__button:"auth-form_form__button__-DMkC",form__back_button:"auth-form_form__back_button__g2+wq",form__description:"auth-form_form__description__SN4bk",form__description_reset:"auth-form_form__description_reset__eFgSI",form__description_recover:"auth-form_form__description_recover__H2YZU",description__nav:"auth-form_description__nav__UAxeo",loading__modal:"auth-form_loading__modal__j9v7f"},o=r(9434),i=r(4632),t=r(3220),_="google-nav_googleBox__pLbWW",c="google-nav_googleBox__title__fq7Z0",l="google-nav_linkBox__Z0cDd",m="google-nav_googleDecs__GGIZo",d="google-nav_googleLink__A-F5w",u=r(2600),p=r(3329),h="https://backend-team-project-pet-support.onrender.com",f=function(){var e=(0,o.v9)((function(e){return e.menu.menuActive})),a=(0,o.I0)();return(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)("div",{className:c,children:(0,p.jsx)("p",{className:m,children:"Or sign in with"})}),(0,p.jsx)("div",{className:l,children:!0===e?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("a",{href:"".concat(h,"/api/auth/google"),className:d,onClick:function(){return a((0,u.M)(!e))},children:(0,p.jsx)(t.Z,{id:"icon-google"})}),(0,p.jsx)("a",{href:"".concat(h,"/api/auth/facebook"),className:d,onClick:function(){return a((0,u.M)(!e))},children:(0,p.jsx)(t.Z,{id:"facebook"})})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("a",{href:"".concat(h,"/api/auth/google"),className:d,children:(0,p.jsx)(t.Z,{id:"icon-google"})}),(0,p.jsx)("a",{href:"".concat(h,"/api/auth/facebook"),className:d,onClick:function(){return a((0,u.M)(!e))},children:(0,p.jsx)(t.Z,{id:"facebook"})})]})})]})},x=r(5705),j=r(6107),b=r(2797),g=r(2791),N=r(5264),w=r(1087),v=r(7689),y=r(9773),k=b.Ry().shape({email:b.Z_().email().min(10,"The minimum number of characters in the field is 10.").max(63,"The maximum number of characters in the field is 63."),password:b.Z_().required().min(7).max(32),passwordConfirm:b.Z_().required()});function Z(e){var a;return e?e.includes(" ")&&(a="Invalid password, must not include spaces"):a="Password is required",a}function C(e){var a;return e?/^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i.test(e)||(a='The e-mail address is not correct, there must be at least 2 characters before the "@" symbol, the hyphen cannot be at the beginning, and the e-mail cannot contain Latin letters'):a="E-mail address required",a}var P=b.Ry().shape({name:b.Z_().required("Name is required!"),region:b.Z_().required("Region is required!"),number:b.Z_().matches(/[0-9]/,"Field must contain only numbers, format +380xxxxxxxxx!").required("Phone number is required!").min(9,"Cannot be less than nine characters!").max(9,"Cannot be more than nine characters!")}),B=b.Ry().shape({email:b.Z_().email().required().min(10).max(63),password:b.Z_().required().min(7).max(32)}),S=function(){var e=(0,g.useState)(!0),a=(0,n.Z)(e,2),r=a[0],_=a[1],c=(0,g.useState)(!1),l=(0,n.Z)(c,2),m=l[0],d=l[1],u=(0,g.useState)(!1),h=(0,n.Z)(u,2),b=h[0],S=h[1],F=(0,g.useState)(!1),q=(0,n.Z)(F,2),L=q[0],A=q[1],O=(0,g.useState)(""),R=(0,n.Z)(O,2),T=R[0],V=R[1],E=(0,g.useState)(""),I=(0,n.Z)(E,2),U=I[0],z=I[1],J=(0,g.useState)(""),M=(0,n.Z)(J,2),D=M[0],G=M[1],Y=(0,v.TH)().pathname,H=(0,v.UO)().token;(0,g.useEffect)((function(){"/register"!==Y&&"/login"!==Y&&"/verify"!==Y&&"/reset-password"!==Y&&G(H)}),[Y,H]);var Q=function(e){switch(e.target.name){case"password":V(e.target.value);break;case"passwordConfirm":z(e.target.value);break;case"coordination":A(e.target.checked);break;default:return}},W=(0,o.v9)((function(e){return e.auth.loading})),K=(0,o.I0)(),$={email:"",password:"",passwordConfirm:"",name:"",region:"",number:""},X=function(e,a){if(r)return e.password!==e.passwordConfirm?N.Notify.failure("Your passwords must have the same value!",{timeout:6e3}):_(!1);if(!r){if(!y.find((function(a){return"".concat(a.city,", ").concat(a.admin_name)===e.region})))return console.log("not"),N.Notify.failure("Please select a region from the list!",{timeout:6e3});var n={email:e.email,password:e.password,name:e.name,city:e.region,phone:"380".concat(e.number)};return a.resetForm(),_(!0),console.log(n),K(i.ZP.registerNewUser(n))}},ee=function(){return d(!m)},ae=function(){return S(!b)};return(0,p.jsxs)(p.Fragment,{children:[W&&(0,p.jsx)(j.Z,{}),"/register"===Y&&(0,p.jsxs)(p.Fragment,{children:[r?(0,p.jsx)(x.J9,{validationSchema:k,initialValues:$,onSubmit:X,children:(0,p.jsxs)(x.l0,{className:s.form__container,autoComplete:"off",onChange:Q,children:[(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:"email",name:"email",validate:C,placeholder:" "}),(0,p.jsx)("label",{className:s.form__label,children:"Email"}),(0,p.jsx)(x.Bc,{name:"email",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:m?"text":"password",name:"password",validate:Z,placeholder:" "}),(0,p.jsx)("label",{className:s.form__label,children:"Password"}),T.length>=1&&(0,p.jsx)("span",{className:s.form__input__password_show,onClick:ee,children:m?(0,p.jsx)(t.Z,{id:"eye-blocked"}):(0,p.jsx)(t.Z,{id:"eye"})}),(0,p.jsx)(x.Bc,{name:"password",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:b?"text":"password",name:"passwordConfirm",placeholder:" ",validate:Z}),(0,p.jsx)("label",{className:s.form__label,children:"Confirm Password"}),U.length>=1&&(0,p.jsx)("span",{className:s.form__input__password_show,onClick:ae,children:b?(0,p.jsx)(t.Z,{id:"eye-blocked"}):(0,p.jsx)(t.Z,{id:"eye"})}),(0,p.jsx)(x.Bc,{name:"passwordConfirm",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsxs)("div",{className:s.coordination__box,children:[(0,p.jsx)(x.gN,{className:s.coordination__box_input,type:"checkbox",name:"coordination"}),(0,p.jsxs)("label",{className:s.coordination__box_title,children:["\u041f\u043e\u0433\u043e\u0434\u0436\u0443\u044e\u0441\u044c \u0437"," ",(0,p.jsx)("a",{href:"https://www.google.com.ua/",className:s.coordination__box_link,target:"_blank",rel:"noopener noreferrer",children:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u0430\u0439\u0442\u0443"})]})]}),(0,p.jsx)("button",{className:"".concat(s.button__primary_main," ").concat(s.form__button),type:"submit",disabled:!L,children:"Next"}),(0,p.jsx)(f,{})]})}):(0,p.jsx)(x.J9,{validationSchema:P,initialValues:$,onSubmit:X,autoComplete:"off",children:(0,p.jsxs)(x.l0,{className:s.form__container,children:[(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:"text",name:"name",placeholder:" ",required:!0}),(0,p.jsx)("label",{className:s.form__label,children:"Name"}),(0,p.jsx)(x.Bc,{name:"name",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,name:"region",list:"region",type:"text",placeholder:" "}),(0,p.jsx)("datalist",{id:"region",children:y.map((function(e){return(0,p.jsxs)("option",{children:[e.city,", ",e.admin_name]},"".concat(e.city,".").concat(e.lat))}))}),(0,p.jsx)("label",{className:s.form__label,children:"City, region"}),(0,p.jsx)(x.Bc,{name:"region",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:"".concat(s.form__input," ").concat(s.form__input_phone),type:"tel",name:"number",placeholder:" "}),(0,p.jsxs)("span",{className:s.form__input_number,children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"20",children:[(0,p.jsx)("rect",{width:"25",height:"10",fill:"#005BBB"}),(0,p.jsx)("rect",{width:"25",height:"10",y:"10",fill:"#FFD500"})]}),(0,p.jsx)("p",{children:"+380"})]}),(0,p.jsx)("label",{className:s.form__label,children:"Mobile phone"}),(0,p.jsx)(x.Bc,{name:"number",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsx)("span",{className:"".concat(s.button__primary_not_main," ").concat(s.form__back_button),onClick:function(){if(!r)return _(!0)},children:"\u140a Go back"}),(0,p.jsx)("button",{className:"".concat(s.button__primary_main," ").concat(s.form__button),type:"submit",children:"Register"}),(0,p.jsx)(f,{})]})}),(0,p.jsxs)("p",{className:s.form__description,children:["Already have an account?"," ",(0,p.jsx)(w.OL,{className:s.description__nav,to:"/login",children:"Login"})]})]}),"/login"===Y&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.J9,{validationSchema:B,initialValues:$,onSubmit:function(e,a){var r,n={email:e.email,password:e.password};return a.resetForm(),r=n,void K(i.ZP.login(r))},children:(0,p.jsxs)(x.l0,{className:s.form__container,autoComplete:"off",onChange:Q,children:[(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:"email",name:"email",placeholder:" "}),(0,p.jsx)("label",{className:s.form__label,children:"Email"}),(0,p.jsx)(x.Bc,{name:"email",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:"".concat(s.form__input," ").concat(s.form__login__input),type:m?"text":"password",name:"password",placeholder:" ",validate:Z}),(0,p.jsx)("label",{className:s.form__label,children:"Password"}),T.length>=1&&(0,p.jsx)("span",{className:s.form__input__password_show,onClick:ee,children:m?(0,p.jsx)(t.Z,{id:"eye-blocked"}):(0,p.jsx)(t.Z,{id:"eye"})}),(0,p.jsx)(x.Bc,{name:"password",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsx)("button",{className:"".concat(s.button__primary_main," ").concat(s.form__button),type:"submit",children:"Login"}),(0,p.jsxs)("p",{className:s.form__description,children:["Resend verification email? Click"," ",(0,p.jsx)(w.OL,{to:"/verify",className:s.description__nav,children:"here"})]}),(0,p.jsxs)("p",{className:"".concat(s.form__description," ").concat(s.form__description_reset),children:["Forgot your password? Click"," ",(0,p.jsx)(w.OL,{to:"/reset-password",className:s.description__nav,children:"here"})]}),(0,p.jsx)(f,{})]})}),(0,p.jsxs)("p",{className:s.form__description,children:["Don't have an account?"," ",(0,p.jsx)(w.OL,{to:"/register",className:s.description__nav,children:"Register"})]})]}),"/verify"===Y&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.J9,{validationSchema:B,initialValues:$,onSubmit:function(e,a){var r={email:e.email,password:e.password};return a.resetForm(),K(i.ZP.authVerify(r))},children:(0,p.jsxs)(x.l0,{className:s.form__container,autoComplete:"off",onChange:Q,children:[(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:"email",name:"email",placeholder:" "}),(0,p.jsx)("label",{className:s.form__label,children:"Email"}),(0,p.jsx)(x.Bc,{name:"email",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:"".concat(s.form__input," ").concat(s.form__login__input),type:"password",name:"password",placeholder:" ",validate:Z}),(0,p.jsx)("label",{className:s.form__label,children:"Password"}),T.length>=1&&(0,p.jsx)("span",{className:s.form__input__password_show,onClick:ee,children:m?(0,p.jsx)(t.Z,{id:"eye-blocked"}):(0,p.jsx)(t.Z,{id:"eye"})}),(0,p.jsx)(x.Bc,{name:"password",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsx)("button",{className:"".concat(s.button__primary_main," ").concat(s.form__button),type:"submit",children:"Verify"})]})}),(0,p.jsxs)("p",{className:s.form__description,children:["Go to back?"," ",(0,p.jsx)(w.OL,{to:"/login",className:s.description__nav,children:"Login"})]})]}),"/reset-password"===Y&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.J9,{initialValues:$,onSubmit:function(e,a){var r={email:e.email};return a.resetForm(),K(i.ZP.resetUserPassword(r))},children:(0,p.jsxs)(x.l0,{className:s.form__container,children:[(0,p.jsx)("p",{className:s.form__description_recover,children:"Please, enter your email to reset password:"}),(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:"email",name:"email",placeholder:" ",validate:C}),(0,p.jsx)("label",{className:s.form__label,children:"Email"}),(0,p.jsx)(x.Bc,{name:"email",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsx)("button",{className:"".concat(s.button__primary_main," ").concat(s.form__button),type:"submit",children:"Reset Password"})]})}),(0,p.jsxs)("p",{className:s.form__description,children:["Go to back?"," ",(0,p.jsx)(w.OL,{to:"/login",className:s.description__nav,children:"Login"})]})]}),"/register"!==Y&&"/login"!==Y&&"/verify"!==Y&&"/reset-password"!==Y&&(0,p.jsx)(x.J9,{validationSchema:k,initialValues:$,onSubmit:function(e,a){if(e.password!==e.passwordConfirm)return console.log(e.password),console.log(e.passwordConfirm),N.Notify.failure("Your passwords must have the same value!",{timeout:6e3});var r={userToken:D,userNewPassword:{password:e.password}};return console.log(r),a.resetForm(),V(""),z(""),G(""),K(i.ZP.refreshPassword(r))},children:(0,p.jsxs)(x.l0,{className:s.form__container,autoComplete:"off",onChange:Q,children:[(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:m?"text":"password",name:"password",validate:Z,placeholder:" "}),(0,p.jsx)("label",{className:s.form__label,children:"Password"}),T.length>=1&&(0,p.jsx)("span",{className:s.form__input__password_show,onClick:ee,children:m?(0,p.jsx)(t.Z,{id:"eye-blocked"}):(0,p.jsx)(t.Z,{id:"eye"})}),(0,p.jsx)(x.Bc,{name:"password",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsxs)("div",{className:s.form__input_container,children:[(0,p.jsx)(x.gN,{className:s.form__input,type:b?"text":"password",name:"passwordConfirm",placeholder:" ",validate:Z}),(0,p.jsx)("label",{className:s.form__label,children:"Confirm Password"}),U.length>=1&&(0,p.jsx)("span",{className:s.form__input__password_show,onClick:ae,children:b?(0,p.jsx)(t.Z,{id:"eye-blocked"}):(0,p.jsx)(t.Z,{id:"eye"})}),(0,p.jsx)(x.Bc,{name:"passwordConfirm",render:function(e){return(0,p.jsx)("p",{className:s.error__mesage,children:e})}})]}),(0,p.jsx)("button",{className:"".concat(s.button__primary_main," ").concat(s.form__button),type:"submit",children:"Change password"})]})})]})}}}]);
//# sourceMappingURL=682.ca898c4b.chunk.js.map