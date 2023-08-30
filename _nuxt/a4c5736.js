(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{357:function(t,e,r){var content=r(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(97).default)("6c0dbf8c",content,!0,{sourceMap:!1})},555:function(t,e,r){"use strict";r(357)},556:function(t,e,r){var n=r(96)((function(i){return i[1]}));n.push([t.i,".container{font-size:14px;margin:5px;padding:10px}.text-bold{font-size:20px;font-weight:700}.preformat{font-size:12px;padding:5px;white-space:pre-wrap}",""]),n.locals={},t.exports=n},750:function(t,e,r){"use strict";r.r(e);r(354),r(355),r(356);var n={data:function(){return{result:"",resultBBCode:"",resultVisual:"",textStuff:""}},head:function(){return{title:"Baldwin Calculator"}},methods:{generate:function(){var t=this.textStuff;this.resultFull=t[0],this.resultBBCode=t[1]},generateVisual:function(){""!=this.resultBBCode&&(this.resultVisual=this.resultBBCode)}}},o=(r(555),r(64)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v("\n  tl;dr, baldwin info simplified. Unlike the database shortcut,"),e("br"),t._v("\n  this tool calculates total basic items, the cost, the exp yielded."),e("br"),e("br"),t._v(" "),t._m(2),t._v("\n  \n  Enter the number of items, followed by item name in the box below."),e("br"),t._v("\n  You can enter multiple item names by seperating them with linebreaks"),e("br"),t._v("\n  (the Enter key stuff). Press the Submit button to show results."),e("br"),e("br"),t._v("\n  \n  Example input:"),e("br"),t._v("\n  2 Glass Beaker"),e("br"),t._v("\n  4 Reinforced Glass Beaker"),e("br"),e("br"),t._v("\n  \n  The Print button prints out a nice detailed visual representation BBCode"),e("br"),t._v("\n  which you can preview in a Forum post or a dragon's bio."),e("br"),t._v("\n  \n  Some items, like Broken Bottles, have their full info omitted for ease"),e("br"),t._v("\n  of use. "),e("b",[t._v("Chests are mostly RNG so do not try to focus to get an item from chests.")]),e("br"),e("br"),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textStuff,expression:"textStuff"}],staticStyle:{width:"90%"},attrs:{placeholder:"Enter item name here."},domProps:{value:t.textStuff},on:{input:function(e){e.target.composing||(t.textStuff=e.target.value)}}}),e("br"),t._v(" "),e("button",{on:{click:t.generate}},[t._v("Submit")]),t._v(" "),e("button",{on:{click:t.generateVisual}},[t._v("Print")]),e("br"),e("br"),t._v(" "),e("p",[t._v(t._s(t.result))]),t._v(" "),""!=t.resultVisual?e("div",[t._v("Copy everything from here:"),e("br")]):t._e(),t._v(" "),e("p",{staticClass:"preformat"},[t._v(t._s(t.resultVisual))])])}),[function(){var t=this._self._c;return t("div",{staticClass:"text-bold"},[this._v("WIP"),t("br"),t("br"),t("br")])},function(){var t=this._self._c;return t("div",{staticClass:"text-bold"},[this._v("What is this?"),t("br")])},function(){var t=this._self._c;return t("div",{staticClass:"text-bold"},[this._v("How to:"),t("br")])}],!1,null,null,null);e.default=component.exports}}]);