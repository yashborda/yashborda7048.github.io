"use strict";(self["webpackChunkshoping_cart"]=self["webpackChunkshoping_cart"]||[]).push([[493],{8493:function(e,r,s){s.r(r),s.d(r,{default:function(){return B}});var a=s(3396),t=s(7139),o=s(9242),l=s(237);const i={id:"signup"},n={class:"container"},u=(0,a._)("img",{src:l,alt:"logo1"},null,-1),d=(0,a._)("h1",null,"Sign Up",-1),m={class:"input-errors mb-3 text-center"},p=(0,a._)("label",{for:"username"},"User Name",-1),c={class:"error-msg"},g=(0,a._)("label",{for:"email"},"E-Mail",-1),w={class:"error-msg"},h=(0,a._)("label",{for:"password"},"Password",-1),$={class:"error-msg"},v=(0,a._)("h4",null,"Login",-1);function _(e,r,s,l,_,y){const b=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",i,[(0,a._)("div",n,[(0,a.Wm)(b,{to:"/","aria-current":"page"},{default:(0,a.w5)((()=>[u])),_:1}),d,(0,a._)("h3",m,(0,t.zw)(_.errorCode),1),p,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=r=>e.v$.username.$model=r),id:"username",placeholder:"User Name"},null,512),[[o.nr,e.v$.username.$model]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.v$.username.$errors,((e,r)=>((0,a.wg)(),(0,a.iD)("div",{class:"input-errors",key:r},[(0,a._)("div",c,(0,t.zw)(e.$message),1)])))),128)),g,(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":r[1]||(r[1]=r=>e.v$.email.$model=r),id:"email",placeholder:"Email Address"},null,512),[[o.nr,e.v$.email.$model]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.v$.email.$errors,((e,r)=>((0,a.wg)(),(0,a.iD)("div",{class:"input-errors",key:r},[(0,a._)("div",w,(0,t.zw)(e.$message),1)])))),128)),h,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":r[2]||(r[2]=r=>e.v$.password.$model=r),id:"password",placeholder:"Password"},null,512),[[o.nr,e.v$.password.$model]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.v$.password.$errors,((e,r)=>((0,a.wg)(),(0,a.iD)("div",{class:"input-errors",key:r},[(0,a._)("div",$,(0,t.zw)(e.$message),1)])))),128)),(0,a._)("button",{onClick:r[3]||(r[3]=(...e)=>y.submitForm&&y.submitForm(...e)),type:"button"},"Sign Up"),(0,a.Wm)(b,{to:"/login",class:"link"},{default:(0,a.w5)((()=>[v])),_:1})])])}s(7658);var y=s(3053),b=s(9117),f=s(3854);const k=b.BM.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/),M=(0,f.v0)();var U={name:"signup",setup:()=>({v$:(0,y.Xw)()}),data(){return{username:"",email:"",password:"",errorCode:""}},validations(){return{username:{required:b.BM.withMessage("*  Please type Your User Name.",b.C1),minLength:(0,b.Ei)(3),maxLength:(0,b.BS)(20)},email:{required:b.BM.withMessage("* Please type Your Email Address.",b.C1),email:b.Do},password:{required:b.BM.withMessage("*  Please type Your Password.",b.C1),pass:b.BM.withMessage("* Must contain at least one number and one uppercase and lowercase letter required.",k)}}},methods:{async submitForm(){const e=await this.v$.$validate();1==e&&await(0,f.Xb)(M,this.email,this.password).then((e=>{const r=e.user;(0,f.ck)(M.currentUser,{displayName:this.username}).then((()=>{console.log(r.providerData[0],"signup"),localStorage.setItem("Userdata",JSON.stringify(r.providerData[0])),this.$router.push({path:"/"})})).catch((e=>console.log(e)))})).catch((e=>{this.errorCode=e.code}))}},mounted(){let e=localStorage.getItem("Userdata");e&&this.$router.push({path:"/"})}},D=s(89);const C=(0,D.Z)(U,[["render",_]]);var B=C}}]);
//# sourceMappingURL=493.6c060db9.js.map