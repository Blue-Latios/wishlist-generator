(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{270:function(e,t){e.exports={"Clay for the Den":[["Clay",20]]}},271:function(e,t){e.exports={"Green Goo":{id:1886},"Yellow Goo":{id:1887},"Orange Goo":{id:1888},"Red Goo":{id:1889},"Purple Goo":{id:1890},"Blue Goo":{id:1891},"Green Ooze":{id:1892},"Yellow Ooze":{id:1893},"Orange Ooze":{id:1894},"Red Ooze":{id:1895},"Purple Ooze":{id:1896},"Blue Ooze":{id:1897},"Green Sludge":{id:1898},"Yellow Sludge":{id:1899},"Orange Sludge":{id:1900},"Red Sludge":{id:1901},"Purple Sludge":{id:1902},"Blue Sludge":{id:1903},"Glass Beaker":{id:10868,baldwin:{yield:2,cost:50,time:30,exp:35,items:[["Green Ooze",1],["Green Sludge",1],["Broken Bottle",3]]}},"Sizzling Phosphorus":{id:10883,baldwin:{yield:1,cost:150,time:40,exp:65,items:[["Yellow Sludge",1],["Red Sludge",1],["Glass Beaker",1]]}},"Rusted Treasure Chest":{id:574,gathering:{method:"Digging",level:1,locations:["All"]},monsters:[["Black Iron Creeper","Very Rarely"],["Blooming Strangler","Very Rarely"],["Blue Tang Hippogriff","Very Rarely"],["Construction Mith","Very Rarely"],["Dodo","Very Rarely"],["Dream Eater","Very Rarely"],["Longneck Magi","Very Rarely"],["Red-Winged Owlcat","Very Rarely"],["Scrapmetal Tracker","Very Rarely"],["Tengu","Very Rarely"],["Wildwood Owl","Very Rarely"]]},"Iron Treasure Chest":{id:575,gathering:{method:"Digging",level:1,locations:["All"]}},"Gilded Treasure Chest":{id:576,gathering:{method:"Digging",level:1,locations:["All"]}},"Sweetheart Swan":{id:21525,swap:[["Sparrow Skull",25],["Carpenter Wax",20]]},"Sparrow Skull":{id:192,containers:["Broken Bone Bottle"],gathering:{method:"Scavenging",level:1,locations:["Plague","Wind","Light"]},monsters:[["Death Seeker","Scarce"],["Emerald Webwing","Scarce"],["Steam Gyre","Scarce"]]},"Carpenter Wax":{id:5707,monsters:[["Coral Carpenter","Common"]]},Clay:{id:177,gathering:{method:"Digging",level:1,locations:["Lightning","Light","Nature"]},monsters:[["Venerable Shalebuck ","Scarce"]]},"Broken Bottle":{id:788},"Broken Penny Jar":{id:787},"Broken Bone Bottle":{id:793}}},272:function(e,t){e.exports={"Black Iron Creeper":"Golem Workshop","Blooming Strangler":"Woodland Path","Blue Tang Hippogriff":"Harpy's Roost","Construction Mith":"Golem Workshop","Coral Carpenter":"Training Fields","Death Seeker":"Harpy's Roost",Dodo:"Harpy's Roost","Dream Eater":"Bamboo Falls","Emerald Webwing":"Training Fields","Heartred Croaker":"Mire","Longneck Magi":"Arena","Red-Winged Owlcat":"Scorched Forest","Scrapmetal Tracker":"Golem Workshop","Steam Gyre":"Scorched Forest",Tengu:"Bamboo Falls","Venerable Shalebuck":"Boreal Wood","Wildwood Owl":"Woodland Path"}},274:function(e,t,r){var content=r(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(97).default)("1147967c",content,!0,{sourceMap:!1})},278:function(e,t,r){"use strict";r(274)},279:function(e,t,r){var n=r(96)(!1);n.push([e.i,".container{padding:10px;margin:5px;font-size:14px}.text-bold{font-weight:700;font-size:20px}.preformat{white-space:pre-wrap;padding:5px;font-size:12px}",""]),e.exports=n},283:function(e,t,r){"use strict";r.r(t);r(11),r(25),r(1),r(3),r(15),r(18);var n=r(270),o=r.n(n),l=r(271),d=r.n(l),c=r(272),h=r.n(c);function f(e){var t=e.split("\n"),s="";return t.forEach((function(line){s+=m(line)+"<br>"})),[s,s]}function m(line){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s="";return"Hibden:"===line.substring(0,7)?(s+="<b>"+line.substring(7,line.length)+"</b><br><ul>",o.a[line.substring(7,line.length)].forEach((function(e){s=s.concat("<li>",e[1]," of ",m(e[0]),"</li>")})),s.concat("</ul><br>")):d.a[line]?(d.a[line].id>=574&&d.a[line].id<=576?s=line:d.a[line].containers||d.a[line].monsters||d.a[line].gathering||d.a[line].baldwin||d.a[line].swap?(s+=line+"<br>",d.a[line].baldwin&&(2!=e&&(s+="<i>Baldwin</i><br>"),s+=d.a[line].baldwin.yield>1?"<i>(Recipe: x"+d.a[line].baldwin.yield+")</i><ul>":"<ul>",d.a[line].baldwin.items.forEach((function(e){s=s.concat("<li>",e[1]," of ",m(e[0],2),"</li>")})),s+="</ul>"),d.a[line].containers&&(s+="Found in:<br><ul>",d.a[line].containers.forEach((function(e){s=s.concat("<li>",m(e),"</li>")})),s+="</ul>"),d.a[line].gathering&&(s=s.concat(d.a[line].gathering.method," Lv. ",d.a[line].gathering.level," in: "),"All"==d.a[line].gathering.locations[0]?s+="All locations.<br>":(s+=d.a[line].gathering.locations[0],d.a[line].gathering.locations.slice(1).forEach((function(e){s+=", "+e})),s+="<br>")),d.a[line].monsters&&(s+="Dropped by:<br><ul>",d.a[line].monsters.forEach((function(e){s+="<li>"+e[0]+" in "+h.a[e[0]]+" ("+e[1]+")</li>"})),s+="</ul>"),d.a[line].swap&&(1!=e&&(s+="<i>Swipp Swap</i><br><ul>"),d.a[line].swap.forEach((function(e){s=s.concat("<li>",e[1]," of ",m(e[0],1),"</li>")})),s+="</ul>")):s=line,s):line.concat(" is not in the database yet!<br>")}var v={data:function(){return{result:"",resultBBCode:"",resultVisual:"",textStuff:""}},head:function(){return{title:"Database Shortcut"}},methods:{generate:function(){var e=f(this.textStuff);this.result=e[0],this.resultBBCode=e[1]},generateVisual:function(){""!=this.resultBBCode&&(this.resultVisual=this.resultBBCode)}}},w=(r(278),r(64)),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),e._v("\n  tl;dr, game database info simplified."),r("br"),r("br"),e._v(" "),e._m(1),e._v("\n  \n  Enter the item name in the box below."),r("br"),e._v("\n  You can enter multiple item names by seperating them with linebreaks"),r("br"),e._v("\n  (the Enter key stuff). Press the Submit button to show results."),r("br"),r("br"),e._v("\n  \n  Example input:"),r("br"),e._v("\n  Glass Beaker"),r("br"),e._v("\n  Rusted Treasure Chest"),r("br"),r("br"),e._v("\n  \n  The Print button prints out a nice detailed visual representation BBCode"),r("br"),e._v("\n  which you can preview in a Forum post or a dragon's bio."),r("br"),e._v(" "),e._m(2),r("br"),r("br"),e._v('\n  \n  Special feature: For Hibernal Den items, you can start input a line with "Hibden:"'),r("br"),e._v("\n  followed by the name of the Hibernal Den Task."),r("br"),e._v("\n  Hibden:Clay for the Den"),r("br"),r("br"),e._v("\n  \n  Note: make sure to leave no spaces after the colon (:) if inputting"),r("br"),e._v("\n  a Hibden task title."),r("br"),e._v("\n  Some items, like Broken Bottles, have their full info omitted for ease"),r("br"),e._v("\n  of use. "),r("b",[e._v("Chests are mostly RNG so do not try to focus to get an item from chests.")]),r("br"),r("br"),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textStuff,expression:"textStuff"}],staticStyle:{width:"90%"},attrs:{placeholder:"Enter item name here."},domProps:{value:e.textStuff},on:{input:function(t){t.target.composing||(e.textStuff=t.target.value)}}}),r("br"),e._v(" "),r("button",{on:{click:e.generate}},[e._v("Submit")]),e._v(" "),r("button",{on:{click:e.generateVisual}},[e._v("Print")]),r("br"),r("br"),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.result)}}),e._v(" "),""!=e.resultVisual?r("div",[e._v("Copy everything from here:"),r("br")]):e._e(),e._v(" "),r("p",{staticClass:"preformat"},[e._v(e._s(e.resultVisual))])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-bold"},[e._v("What is this?"),r("br")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-bold"},[e._v("How to:"),r("br")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b",[e._v("At present, the items included are focused on Baldwin, Swipp, and"),r("br"),e._v("\n  Hibernal Den Task items.")])}],!1,null,null,null);t.default=component.exports}}]);