(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88f8b12e"],{"20b6":function(e,t,a){},"29ba":function(e,t,a){var n=a("10ef");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"6ed5":function(e,t,a){var n=a("8b6d"),r=a("03a8"),l=a("67fe"),s=a("512c"),o=a("eacf"),i=[].push,c=function(e){var t=1==e,a=2==e,c=3==e,u=4==e,d=6==e,f=7==e,p=5==e||d;return function(m,g,b,h){for(var v,w,_=l(m),y=r(_),k=n(g,b,3),x=s(y.length),C=0,S=h||o,z=t?S(m,x):a||f?S(m,0):void 0;x>C;C++)if((p||C in y)&&(v=y[C],w=k(v,C,_),e))if(t)z[C]=w;else if(w)switch(e){case 3:return!0;case 5:return v;case 6:return C;case 2:i.call(z,v)}else switch(e){case 4:return!1;case 7:i.call(z,v)}return d?-1:c||u?u:z}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},7415:function(e,t,a){var n=a("a299"),r=a("655b"),l=a("c1ad"),s=r("species");e.exports=function(e){return l>=51||!n((function(){var t=[],a=t.constructor={};return a[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"7f0d":function(e,t,a){"use strict";var n=a("e1de"),r=a("6ed5").map,l=a("7415"),s=l("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"99e1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/form"}}},[e._v("总览")])],1),a("el-divider"),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-row",[a("el-col",{attrs:{md:12}},[a("el-form-item",{attrs:{label:"创建时间"}},[[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(e._f("date")(t.row.createdAt)))])]],2)],1),a("el-col",{attrs:{md:12}},[a("el-form-item",{attrs:{label:"修改时间"}},[[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(e._f("date")(t.row.updatedAt)))])]],2)],1),a("el-col",{attrs:{md:12}},[a("el-form-item",{attrs:{label:"浏览次数"}},[a("i",{staticClass:"el-icon-view"}),e._v(" "),a("span",{staticClass:"color-green"},[e._v(e._s(t.row.browse))])])],1),a("el-col",{attrs:{md:24}},[a("el-form-item",{attrs:{label:"详情轮播图"}},[[a("el-row",e._l(t.row.skills,(function(e){return a("el-col",{key:e._id,staticStyle:{margin:"0 10px"},attrs:{md:6}},[a("el-image",{attrs:{src:e.image}})],1)})),1)]],2)],1)],1)],1)]}}])}),a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"_id",label:"编号",width:"230"}}),a("el-table-column",{attrs:{label:"商品分类",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",[e._v(e._s(t.row.categoryes))])]}}])}),a("el-table-column",{attrs:{prop:"name",label:"商品名称",width:"150"}}),a("el-table-column",{attrs:{label:"图片",width:"120"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"98px"},attrs:{src:e.row.image,alt:""}})]}}])}),a("el-table-column",{attrs:{label:"价格",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" ￥："+e._s(t.row.price)+" ")]}}])}),a("el-table-column",{attrs:{prop:"stock",label:"库存",width:"80"}}),a("el-table-column",{attrs:{prop:"describe",label:"描述"}}),a("el-table-column",{attrs:{prop:"user",label:"推荐指数",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.row.recommend,callback:function(a){e.$set(t.row,"recommend",a)},expression:"scope.row.recommend"}})]}}])}),a("el-table-column",{attrs:{label:"state",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("el-tag",{attrs:{type:"success"}},[e._v("上架中")]):0==t.row.state?a("el-tag",{attrs:{type:"warning"}},[e._v("待上架")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"上架时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(e._f("date")(t.row.updatedAt)))])]}}])}),e.flag>10?a("el-table-column",{attrs:{label:"operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"el-icon-delete-solid",attrs:{type:"danger"},nativeOn:{click:function(a){return a.preventDefault(),e.offline(t.row)}}},[e._v("下架")])]}}],null,!1,3286178616)}):e._e()],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,50,100],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},r=[],l=a("4833"),s=(a("6a61"),a("48e3"),a("7f0d"),a("1472")),o=a.n(s),i={filters:{date:function(e){return o()(e).format("YYYY-MM-DD hh:mm")}},data:function(){return{flag:"",loading:!0,currentPage:1,pagesize:10,tableData:[],selections:[]}},created:function(){var e=this;setTimeout((function(){e.loading=!1}),500),this.flags(),this.list()},methods:{list:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/goodsList");case 2:a=t.sent,e.tableData=a.data;case 4:case"end":return t.stop()}}),t)})))()},offline:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.state=!1,a.next=3,t.$http.put("/goods/".concat(e._id),e);case 3:a.sent,t.$message({type:"warning",message:"已下架"}),t.list();case 6:case"end":return a.stop()}}),a)})))()},flags:function(){var e=JSON.parse(window.localStorage.getItem("power"));this.flag=e,console.log(this.flag)},handleClick:function(e){},handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e},handleSelectionChange:function(e){this.selections=e.map((function(e){return e}))},tables:function(){var e=this.selections;this.$message({message:"你选中了".concat(e.length,"条数据"),type:"success"})}}},c=i,u=(a("d691"),a("4ac2")),d=Object(u["a"])(c,n,r,!1,null,"58be0ed4",null);t["default"]=d.exports},d691:function(e,t,a){"use strict";a("20b6")},eacf:function(e,t,a){var n=a("ef03"),r=a("29ba"),l=a("655b"),s=l("species");e.exports=function(e,t){var a;return r(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[s],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}}}]);
//# sourceMappingURL=chunk-88f8b12e.f6e08540.js.map