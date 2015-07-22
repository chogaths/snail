// Lfmt.format() [string function(string, ...)]

module Lfmt {

    export function format() {
        var res = arguments[0] || "";
        for (var i = 1; i < arguments.length; i++) {
            res = res.replace(/%s/, arguments[i]);
        }
        return res;
    }

} 