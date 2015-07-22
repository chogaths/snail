// Ldata.TYPE [enum{NULL,NUMBER,BOOLEAN,STRING,ARRAY,OBJECT}]
// Ldata.type() [Ldata.TYPE function(any data)]
// Ldata.isnull() [boolean function(any data)]
var Ldata;
(function (Ldata) {
    (function (TYPE) {
        TYPE[TYPE["NULL"] = 0] = "NULL";
        TYPE[TYPE["NUMBER"] = 1] = "NUMBER";
        TYPE[TYPE["BOOLEAN"] = 2] = "BOOLEAN";
        TYPE[TYPE["STRING"] = 3] = "STRING";
        TYPE[TYPE["ARRAY"] = 4] = "ARRAY";
        TYPE[TYPE["OBJECT"] = 5] = "OBJECT";
    })(Ldata.TYPE || (Ldata.TYPE = {}));
    var TYPE = Ldata.TYPE;

    function type(data) {
        var t = typeof data;
        switch (t) {
            case "undefined":
                return 0 /* NULL */;
            case "object":
                if (data == null) {
                    return 0 /* NULL */;
                } else if ((data.constructor).toString().indexOf("Array") != -1) {
                    return 4 /* ARRAY */;
                }
                return 5 /* OBJECT */;
            case "number":
                return 1 /* NUMBER */;
            case "string":
                return 3 /* STRING */;
            case "boolean":
                return 2 /* BOOLEAN */;
        }
    }
    Ldata.type = type;

    function isnull(data) {
        return typeof data != "undefined" && data != null;
    }
    Ldata.isnull = isnull;
})(Ldata || (Ldata = {}));
//# sourceMappingURL=ldata.js.map
