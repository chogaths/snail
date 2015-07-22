// Lproto.enumerate() [string function(string name)]
// Lproto.stringify() [object{ content: protostring } function(object{any} data, string name)]
// Lproro.emptyProto [object{ content: protostring }]

module Lproto {

    function type(data: any): string {
        var type: string = typeof data;
        return type == "undefined" ? "undefined" : type != "object" ? type : data == null ? "null" : (data.constructor).toString().indexOf("Array") != -1 ? "array" : "structure";
    }

    function named(name: string): string {
        return name == "" ? name : name + ": ";
    }

    var enumFlag = "_%$PROTO_ENUM$%";

    function unenumerate(data: string): string {
        return data.length <= enumFlag.length ? '"' + data + '"' : data.substring(data.length - enumFlag.length) == enumFlag ? data.substr(0, data.length - enumFlag.length) : '"' + data + '"';
    }

    export function enumerate(data: string): string {
        return data + enumFlag;
    }

    function marshal(data: any, name: string): string {
        switch (type(data)) {
            case "number":
            case "boolean":
                return named(name) + data.toString();
            case "string":
                return named(name) + unenumerate(data);
            case "array":
                var res: string = "";
                for (var index in data) {
                    res += marshal(data[index], name) + " ";
                }
                return res;
            case "structure":
                var res: string = "";
                for (var index in data) {
                    res += marshal(data[index], index) + " ";
                }
                return name == "" ? res : name + " { " + res + "}";
            default:
                return "";
        }
    }

    export function stringify(data: any, name: string = ""): any {
        return { content: marshal(data, name) };
    }

    export var emptyProto = { content: "" };

}