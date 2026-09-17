"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=v(function(z,l){
var j=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist');function R(e,r,a,q){var t,n,u,i,s;if(e<=0)return NaN;if(e===1||a===0)return c(r[q])?NaN:0;for(u=q,n=r[u],t=n,s=1;s<e;s++){if(u+=a,i=r[u],c(i))return i;i<n?n=i:i>t&&(t=i)}return j(t-n)}l.exports=R
});var p=v(function(A,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=o();function F(e,r,a){return E(e,r,a,_(e,a))}m.exports=F
});var g=v(function(B,d){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),O=o();N(y,"ndarray",O);d.exports=y
});var T=require("path").join,b=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=g(),f,x=b(T(__dirname,"./native.js"));h(x)?f=k:f=x;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
