(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-football-order"],{"238e":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniPopup:n("7e47").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[e._v("投注单")])],2),1==e.can_order()?i("v-uni-view",{staticStyle:{display:"flex",width:"100%","justify-content":"space-around","margin-top":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"40%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}},[e._v("添加赛事")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"40%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"cuIcon-people",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"}},[e._v("发起跟单")])],1)],1):e._e(),0==e.can_order()?i("v-uni-view",{staticStyle:{display:"flex",width:"100%","justify-content":"space-around","margin-top":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"90%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}},[e._v("添加赛事")])],1)],1):e._e(),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center","margin-top":"20rpx"}},[i("v-uni-image",{staticStyle:{height:"30rpx",width:"680rpx"},attrs:{src:n("4b7a")}})],1),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticStyle:{"background-color":"white",width:"655rpx","margin-top":"-20rpx","box-shadow":"11rpx 2rpx 15rpx 12rpx #DCDCDC"}},e._l(e.check_game,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","border-bottom":"1px dashed #acacac",padding:"20rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-around",width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticStyle:{width:"250rpx",display:"flex","align-items":"center","justify-content":"space-around","font-size":"25rpx"}},[i("v-uni-view",[e._v("周"+e._s(t["week"])+e._s(t["suffix_num"]))]),i("v-uni-view",[e._v(e._s(t["h_name"]))])],1),i("v-uni-view",[e._v("VS")]),i("v-uni-view",{staticStyle:{width:"250rpx",display:"flex","align-items":"center","justify-content":"space-around","font-size":"25rpx"}},[i("v-uni-view",[e._v(e._s(t["a_name"]))]),i("v-uni-view",{staticClass:"cuIcon-roundclose",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteItem(n)}}})],1)],1),i("v-uni-view",{staticStyle:{"background-color":"#f3f3f3",width:"90%",height:"70rpx",display:"flex","justify-content":"center","align-items":"center",color:"#4e90f7","font-size":"26rpx"}},e._l(t["bet"],(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"flex",padding:"0 6rpx"}},[e._v(e._s(t["name"]))])})),1)],1)})),1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",position:"relative"}},[i("v-uni-image",{staticStyle:{height:"100rpx",width:"655rpx"},attrs:{src:n("24ef")}}),e.check_game.length>0?i("v-uni-text",{staticStyle:{position:"absolute",left:"280rpx",top:"15rpx",color:"grey","font-size":"25rpx"}},[e._v("您已选择"+e._s(e.check_game.length)+"场比赛")]):e._e(),0==e.check_game.length?i("v-uni-text",{staticStyle:{position:"absolute",left:"320rpx",top:"15rpx",color:"grey","font-size":"25rpx"}},[e._v("请选择比赛")]):e._e()],1),i("uni-popup",{ref:"popup",staticStyle:{"z-index":"99",height:"600rpx"},attrs:{"mask-click":!0,type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticStyle:{"min-height":"300rpx",padding:"15rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",color:"grey","padding-bottom":"20rpx"}},[i("v-uni-view",[e._v("自由过关")]),e._v("、"),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open()}}},[e._v("收起")])],1),e._l(e.chuan_arr,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"inline-block"}},[i("v-uni-view",{class:["border-style",{checked:1==t["checked"]},{unchecked:0==t["checked"]}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkedChuan(n)}}},[e._v(e._s("单关"!=t["value"]?t["value"]+"串1":"单关"))])],1)}))],2)],1),i("payorder",{ref:"orderpop_",attrs:{amount:e.getPlzh().length*e.bei*2,shop_money:this.shop_money,bei:e.bei,check_game:e.getPlzh(),mode:1,chuan_arr:e.chuan_arr,game_type:e.type},on:{closeopendoor:function(t){arguments[0]=t=e.$handleEvent(t),e.closeopendoor()}}}),i("v-uni-view",{staticStyle:{position:"fixed",left:"0",right:"0",bottom:"0","background-color":"white","z-index":"999",display:"flex","flex-direction":"column"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","border-top":"2px solid #EEEEEE","padding-top":"20rpx","padding-left":"30rpx"}},[i("v-uni-view",{staticStyle:{border:"1px solid #d1d1d1",display:"flex","align-items":"center","justify-content":"center","min-width":"200rpx",padding:"0 20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open()}}},[i("v-uni-view",{staticStyle:{"margin-right":"40rpx"}},[e._v(e._s(e.getChuanStr()))]),i("v-uni-view",{staticClass:"cuIcon-unfold"})],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel()}}},[e._v("投")]),i("v-uni-view",{staticStyle:{"background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","margin-left":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subBei()}}},[e._v("一")]),i("v-uni-input",{staticStyle:{background:"#EEEEEE",width:"50rpx",margin:"0 5rpx",height:"50rpx","text-align":"center"},attrs:{type:"number"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur_(e.bei)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur(t,3)}},model:{value:e.bei,callback:function(t){e.bei=t},expression:"bei"}}),i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{color:"#000000","background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","line-height":"50rpx","margin-right":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addBei()}}}),i("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("倍")])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",padding:"10rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[i("v-uni-view",{staticStyle:{"font-size":"25rpx"}},[i("v-uni-text",[e._v("共")]),i("v-uni-text",[e._v(e._s(e.getPlzh().length)+"注")]),i("v-uni-text",[e._v(e._s(e.bei)+"倍")]),i("v-uni-text",[e._v(e._s(e.getPlzh().length*e.bei*2)+"元")])],1),0==e.getExpectMaxAward()?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 0.00元")]):e._e(),e.getExpectMaxAward()==e.getExpectMinAward()&&e.getExpectMinAward()>0?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 "+e._s(e.getExpectMinAward())+"元")]):e._e(),e.getExpectMaxAward()>0&&e.getExpectMaxAward()!=e.getExpectMinAward()?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 "+e._s(e.getExpectMinAward())+" ~ "+e._s(e.getExpectMaxAward()))]):e._e()],1),i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"inline-block","background-color":"#dcf4f2",padding:"10rpx 20rpx","border-radius":"20rpx 0 0 20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goOptimize()}}},[e._v("奖金优化")]),i("v-uni-view",{staticStyle:{display:"inline-block",background:"linear-gradient(to right,#97e2e2,#ffaaff)",padding:"10rpx 50rpx","border-radius":"0 20rpx 20rpx 0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openorderpop()}}},[e._v("提交")])],1)],1)],1)],1)},a=[]},"4bc6":function(e,t,n){"use strict";var i=n("4ea4");n("99af"),n("4de4"),n("4160"),n("13d5"),n("4e82"),n("a434"),n("07ac"),n("acd8"),n("e25e"),n("ac1f"),n("1276"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n("7b72")),a=i(n("298f")),r=i(n("ecc2")),p={name:"order",components:{barTitle:a.default,ldSelect:s.default,payorder:r.default},data:function(){return{shop_money:0,is_order_open:!1,chuan_arr:[],is_open:!1,bei:50,type:"foot",check_game:[]}},methods:{doorder:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t={type:"foot",num:this.getPlzh().length,checkGame:JSON.stringify(this.getPlzh()),bei:this.bei,mode:1,chuan:JSON.stringify(e)};this.$api.doorder_(t).then((function(e){var t=encodeURIComponent(JSON.stringify(e.data));uni.navigateTo({url:"/pages/order/orderdetail?str="+t})}))},goOptimize:function(){if(this.getPlzh().length>1){var e=encodeURIComponent(JSON.stringify(this.getPlzh())),t=this.getPlzh().length*this.bei*2;uni.navigateTo({url:"/pages/football/optimize?str="+e+"&money="+t+"&tyep="+this.type})}},getPlzh:function(){var e=this.chuan_arr,t=[];for(var n in e)1==e[n]["checked"]&&t.push(e[n]["value"]);var i=[],s=[];for(var a in t){var r="单关"!=t[a]?t[a]:1;s.push(this.pl(this.check_game,r))}for(var p in s){var u=s[p];for(var h in u){var o=this.dikaer(u[h]);for(var c in o)i.push(o[c])}}return i},clone:function(e){var t;if(e instanceof Array){t=[];var n=e.length;while(n--)t[n]=this.clone(e[n]);return t}if(e instanceof Object){for(var i in t={},e)t[i]=this.clone(e[i]);return t}return e},getExpectMinAward:function(){var e=this.clone(this.check_game),t=[];for(var n in e){var i=e[n]["bet"],s=[],a=[],r=[],p=[],u=[],h=[];for(var o in i){var c=i[o],l=c["met"].split("-");1==l[0]&&a.push(c),2==l[0]&&r.push(c),3==l[0]&&p.push(c),4==l[0]&&u.push(c),5==l[0]&&h.push(c)}a.length>0&&s.push(a),r.length>0&&s.push(r),p.length>0&&s.push(p),u.length>0&&s.push(u),h.length>0&&s.push(h);var f=this.dikaer(s),v=[];for(var d in f){var g=f[d];Array.isArray(g)||(g=[g]),v.push(this.filter_game(g))}var m=v.sort((function(e,t){var n=0,i=0;for(var s in e)n+=parseInt(e[s]["pl"]);for(var a in t)i+=parseInt(t[a]["pl"]);return i-n}))[0];t.push(m)}var x=this.chuan_arr,b=[];for(var _ in x)1==x[_]["checked"]&&b.push(x[_]["value"]);var y=[],w=[],k={};for(var I in b){var S="单关"!=b[I]?b[I]:1,E={};E["chuan"]=b[I],E["content"]=this.pl(this.check_game,S),w.push(E),k[b[I]]=9999999}var M=[];for(var $ in w){var z=w[$]["content"],j=w[$]["chuan"];for(var C in z){var A=this.dikaer(z[C]);for(var P in A){if("单关"!=j){var B=2;for(var F in A[P])B*=parseFloat(A[P][F]["pl"]);M.push(B),B<k[j]&&(k[j]=B)}else{B=2*parseFloat(A[P]["pl"]);M.push(B),B<k[j]&&(k[j]=B)}y.push(A[P])}}}M=M.sort((function(e,t){return e-t}));return k=Object.values(k).sort((function(e,t){return e-t})),0==k.length?0:parseFloat(k[0]*this.bei).toFixed(2)},getExpectMaxAward:function(){var e=this.clone(this.check_game),t=[];for(var n in e){var i=e[n]["bet"],s=[],a=[],r=[],p=[],u=[],h=[];for(var o in i){var c=i[o],l=c["met"].split("-");1==l[0]&&a.push(c),2==l[0]&&r.push(c),3==l[0]&&p.push(c),4==l[0]&&u.push(c),5==l[0]&&h.push(c)}a.length>0&&s.push(a),r.length>0&&s.push(r),p.length>0&&s.push(p),u.length>0&&s.push(u),h.length>0&&s.push(h);var f=this.dikaer(s),v=[];for(var d in f){var g=f[d];Array.isArray(g)||(g=[g]),v.push(this.filter_game(g))}var m=v.sort((function(e,t){var n=0,i=0;for(var s in e)n+=parseInt(e[s]["pl"]);for(var a in t)i+=parseInt(t[a]["pl"]);return i-n}))[0];t.push(m)}var x=this.chuan_arr,b=[];for(var _ in x)1==x[_]["checked"]&&b.push(x[_]["value"]);var y=[],w=[],k={};for(var I in b){var S="单关"!=b[I]?b[I]:1,E={};E["chuan"]=b[I],E["content"]=this.pl(t,S),w.push(E),k[b[I]]=9999999}var M=[];for(var $ in w){var z=w[$]["content"],j=w[$]["chuan"];for(var C in z){var A=this.dikaer(z[C]);for(var P in A){if("单关"!=j){var B=2;for(var F in A[P])B*=parseFloat(A[P][F]["pl"]);M.push(B),B<k[j]&&(k[j]=B)}else{B=2*parseFloat(A[P]["pl"]);M.push(B),B<k[j]&&(k[j]=B)}y.push(A[P])}}}M=M.sort((function(e,t){return e-t}));var O=0;for(var J in M)O+=M[J];return 0==M.length?0:M.length>=1?parseFloat(O*this.bei).toFixed(2):void 0},filter_game:function(e){var t=[],n=[],i=[],s=[],a=[],r=[],p=[],u=[],h=[],o=[],c=[],l=[],f=[],v=[],d=[],g=[],m=[],x=[],b=[],_=[],y=[],w=[],k=[],I=[],S=[],E=[],M=[],$=[],z=[],j=[],C=[];for(var A in e){var P=e[A],B=P["met"].split("-"),F=parseFloat(P["p_goal"]);if(F<0){if("1-1"==P["met"]&&n.push(P),"2-3"==P["met"]&&n.push(P),3==B[0]){if(B[1]<13){var O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J<Math.abs(F)&&parseInt(O[1])>0&&n.push(P)}13==B[1]&&n.push(P)}4==B[0]&&B[1]>=4&&n.push(P),5==B[0]&&7==B[1]&&n.push(P)}if(F<0){if("1-1"==P["met"]&&i.push(P),"2-3"==P["met"]&&i.push(P),3==B[0]){if(B[1]<13){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J<Math.abs(F)&&i.push(P)}13==B[1]&&i.push(P)}4==B[0]&&B[1]>1&&i.push(P),5==B[0]&&4==B[1]&&i.push(P)}if(F<0){if("1-1"==P["met"]&&s.push(P),"2-3"==P["met"]&&s.push(P),3==B[0]){if(B[1]<13){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J<Math.abs(F)&&s.push(P)}13==B[1]&&s.push(P)}4==B[0]&&B[1]>1&&s.push(P),5==B[0]&&1==B[1]&&s.push(P)}if(F<0){if("1-1"==P["met"]&&a.push(P),"2-2"==P["met"]&&a.push(P),3==B[0]){if(B[1]<13){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J==Math.abs(F)&&parseInt(O[1])>0&&a.push(P)}13==B[1]&&a.push(P)}4==B[0]&&B[1]>=4&&a.push(P),5==B[0]&&7==B[1]&&a.push(P)}if(F<0){if("1-1"==P["met"]&&r.push(P),"2-2"==P["met"]&&r.push(P),3==B[0]){if(B[1]<13){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J==Math.abs(F)&&r.push(P)}13==B[1]&&r.push(P)}4==B[0]&&B[1]>1&&r.push(P),5==B[0]&&4==B[1]&&r.push(P)}if(F<0){if("1-1"==P["met"]&&p.push(P),"2-2"==P["met"]&&p.push(P),3==B[0]){if(B[1]<13){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J==Math.abs(F)&&p.push(P)}13==B[1]&&p.push(P)}4==B[0]&&B[1]>1&&p.push(P),5==B[0]&&1==B[1]&&p.push(P)}if(F<0){if("1-1"==P["met"]&&u.push(P),"2-1"==P["met"]&&u.push(P),3==B[0]){if(B[1]<13){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J>Math.abs(F)&&parseInt(O[1])>0&&u.push(P)}13==B[1]&&u.push(P)}4==B[0]&&B[1]>=4&&u.push(P),5==B[0]&&7==B[1]&&u.push(P)}if(F<0){if("1-1"==P["met"]&&h.push(P),"2-1"==P["met"]&&h.push(P),3==B[0]){if(B[1]<13){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J>Math.abs(F)&&h.push(P)}13==B[1]&&h.push(P)}4==B[0]&&B[1]>1&&h.push(P),5==B[0]&&4==B[1]&&h.push(P)}if(F<0){if("1-1"==P["met"]&&o.push(P),"2-1"==P["met"]&&o.push(P),3==B[0]){if(B[1]<13){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);J>Math.abs(F)&&o.push(P)}13==B[1]&&o.push(P)}4==B[0]&&B[1]>1&&o.push(P),5==B[0]&&1==B[1]&&o.push(P)}if(F>0){if("1-1"==P["met"]&&c.push(P),"2-1"==P["met"]&&c.push(P),3==B[0]&&B[1]<=13){O=P["name"].split(":");parseInt(O[1])>0&&c.push(P)}4==B[0]&&B[1]>=4&&c.push(P),5==B[0]&&7==B[1]&&c.push(P)}if(F>0){if("1-1"==P["met"]&&l.push(P),"2-1"==P["met"]&&l.push(P),3==B[0]&&B[1]<=13){O=P["name"].split(":");l.push(P)}4==B[0]&&B[1]>1&&l.push(P),5==B[0]&&4==B[1]&&l.push(P)}if(F>0){if("1-1"==P["met"]&&f.push(P),"2-1"==P["met"]&&f.push(P),3==B[0]&&B[1]<=13){O=P["name"].split(":");f.push(P)}4==B[0]&&B[1]>1&&f.push(P),5==B[0]&&1==B[1]&&f.push(P)}if(F<0){if("1-2"==P["met"]&&v.push(P),"2-3"==P["met"]&&v.push(P),3==B[0]&&B[1]>=14&&B[1]<=18){O=P["name"].split(":");parseInt(O[1])>0&&v.push(P)}4==B[0]&&B[1]>=3&&v.push(P),5==B[0]&&8==B[1]&&v.push(P)}if(F<0&&("1-2"==P["met"]&&d.push(P),"2-3"==P["met"]&&d.push(P),3==B[0]&&B[1]>=14&&B[1]<=18&&d.push(P),4==B[0]&&d.push(P),5==B[0]&&5==B[1]&&d.push(P)),F<0&&("1-2"==P["met"]&&g.push(P),"2-3"==P["met"]&&g.push(P),3==B[0]&&B[1]>=15&&B[1]<=18&&g.push(P),4==B[0]&&B[1]>=3&&g.push(P),5==B[0]&&2==B[1]&&g.push(P)),F>0){if("1-2"==P["met"]&&m.push(P),"2-1"==P["met"]&&m.push(P),3==B[0]&&B[1]>=14&&B[1]<=18){O=P["name"].split(":");parseInt(O[1])>0&&m.push(P)}4==B[0]&&B[1]>=3&&m.push(P),5==B[0]&&8==B[1]&&m.push(P)}if(F>0&&("1-2"==P["met"]&&x.push(P),"2-1"==P["met"]&&x.push(P),3==B[0]&&B[1]>=14&&B[1]<=18&&x.push(P),4==B[0]&&x.push(P),5==B[0]&&5==B[1]&&x.push(P)),F>0&&("1-2"==P["met"]&&b.push(P),"2-1"==P["met"]&&b.push(P),3==B[0]&&B[1]>=15&&B[1]<=18&&b.push(P),4==B[0]&&B[1]>=3&&b.push(P),5==B[0]&&2==B[1]&&b.push(P)),F>0){if("1-3"==P["met"]&&_.push(P),"2-1"==P["met"]&&_.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)<F&&_.push(P)}31==B[1]&&_.push(P)}4==B[0]&&B[1]>1&&_.push(P),5==B[0]&&9==B[1]&&_.push(P)}if(F>0){if("1-3"==P["met"]&&y.push(P),"2-1"==P["met"]&&y.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)<F&&y.push(P)}31==B[1]&&y.push(P)}4==B[0]&&B[1]>1&&y.push(P),5==B[0]&&6==B[1]&&y.push(P)}if(F>0){if("1-3"==P["met"]&&w.push(P),"2-1"==P["met"]&&w.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)<F&&parseInt(O[0])>0&&w.push(P)}31==B[1]&&w.push(P)}4==B[0]&&B[1]>=4&&w.push(P),5==B[0]&&3==B[1]&&w.push(P)}if(F>0){if("1-3"==P["met"]&&k.push(P),"2-2"==P["met"]&&k.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)==F&&k.push(P)}31==B[1]&&k.push(P)}4==B[0]&&B[1]>1&&k.push(P),5==B[0]&&9==B[1]&&k.push(P)}if(F>0){if("1-3"==P["met"]&&I.push(P),"2-2"==P["met"]&&I.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)==F&&I.push(P)}31==B[1]&&I.push(P)}4==B[0]&&B[1]>1&&I.push(P),5==B[0]&&6==B[1]&&I.push(P)}if(F>0){if("1-3"==P["met"]&&S.push(P),"2-2"==P["met"]&&S.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)==F&&parseInt(O[0])>0&&S.push(P)}31==B[1]&&S.push(P)}4==B[0]&&B[1]>=4&&S.push(P),5==B[0]&&3==B[1]&&S.push(P)}if(F>0){if("1-3"==P["met"]&&E.push(P),"2-3"==P["met"]&&E.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)>F&&E.push(P)}31==B[1]&&E.push(P)}4==B[0]&&B[1]>1&&E.push(P),5==B[0]&&9==B[1]&&E.push(P)}if(F>0){if("1-3"==P["met"]&&M.push(P),"2-3"==P["met"]&&M.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)>F&&M.push(P)}31==B[1]&&M.push(P)}4==B[0]&&B[1]>1&&M.push(P),5==B[0]&&6==B[1]&&M.push(P)}if(F>0){if("1-3"==P["met"]&&$.push(P),"2-3"==P["met"]&&$.push(P),3==B[0]){if(B[1]>=19&&B[1]<31){O=P["name"].split(":"),J=parseInt(O[0])-parseInt(O[1]);Math.abs(J)>F&&parseInt(O[0])>0&&$.push(P)}31==B[1]&&$.push(P)}4==B[0]&&B[1]>=4&&$.push(P),5==B[0]&&3==B[1]&&$.push(P)}if(F<0&&("1-3"==P["met"]&&z.push(P),"2-3"==P["met"]&&z.push(P),3==B[0]&&B[1]>=19&&B[1]<=31&&z.push(P),4==B[0]&&B[1]>1&&z.push(P),5==B[0]&&9==B[1]&&z.push(P)),F<0&&("1-3"==P["met"]&&j.push(P),"2-3"==P["met"]&&j.push(P),3==B[0]&&B[1]>=19&&B[1]<=31&&j.push(P),4==B[0]&&B[1]>1&&j.push(P),5==B[0]&&6==B[1]&&j.push(P)),F<0){if("1-3"==P["met"]&&C.push(P),"2-3"==P["met"]&&C.push(P),3==B[0]&&B[1]>=19&&B[1]<=31){O=P["name"].split(":");parseInt(O[0])>0&&C.push(P)}4==B[0]&&B[1]>=4&&C.push(P),5==B[0]&&3==B[1]&&C.push(P)}}for(var U in n.length>0&&t.push(n),a.length>0&&t.push(a),u.length>0&&t.push(u),c.length>0&&t.push(c),v.length>0&&t.push(v),m.length>0&&t.push(m),_.length>0&&t.push(_),k.length>0&&t.push(k),E.length>0&&t.push(E),i.length>0&&t.push(i),s.length>0&&t.push(s),r.length>0&&t.push(r),p.length>0&&t.push(p),h.length>0&&t.push(h),o.length>0&&t.push(o),l.length>0&&t.push(l),f.length>0&&t.push(f),d.length>0&&t.push(d),g.length>0&&t.push(g),x.length>0&&t.push(x),b.length>0&&t.push(b),y.length>0&&t.push(y),w.length>0&&t.push(w),I.length>0&&t.push(I),S.length>0&&t.push(S),M.length>0&&t.push(M),$.length>0&&t.push($),j.length>0&&t.push(j),C.length>0&&t.push(C),t){var N=t[U],D=!1,R=!1,T=(O="",""),G="",L="",V="",q="";for(var H in N){P=N[H],B=P["met"].split("-");if(3==B[0]){D=!0;var K=P["name"].split(":");O=parseInt(K[0])+parseInt(K[1]),G=parseFloat(P["pl"]),q=H}4==B[0]&&(R=!0,T=parseInt(P["name"]),L=parseFloat(P["pl"]),V=H)}1==D&&1==R&&O!=T&&O<7&&7!=T&&(console.log("同时共存"),G>=L&&delete t[U][V],G<L&&delete t[U][q])}var Q=t.sort((function(e,t){var n=0,i=0;for(var s in e)n+=parseFloat(e[s]["pl"]);for(var a in t)i+=parseFloat(t[a]["pl"]);return i-n}))[0];return Q},pl:function(e,t){for(var n=e.length,i=Math.pow(2,n),s=Math.pow(2,t)-1,a=[],r=s;r<i;r++){for(var p=0,u=[],h=0;h<n;h++){var o=Math.pow(2,h),c=r&o;c==o&&(e[h]["bet"]?u.push(e[h]["bet"]):u.push(e[h]),p++)}p==t&&a.push(u)}return a},dikaer:function(e){return e.length<2?e[0]||[]:[].reduce.call(e,(function(e,t){var n=[];return Object.values(e).forEach((function(e){Object.values(t).forEach((function(t){var i=[].concat(Array.isArray(e)?e:[e]);i.push(t),n.push(i)}))})),n}))},checkedChuan:function(e){this.chuan_arr[e]["checked"]=!this.chuan_arr[e]["checked"]},getChuanStr:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t="";return 0==e.length&&(t+="请选择"),1==e.length&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 "),2==e.length&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 ",t+="单关"==e[1]["value"]?"单关":e[1]["value"]+"串1 "),e.length>2&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 ",t+="...",t+="单关"==e[e.length-1]["value"]?"单关":e[e.length-1]["value"]+"串1 "),t},getChuanArr:function(){var e=[],t=this.check_game.length;if(0==t)return this.chuan_arr=[],[];if(2==t&&(e=[{value:2,checked:!0}]),t>2)for(var n=2;n<=t;n++){var i=!1;n==t&&(i=!0),e.push({value:n,checked:i})}var s=!0;for(var a in this.check_game){var r=this.check_game[a];for(var p in r["bet"])if(0==r["bet"][p]["p_single"]){s=!1;break}}return 1==s&&(0==e.length?e.push({value:"单关",checked:!0}):e.push({value:"单关",checked:!1})),this.chuan_arr=e,e},subBei:function(){this.bei>1&&this.bei--},addBei:function(){this.bei++},starBlur:function(e,t){e.detail.value<1&&(this.bei=1)},starBlur_:function(e){e<1&&(this.bei=1)},cancel:function(){this.$refs.popup.close("bottom")},open:function(e){0==this.is_open?(this.$refs.popup.open("bottom"),this.is_open=!0):(this.$refs.popup.close("bottom"),this.is_open=!1)},getUserInfo:function(){var e=this,t={};this.$api.getUserInfo(t).then((function(t){var n=t.data;e.shop_money=n.now_money,e.$refs.orderpop_.$refs.orderpop.open("bottom"),e.is_order_open=!0}))},closeopendoor:function(){this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1},openorderpop:function(){0==this.is_order_open&&this.getPlzh().length>0?this.getUserInfo():(this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1)},selectChange:function(e){this.value=e},selectChange2:function(e){this.value2=e},selectChange4:function(e){this.value4=e},selectChange5:function(e){this.value5=e},goBack:function(){uni.navigateBack()},deleteItem:function(e){this.check_game.splice(e,1),this.getChuanArr()},can_order:function(){var e=this.check_game.length;if(0==e)return!1;if(1==e){var t=!0,n=this.check_game[0];for(var i in n["bet"])"1"!=n["bet"][i]["p_single"]&&(t=!1);return 1==t}return!0}},onLoad:function(e){var t=JSON.parse(decodeURIComponent(e.data));for(var n in this.type=t["type"],this.check_game=t["check_game"],this.check_game){var i=this.check_game[n]["bet"];for(var s in i)i[s]["met"]=s,i[s]["h_name"]=this.check_game[n]["h_name"],i[s]["a_name"]=this.check_game[n]["a_name"]}this.getChuanArr()}};t.default=p},"6a4b":function(e,t,n){"use strict";n.r(t);var i=n("4bc6"),s=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a},a577:function(e,t,n){"use strict";n.r(t);var i=n("238e"),s=n("6a4b");for(var a in s)"default"!==a&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("bd33");var r,p=n("f0c5"),u=Object(p["a"])(s["default"],i["b"],i["c"],!1,null,"114d1e86",null,!1,i["a"],r);t["default"]=u.exports},bd33:function(e,t,n){"use strict";var i=n("c452"),s=n.n(i);s.a},c452:function(e,t,n){var i=n("e446");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("0d0ba930",i,!0,{sourceMap:!1,shadowMode:!1})},e446:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-114d1e86]{background:#f3f3f3}.border-style[data-v-114d1e86]{padding:%?5?% %?20?%;margin:0 %?10?%;border:1px solid #d1d1d1}.checked[data-v-114d1e86]{background-color:#09f;color:#fff}.unchecked[data-v-114d1e86]{background-color:#fff;color:#000}body.?%PAGE?%[data-v-114d1e86]{background:#f3f3f3}",""]),e.exports=t}}]);