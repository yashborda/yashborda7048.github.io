"use strict";(self["webpackChunkshoping_cart"]=self["webpackChunkshoping_cart"]||[]).push([[543],{1543:function(e,a,s){s.r(a),s.d(a,{default:function(){return D}});var r=s(3396),t=s(9242),l=s(7139),o=s(237);const i={id:"login"},n={class:"container"},d=(0,r._)("img",{src:o,alt:"logo1"},null,-1),u=(0,r._)("h1",null,"Login",-1),c=(0,r._)("label",{for:"email"},"E-Mail",-1),p={class:"error-msg"},g=(0,r._)("label",{for:"password"},"Password",-1),m={class:"error-msg"},w=(0,r._)("h4",null,"Sign Up",-1);function h(e,a,s,o,h,v){const $=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",i,[(0,r._)("div",n,[(0,r.Wm)($,{to:"/","aria-current":"page"},{default:(0,r.w5)((()=>[d])),_:1}),u,c,(0,r.wy)((0,r._)("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=a=>e.v$.email.$model=a),id:"email",placeholder:"Email Address"},null,512),[[t.nr,e.v$.email.$model]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.v$.email.$errors,((e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:"input-errors",key:a},[(0,r._)("div",p,(0,l.zw)(e.$message),1)])))),128)),g,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=a=>e.v$.password.$model=a),id:"password",placeholder:"Password"},null,512),[[t.nr,e.v$.password.$model]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.v$.password.$errors,((e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:"input-errors",key:a},[(0,r._)("div",m,(0,l.zw)(e.$message),1)])))),128)),(0,r._)("button",{onClick:a[2]||(a[2]=(...e)=>v.login&&v.login(...e)),type:"button"},"Login"),(0,r.Wm)($,{to:"/signup",class:"link"},{default:(0,r.w5)((()=>[w])),_:1})])])}s(7658);var v=s(3053),$=s(9117),_=s(3854);const f=$.BM.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/),k=(0,_.v0)();var y={name:"login",setup:()=>({v$:(0,v.Xw)()}),data(){return{email:"",password:""}},validations(){return{email:{required:$.BM.withMessage("**  Invalid Email.",$.C1),email:$.Do},password:{required:$.BM.withMessage("**  Invalid Password.",$.C1),pass:$.BM.withMessage("**  Must contain at least one number and one uppercase and lowercase letter required.",f)}}},methods:{async login(){const e=await this.v$.$validate();1==e&&await(0,_.e5)(k,this.email,this.password).then((e=>{const a=e.user;localStorage.setItem("Userdata",JSON.stringify(a)),this.$router.push({path:"/"})})).catch((e=>{const a=e.code;alert(a)}))}},mounted(){let e=localStorage.getItem("Userdata");e&&this.$router.push({path:"/"})}},M=s(89);const b=(0,M.Z)(y,[["render",h]]);var D=b}}]);
//# sourceMappingURL=543.79d8311f.js.map