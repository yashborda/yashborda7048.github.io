"use strict";(self["webpackChunkshoping_cart"]=self["webpackChunkshoping_cart"]||[]).push([[270],{3270:function(e,s,a){a.r(s),a.d(s,{default:function(){return B}});var r=a(3396),t=a(9242),l=a(7139),i=a(237);const n={id:"signup"},o={class:"container"},u=(0,r._)("img",{src:i,alt:"logo1"},null,-1),d=(0,r._)("h1",null,"Sign Up",-1),m=(0,r._)("label",{for:"username"},"User Name",-1),p={class:"error-msg"},c=(0,r._)("label",{for:"email"},"E-Mail",-1),g={class:"error-msg"},w=(0,r._)("label",{for:"password"},"Password",-1),h={class:"error-msg"},v=(0,r._)("h4",null,"Login",-1);function $(e,s,a,i,$,_){const b=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",n,[(0,r._)("div",o,[(0,r.Wm)(b,{to:"/","aria-current":"page"},{default:(0,r.w5)((()=>[u])),_:1}),d,m,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=s=>e.v$.username.$model=s),id:"username",placeholder:"User Name"},null,512),[[t.nr,e.v$.username.$model]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.v$.username.$errors,((e,s)=>((0,r.wg)(),(0,r.iD)("div",{class:"input-errors",key:s},[(0,r._)("div",p,(0,l.zw)(e.$message),1)])))),128)),c,(0,r.wy)((0,r._)("input",{type:"email","onUpdate:modelValue":s[1]||(s[1]=s=>e.v$.email.$model=s),id:"email",placeholder:"Email Address"},null,512),[[t.nr,e.v$.email.$model]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.v$.email.$errors,((e,s)=>((0,r.wg)(),(0,r.iD)("div",{class:"input-errors",key:s},[(0,r._)("div",g,(0,l.zw)(e.$message),1)])))),128)),w,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=s=>e.v$.password.$model=s),id:"password",placeholder:"Password"},null,512),[[t.nr,e.v$.password.$model]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.v$.password.$errors,((e,s)=>((0,r.wg)(),(0,r.iD)("div",{class:"input-errors",key:s},[(0,r._)("div",h,(0,l.zw)(e.$message),1)])))),128)),(0,r._)("button",{onClick:s[3]||(s[3]=(...e)=>_.submitForm&&_.submitForm(...e)),type:"button"},"Sign Up"),(0,r.Wm)(b,{to:"/login",class:"link"},{default:(0,r.w5)((()=>[v])),_:1})])])}a(7658);var _=a(3053),b=a(9117),f=a(3854);const y=b.BM.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/),M=(0,f.v0)();var k={name:"signup",setup:()=>({v$:(0,_.Xw)()}),data(){return{username:"",email:"",password:""}},validations(){return{username:{required:b.BM.withMessage("**  Invalid User Name.",b.C1),minLength:(0,b.Ei)(3),maxLength:(0,b.BS)(20)},email:{required:b.BM.withMessage("**  Invalid Email.",b.C1),email:b.Do},password:{required:b.BM.withMessage("**  Invalid Password.",b.C1),pass:b.BM.withMessage("**  Must contain at least one number and one uppercase and lowercase letter required.",y)}}},methods:{async submitForm(){const e=await this.v$.$validate();1==e&&await(0,f.Xb)(M,this.email,this.password).then((e=>{const s=e.user;console.log(this.user,"signup"),localStorage.setItem("Userdata",JSON.stringify(s)),this.$router.push({path:"/"})})).catch((e=>{const s=e.code;alert(s)}))}},mounted(){let e=localStorage.getItem("Userdata");e&&this.$router.push({path:"/"})}},U=a(89);const D=(0,U.Z)(k,[["render",$]]);var B=D}}]);
//# sourceMappingURL=270.a224375c.js.map