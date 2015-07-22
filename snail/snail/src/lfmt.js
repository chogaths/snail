// Lfmt.format() [string function(string, ...)]
var Lfmt;
(function (Lfmt) {
    function format() {
        var res = arguments[0] || "";
        for (var i = 1; i < arguments.length; i++) {
            res = res.replace(/%s/, arguments[i]);
        }
        return res;
    }
    Lfmt.format = format;
})(Lfmt || (Lfmt = {}));
//# sourceMappingURL=lfmt.js.map
