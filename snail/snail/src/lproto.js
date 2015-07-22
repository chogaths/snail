// Lproto.enumerate() [string function(string name)]
// Lproto.stringify() [object{ content: protostring } function(object{any} data, string name)]
// Lproro.emptyProto [object{ content: protostring }]
var Lproto;
(function (Lproto) {
    function type(data) {
        var type = typeof data;
        return type == "undefined" ? "undefined" : type != "object" ? type : data == null ? "null" : (data.constructor).toString().indexOf("Array") != -1 ? "array" : "structure";
    }

    function named(name) {
        return name == "" ? name : name + ": ";
    }

    var enumFlag = "_%$PROTO_ENUM$%";

    function unenumerate(data) {
        return data.length <= enumFlag.length ? '"' + data + '"' : data.substring(data.length - enumFlag.length) == enumFlag ? data.substr(0, data.length - enumFlag.length) : '"' + data + '"';
    }

    function enumerate(data) {
        return data + enumFlag;
    }
    Lproto.enumerate = enumerate;

    function marshal(data, name) {
        switch (type(data)) {
            case "number":
            case "boolean":
                return named(name) + data.toString();
            case "string":
                return named(name) + unenumerate(data);
            case "array":
                var res = "";
                for (var index in data) {
                    res += marshal(data[index], name) + " ";
                }
                return res;
            case "structure":
                var res = "";
                for (var index in data) {
                    res += marshal(data[index], index) + " ";
                }
                return name == "" ? res : name + " { " + res + "}";
            default:
                return "";
        }
    }

    function stringify(data, name) {
        if (typeof name === "undefined") { name = ""; }
        return { content: marshal(data, name) };
    }
    Lproto.stringify = stringify;

    Lproto.emptyProto = { content: "" };
})(Lproto || (Lproto = {}));
//# sourceMappingURL=lproto.js.map
