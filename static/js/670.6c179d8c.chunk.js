"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[670],{4782:function(e,n,a){a.d(n,{Z:function(){return k}});var r=a(9439),t={button__primary_not_main:"auth-form_button__primary_not_main__fGppv",button__primary_main:"auth-form_button__primary_main__yR6bd",button__secondary:"auth-form_button__secondary__-QKt9",button__secondary_active:"auth-form_button__secondary_active__zeaxt",button__learn:"auth-form_button__learn__+Ay25",form__input:"auth-form_form__input__xxVGj",form__login__input:"auth-form_form__login__input__ADKvY",form__button:"auth-form_form__button__l5OqE",form__back_button:"auth-form_form__back_button__TxFf4",form__description:"auth-form_form__description__DOkRQ",description__nav:"auth-form_description__nav__gqvQb",loading__modal:"auth-form_loading__modal__hvqRP"},o=a(9434),i=a(215),s=a(5233),c="google-nav_googleBox__-bJnf",m="google-nav_googleDecs__DFZYi",l="google-nav_googleLink__zKBiT",_=a(4860),d=a(3329),u="https://backend-team-project-pet-support.onrender.com",p=function(){var e=(0,o.v9)((function(e){return e.menu.menuActive})),n=(0,o.I0)();return(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("p",{className:m,children:"Or sign in with"}),!0===e?(0,d.jsxs)("a",{href:"".concat(u,"/api/auth/google"),className:l,onClick:function(){return n((0,_.M6)(!e))},children:[(0,d.jsx)(s.Z,{id:"icon-google"}),(0,d.jsx)("p",{className:m,children:"Google"})]}):(0,d.jsxs)("a",{href:"".concat(u,"/api/auth/google"),className:l,children:[(0,d.jsx)(s.Z,{id:"icon-google"}),(0,d.jsx)("p",{className:m,children:"Google"})]})]})},f=a(5705),h=a(1412),g=a(2797),x=a(2791),b=a(5264),j=a(1087),N=a(7689),v=g.Ry().shape({email:g.Z_().email().required().min(10,"the minimum number of characters in the field is 10").max(63,"the maximum number of characters in the field is 63 inclusive"),password:g.Z_().required().min(7).max(32),passwordConfirm:g.Z_().required()});function y(e){var n;return e?e.includes(" ")&&(n="Invalid password, must not include spaces"):n="Password is required",n}function w(e){var n;return e?/^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i.test(e)||(n='The e-mail address is not correct, there must be at least 2 characters before the "@" symbol, the hyphen cannot be at the beginning, and the e-mail cannot contain Latin letters, email can include Latin letters, numbers and symbols!'):n="E-mail address required",n}var Z=g.Ry().shape({name:g.Z_().required("Name is required!"),region:g.Z_().matches(/^[aA-zZ]+,/,'Is not correct format, must "City, Region"').required("Region is required"),number:g.Z_().matches(/^3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,"Field must contain only numbers and format 380xxxxxxxxx!").required("Phone number is required!").min(12,"Cannot be less than twelve characters!").max(12,"Cannot be more than twelve characters!")}),C=g.Ry().shape({email:g.Z_().email().required().min(10).max(63),password:g.Z_().required().min(7).max(32)}),k=function(){var e=(0,x.useState)(!0),n=(0,r.Z)(e,2),a=n[0],s=n[1],c=(0,N.TH)().pathname,m=(0,o.v9)((function(e){return e.auth.user})),l=(0,o.v9)((function(e){return e.auth.loading})),_=(0,o.I0)(),u={email:"",password:"",passwordConfirm:"",name:"",region:"",number:""},g=function(e,n){return a?e.password!==e.passwordConfirm?b.Notify.failure("Your passwords must have the same value"):s(!1):a?void 0:(m={email:e.email,password:e.password,name:e.name,city:e.region,phone:e.number},n.resetForm(),s(!0),_(i.ZP.registerNewUser(m)))};return(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(h.Z,{}),"/register"===c&&(0,d.jsxs)(d.Fragment,{children:[a?(0,d.jsx)(f.J9,{validationSchema:v,initialValues:u,onSubmit:g,children:(0,d.jsxs)(f.l0,{className:t.form__container,autoComplete:"off",children:[(0,d.jsx)(f.gN,{className:t.form__input,type:"email",name:"email",placeholder:"Email",validate:w}),(0,d.jsx)(f.Bc,{name:"email",render:function(e){return b.Notify.warning("".concat(e),{timeout:6e3})}}),(0,d.jsx)(f.gN,{className:t.form__input,type:"password",name:"password",placeholder:"Password",validate:y}),(0,d.jsx)(f.Bc,{name:"password",render:function(e){return b.Notify.warning("".concat(e),{timeout:6e3})}}),(0,d.jsx)(f.gN,{className:t.form__input,type:"password",name:"passwordConfirm",placeholder:"Confirm Password",validate:y}),(0,d.jsx)(f.Bc,{name:"passwordConfirm",render:function(e){return b.Notify.warning("".concat(e),{timeout:6e3})}}),(0,d.jsx)("button",{className:"".concat(t.button__primary_main," ").concat(t.form__button),type:"submit",children:"Next"}),(0,d.jsx)(p,{})]})}):(0,d.jsx)(f.J9,{validationSchema:Z,initialValues:u,onSubmit:g,autoComplete:"off",children:(0,d.jsxs)(f.l0,{className:t.form__container,children:[(0,d.jsx)(f.gN,{className:t.form__input,type:"text",name:"name",placeholder:"Name",required:!0}),(0,d.jsx)(f.Bc,{name:"name",render:function(e){return b.Notify.warning("".concat(e),{timeout:6e3})}}),(0,d.jsx)(f.gN,{className:t.form__input,type:"text",name:"region",placeholder:"City, region",required:!0}),(0,d.jsx)(f.Bc,{name:"region",render:function(e){return b.Notify.warning("".concat(e),{timeout:6e3})}}),(0,d.jsx)(f.gN,{className:t.form__input,type:"tel",name:"number",placeholder:"Mobile phone"}),(0,d.jsx)(f.Bc,{name:"number",render:function(e){return b.Notify.warning("".concat(e),{timeout:6e3})}}),(0,d.jsx)("span",{className:"".concat(t.button__primary_not_main," ").concat(t.form__back_button),onClick:function(){if(!a)return s(!0)},children:"\u140a Go back"}),(0,d.jsx)("button",{className:"".concat(t.button__primary_main," ").concat(t.form__button),type:"submit",children:"Register"}),(0,d.jsx)(p,{})]})}),(0,d.jsxs)("p",{className:t.form__description,children:["Already have an account?"," ",(0,d.jsx)(j.OL,{className:t.description__nav,to:"/login",children:"Login"})]})]}),"/login"===c&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f.J9,{validationSchema:C,initialValues:u,onSubmit:function(e,n){return m={email:e.email,password:e.password},n.resetForm(),a=m,void _(i.ZP.login(a));var a},children:(0,d.jsxs)(f.l0,{className:t.form__container,autoComplete:"off",children:[(0,d.jsx)(f.gN,{className:t.form__input,type:"email",name:"email",placeholder:"Email"}),(0,d.jsx)(f.Bc,{name:"email",render:function(e){return b.Notify.warning("".concat(e))}}),(0,d.jsx)(f.gN,{className:"".concat(t.form__input," ").concat(t.form__login__input),type:"password",name:"password",placeholder:"Password",validate:y}),(0,d.jsx)(f.Bc,{name:"password",render:function(e){return b.Notify.warning("".concat(e))}}),(0,d.jsx)("button",{className:"".concat(t.button__primary_main," ").concat(t.form__button),type:"submit",children:"Login"}),(0,d.jsxs)("p",{className:t.form__description,children:["Resend verification email? Click "," ",(0,d.jsx)(j.OL,{to:"/verify",className:t.description__nav,children:"here"})]}),(0,d.jsx)(p,{})]})}),(0,d.jsxs)("p",{className:t.form__description,children:["Don't have an account?"," ",(0,d.jsx)(j.OL,{to:"/register",className:t.description__nav,children:"Register"})]})]}),"/verify"===c&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f.J9,{validationSchema:C,initialValues:u,onSubmit:function(e,n){return m={email:e.email,password:e.password},n.resetForm(),_(i.ZP.authVerify(m))},children:(0,d.jsxs)(f.l0,{className:t.form__container,autoComplete:"off",children:[(0,d.jsx)(f.gN,{className:t.form__input,type:"email",name:"email",placeholder:"Email"}),(0,d.jsx)(f.Bc,{name:"email",render:function(e){return b.Notify.warning("".concat(e))}}),(0,d.jsx)(f.gN,{className:"".concat(t.form__input," ").concat(t.form__login__input),type:"password",name:"password",placeholder:"Password",validate:y}),(0,d.jsx)(f.Bc,{name:"password",render:function(e){return b.Notify.warning("".concat(e))}}),(0,d.jsx)("button",{className:"".concat(t.button__primary_main," ").concat(t.form__button),type:"submit",children:"Verify"})]})}),(0,d.jsxs)("p",{className:t.form__description,children:["Go to back?"," ",(0,d.jsx)(j.OL,{to:"/login",className:t.description__nav,children:"Login"})]})]})]})}},1412:function(e,n,a){a.d(n,{Z:function(){return i}});var r="loader_loading__modal__7RGsW",t=a(8966),o=a(3329),i=function(){return(0,o.jsx)("div",{className:r,children:(0,o.jsx)(t.ne,{height:"100",width:"100",color:"#F59256",ariaLabel:"hearts-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},1670:function(e,n,a){a.r(n),a.d(n,{default:function(){return d}});var r="login-page_login__container__0XUcS",t="login-page_login__form__section__IjfFa",o="login-page_login__tittle__f+0dD",i=a(4782),s=a(9434),c=a(5973),m=a(6351),l=a(3204),_=a(3329),d=function(){var e=(0,s.v9)(m.Kv);return(0,_.jsx)("section",{className:r,children:(0,_.jsx)("div",{className:c.Z.container,children:(0,_.jsxs)("div",{className:t,children:[(0,_.jsx)("h1",{className:o,children:"Login"}),(0,_.jsx)(i.Z,{}),e&&(0,_.jsx)(l.$,{})]})})})}},3204:function(e,n,a){a.d(n,{$:function(){return p}});var r=a(1413),t=a(4925),o=a(2554),i=a(7872),s=a(9219),c=a(9477),m=a(5881),l=a(6992),_=a(3329),d=["label","thickness","speed","emptyColor","className"],u=(0,o.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),p=(0,i.G)((function(e,n){var a=(0,s.mq)("Spinner",e),o=(0,c.Lr)(e),i=o.label,p=void 0===i?"Loading...":i,f=o.thickness,h=void 0===f?"2px":f,g=o.speed,x=void 0===g?"0.45s":g,b=o.emptyColor,j=void 0===b?"transparent":b,N=o.className,v=(0,t.Z)(o,d),y=(0,l.cx)("chakra-spinner",N),w=(0,r.Z)({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:h,borderBottomColor:j,borderLeftColor:j,animation:"".concat(u," ").concat(x," linear infinite")},a);return(0,_.jsx)(m.m.div,(0,r.Z)((0,r.Z)({ref:n,__css:w,className:y},v),{},{children:p&&(0,_.jsx)(m.m.span,{srOnly:!0,children:p})}))}));p.displayName="Spinner"}}]);
//# sourceMappingURL=670.6c179d8c.chunk.js.map