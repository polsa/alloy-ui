if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-datatable-text-cell-editor/aui-datatable-text-cell-editor.js']) {
   __coverage__['build/aui-datatable-text-cell-editor/aui-datatable-text-cell-editor.js'] = {"path":"build/aui-datatable-text-cell-editor/aui-datatable-text-cell-editor.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":61}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":44,"column":84}},"2":{"start":{"line":3,"column":0},"end":{"line":4,"column":69}},"3":{"start":{"line":15,"column":0},"end":{"line":39,"column":3}},"4":{"start":{"line":41,"column":0},"end":{"line":41,"column":34}}},"branchMap":{},"code":["(function () { YUI.add('aui-datatable-text-cell-editor', function (A, NAME) {","","var CSS_FORM_CONTROL = A.getClassName('form', 'control'),","    CSS_CELLEDITOR_ELEMENT = A.getClassName('celleditor', 'element');","","/**"," * TextCellEditor class."," *"," * @class A.TextCellEditor"," * @extends A.BaseCellEditor"," * @param {Object} config Object literal specifying widget configuration"," * properties."," * @constructor"," */","var TextCellEditor = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'textCellEditor',","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.BaseCellEditor,","","    prototype: {","        ELEMENT_TEMPLATE: '<input autocomplete=\"off\" class=\"' +","            [CSS_CELLEDITOR_ELEMENT, CSS_FORM_CONTROL].join(' ') + '\" type=\"text\" />'","    }","});","","A.TextCellEditor = TextCellEditor;","","","}, '3.0.3-deprecated.68', {\"requires\": [\"aui-datatable-base-options-cell-editor\"]});","","}());"]};
}
var __cov_LCUE3DJU3VZEZzLkTi0j3w = __coverage__['build/aui-datatable-text-cell-editor/aui-datatable-text-cell-editor.js'];
__cov_LCUE3DJU3VZEZzLkTi0j3w.s['1']++;YUI.add('aui-datatable-text-cell-editor',function(A,NAME){__cov_LCUE3DJU3VZEZzLkTi0j3w.f['1']++;__cov_LCUE3DJU3VZEZzLkTi0j3w.s['2']++;var CSS_FORM_CONTROL=A.getClassName('form','control'),CSS_CELLEDITOR_ELEMENT=A.getClassName('celleditor','element');__cov_LCUE3DJU3VZEZzLkTi0j3w.s['3']++;var TextCellEditor=A.Component.create({NAME:'textCellEditor',EXTENDS:A.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<input autocomplete="off" class="'+[CSS_CELLEDITOR_ELEMENT,CSS_FORM_CONTROL].join(' ')+'" type="text" />'}});__cov_LCUE3DJU3VZEZzLkTi0j3w.s['4']++;A.TextCellEditor=TextCellEditor;},'3.0.3-deprecated.68',{'requires':['aui-datatable-base-options-cell-editor']});
