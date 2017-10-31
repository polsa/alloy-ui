YUI.add("aui-form-builder-page-manager",function(e,t){var n=e.getClassName("form","builder","page","manager","content"),r=e.getClassName("form","builder","page","controls"),i=e.getClassName("form","builder","page","manager","add","last","position"),s=e.getClassName("form","builder","page","manager","delete","page"),o=e.getClassName("form","builder","page","manager","popover"),u=e.getClassName("form","builder","page","manager","switch","mode"),a=e.getClassName("form","builder","pages","popover","content"),f=e.getClassName("form","builder","pagination"),l=e.getClassName("form","builder","switch","view"),c=e.getClassName("form","builder","tabs","content"),h=e.getClassName("form","builder","tabview"),p=e.getClassName("form","builder","page","header"),d=e.getClassName("form","builder","page","header","description"),v=e.getClassName("form","builder","page","header","description","hide","border"),m=e.getClassName("form","builder","page","header","title"),g=e.getClassName("form","builder","page","header","title","hide","border"),y=e.getClassName("tab","label");e.FormBuilderPageManager=e.Base.create("form-builder-page-manager",e.Base,[],{TPL_PAGE_HEADER:'<div class="'+p+' form-inline">'+'<input placeholder="{untitledPage}" class="'+m+" "+g+' form-control" type="text" />'+'<input placeholder="{aditionalInfo}" class="'+d+" "+v+' form-control" type="text" />'+"</div>",TPL_PAGES:'<div class="'+n+'">'+'<div class="'+f+'"></div>'+'<div class="'+r+'">'+'<a href="javascript:;" class="'+l+' glyphicon glyphicon-th"></a>'+"</div></div>",TPL_POPOVER_CONTENT:'<ul class="'+a+'">'+'<li class="'+i+'">{addPageLastPosition}</li>'+'<li class="'+s+'">{deleteCurrentPage}</li>'+'<li class="'+u+'">{switchMode}</li>'+"</ul>",TPL_TABS:'<div class="'+c+'">'+'<div class="'+h+'"></div>'+"</div>",initializer:function(){var t=this.get("paginationContainer"),n=this.get("tabviewContainer"),r=this.get("pageHeader");t.append(this.TPL_PAGES),n.append(this.TPL_TABS),r.append(e.Lang.sub(this.TPL_PAGE_HEADER,{aditionalInfo:this.get("strings").aditionalInfo})),this._renderTopPagination(),this._renderFooterPagination(),this._eventHandles=[r.one("."+d).on("valuechange",e.bind(this._onDescriptionInputValueChange,this)),r.one("."+m).on("valuechange",e.bind(this._onTitleInputValueChange,this))],this.after({activePageNumberChange:this._afterActivePageNumberChange,pagesQuantityChange:this._afterPagesQuantityChange,modeChange:this._afterModeChange}),this._uiSetActivePageNumber(this.get("activePageNumber")),this._uiSetMode(this.get("mode"))},destructor:function(){var t=this._pagination,n=this._popover,r=this._tabview;t&&t.destroy(),r&&r.destroy(),n&&n.destroy(),(new e.EventHandle(this._eventHandles)).detach()},disablePaginations:function(){this._disableTabView(),this._disablePaginationView()},enablePaginations:function(){this._enableTabView(),this._enablePaginationView()},_addPage:function(){var e=this.get("pagesQuantity");this.set("pagesQuantity",e+1),this.fire("add",{quantity:e}),this._pagination.set("page",this.get("pagesQuantity")),e===0&&this.fire("updatePageContent",{newVal:1})},_addTab:function(){var e=this.get("pagesQuantity"),t=this._getTabView(),n;n=this._createUntitledPageLabel(e,e),t.add({label:e+"."+n}),t.selectChild(e-1),this._updateTabViewContent()},_afterActivePageNumberChange:function(e){this._uiSetActivePageNumber(e.newVal)},_afterModeChange:function(){this._uiSetMode(this.get("mode"))},_afterPagesQuantityChange:function(){this._uiSetPagesQuantity(this.get("pagesQuantity")),this._syncPopoverContent()},_afterTabViewSelectionChange:function(){var e,t=this._getPagination(),n=this._getTabView();e=n.getTabs().indexOf(n.getActiveTab()),e>-1&&(t.set("page",e+1),this.set("activePageNumber",e+1))},_createPagination:function(){return new e.Pagination({boundingBox:"."+f,on:{pageChange:e.bind(this._onCurrentPageChange,this)},page:this.get("activePageNumber"),strings:{prev:"&#xAB;",next:"&#xBB;"},total:this.get("pagesQuantity")})},_createPopover:function(){var t,n=this.get("paginationContainer").one("."+l),r;return t=e.Lang.sub(this.TPL_POPOVER_CONTENT,{addPageLastPosition:this.get("strings").addPageLastPosition,addPageNextPosition:this.get("strings").addPageNextPosition,deleteCurrentPage:this._getDeleteButtonString(),switchMode:this.get("strings").switchMode}),r=(new e.Popover({align:{node:n},bodyContent:t,constrain:!0,cssClass:o,position:"top",visible:!1,zIndex:50})).render(),n.after("click",r.toggle,r),n.after("clickoutside",r.hide,r),r.get("boundingBox").one("."+i).on("click",e.bind(this._onAddLastPageClick,this)),r.get("boundingBox").one("."+s).on("click",e.bind(this._onRemovePageClick,this)),r.get("boundingBox").one("."+u).on("click",e.bind(this._onSwitchViewClick,this)),r},_createTabView:function(){var t;return t=new e.TabView({boundingBox:"."+h}),t.get("contentBox").toggleView(),t.after("selectionChange",e.bind(this._afterTabViewSelectionChange,this)),t},_createUntitledPageLabel:function(t,n){var r;return r=e.Lang.sub(this.get("strings").untitledPage,{activePageNumber:t,pagesQuantity:n}),r},_disablePaginationView:function(){this._getPagination().get("items").addClass("disabled")},_disableTabView:function(){var t=this._getTabView();e.each(this._getTabView().getTabs(),function(e,n){t.disableTab(n)})},_enablePaginationView:function(){this._getPagination().get("items").removeClass("disabled")},_enableTabView:function(){var t=this._getTabView();e.each(this._getTabView().getTabs(),function(e,n){t.enableTab(n)})},_getDeleteButtonString:function(){var e;return this.get("pagesQuantity")>1?e=this.get("strings").deleteCurrentPage:e=this.get("strings").resetPage,e},_getPagination:function(){return this._pagination||(this._pagination=this._createPagination()),this._popover||(this._popover=this._createPopover()),this._pagination},_getPopover:function(){return this._popover},_getTabView:function(){var e,t=this.get("pagesQuantity"),n,r=this.get("titles");if(!this._tabview){this._tabview=this._createTabView();for(e=0;e<t;e++)n=r[e],n||(n=this._createUntitledPageLabel
(e+1,t)),this._tabview.add({label:e+1+"."+n});this._tabview.selectChild(this.get("activePageNumber")-1)}return this._tabview},_onAddLastPageClick:function(){this._addPage(),this._addTab(),this._getPopover().hide()},_onCurrentPageChange:function(e){this._getPopover().hide(),this.set("activePageNumber",e.newVal)},_onDescriptionInputValueChange:function(e){var t=this.get("descriptions");t[this.get("activePageNumber")-1]=e.newVal.trim()},_onRemovePageClick:function(){var e=this.get("activePageNumber"),t=Math.max(1,e-1),n=this.get("titles");this._getPagination().prev(),this._getPopover().hide(),this.set("pagesQuantity",this.get("pagesQuantity")-1),this.fire("remove",{removedIndex:e-1}),this._pagination.getItem(t).addClass("active"),n.splice(e-1,1),this.set("titles",n),this._removeTab(e-1),this.get("pagesQuantity")||(this._addPage(),this._addTab())},_onSwitchViewClick:function(){this._getPopover().hide(),this.get("mode")==="pagination"?this.set("mode","tabs"):this.set("mode","pagination")},_onTitleInputValueChange:function(e){var t=this.get("activePageNumber"),n=this._getTabView().getActiveTab(),r=this.get("pagesQuantity"),i=e.newVal.trim(),s=this.get("titles");s[t-1]=i,i||(i=this._createUntitledPageLabel(t,r)),n.one("."+y).set("text",t+"."+i),this.set("titles",s)},_removeTab:function(e){var t=this._getTabView();e>0&&t.selectChild(e-1),t.remove(e),this._updateTabViewContent()},_renderFooterPagination:function(){this._getPagination().render()},_renderTopPagination:function(){this._getTabView().render()},_syncPopoverContent:function(){var e=this._getPopover().get("boundingBox").one("."+s);e.text(this._getDeleteButtonString())},_uiSetActivePageNumber:function(e){var t=this.get("descriptions")[e-1],n=this.get("titles")[e-1],r=this.get("pageHeader"),i=r.one("."+d),s=this.get("pagesQuantity"),o=r.one("."+m),u;n||(u=this._createUntitledPageLabel(e,s),o.attr("placeholder",u)),o.set("value",n||""),i.set("value",t||"")},_uiSetMode:function(e){var t=this.get("activePageNumber"),n=this._getPagination(),r=this._getTabView();e==="tabs"?(n.get("contentBox").hide(),r.get("contentBox").show(),r.selectChild(t-1)):(n.get("contentBox").show(),r.get("contentBox").hide(),n.set("page",t))},_uiSetPagesQuantity:function(e){var t=this.get("activePageNumber"),n=this._getPagination();n.set("total",e),n.set("page",t),n.getItem(t).addClass("active"),this._uiSetActivePageNumber(t)},_updateTabViewContent:function(){var e,t=this.get("pagesQuantity"),n=this._getTabView().get("contentBox").all(".tab-content"),r,i=this.get("titles");for(e=0;e<t;e++)r=i[e],r||(r=this._createUntitledPageLabel(e+1,t)),n.item(e).set("text",e+1+"."+r)}},{ATTRS:{activePageNumber:{value:1},descriptions:{value:[]},mode:{validator:function(e){return e==="pagination"||e==="tabs"},value:"pagination"},pageHeader:{setter:e.one,writeOnce:!0},pagesQuantity:{value:1},paginationContainer:{setter:e.one,writeOnce:!0},strings:{value:{addPageLastPosition:"Add new page",aditionalInfo:"An aditional info about this page",deleteCurrentPage:"Delete current page",resetPage:"Reset page",switchMode:"Switch pagination mode",untitledPage:"Untitled page ({activePageNumber} of {pagesQuantity})"},writeOnce:!0},tabviewContainer:{setter:e.one,writeOnce:!0},titles:{value:[]}}})},"3.0.3-deprecated.68",{requires:["aui-pagination","aui-popover","aui-tabview","base","event-valuechange","node-base"],skinnable:!0});
