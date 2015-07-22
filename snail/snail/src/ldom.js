// Ldom.disable() [function(element obj, boolean able)]
// Ldom.property() [string function(element obj, string name)]
// Ldom.select.selected() [domelement function(element obj)]    m
// Ldom.textarea.readLine() [string[] function(element obj)]
// Ldom.checkbox.checked() [boolean function(element obj)]

var Ldom;
(function (Ldom) {
    function jquery(obj) {
        return obj[0] ? obj : $(obj);
    }

    function dom(obj) {
        return obj[0] ? obj[0] : obj;
    }

    function disable(obj, able) {
        dom(obj).disabled = able;
    }
    Ldom.disable = disable;

    function property(obj, name) {
        return dom(obj).getAttribute(name);
    }
    Ldom.property = property;

    (function (select) {
        function selected(obj) {
            var ele = dom(obj);
            return ele.options[ele.selectIndex];
        }
        select.selected = selected;
    })(Ldom.select || (Ldom.select = {}));
    var select = Ldom.select;

    (function (textarea) {
        function readLine(obj) {
            var value = dom(obj).value;
            var texts = value.split("\n");
            var array = new Array;
            for (var index in texts) {
                var text = texts[index].trim();
                if (text != "") {
                    array.push(text);
                }
            }
            return array;
        }
        textarea.readLine = readLine;
    })(Ldom.textarea || (Ldom.textarea = {}));
    var textarea = Ldom.textarea;

    (function (checkbox) {
        function checked(obj) {
            return dom(obj).checked;
        }
        checkbox.checked = checked;
    })(Ldom.checkbox || (Ldom.checkbox = {}));
    var checkbox = Ldom.checkbox;
})(Ldom || (Ldom = {}));
//# sourceMappingURL=ldom.js.map
