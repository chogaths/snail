// Ldata.TYPE [enum{NULL,NUMBER,BOOLEAN,STRING,ARRAY,OBJECT}]
// Ldata.type() [Ldata.TYPE function(any data)]
// Ldata.isnull() [boolean function(any data)]

module Ldata {

    export enum TYPE {
        NULL,
        NUMBER,
        BOOLEAN,
        STRING,
        ARRAY,
        OBJECT
    }

    export function type(data: any): TYPE {
        var t = typeof data;
        switch (t) {
            case "undefined":
                return TYPE.NULL;
            case "object":
                if (data == null) {
                    return TYPE.NULL;
                } else if ((data.constructor).toString().indexOf("Array") != -1) {
                    return TYPE.ARRAY;
                }
                return TYPE.OBJECT;
            case "number":
                return TYPE.NUMBER;
            case "string":
                return TYPE.STRING;
            case "boolean":
                return TYPE.BOOLEAN;
        }
    }

    export function isnull(data: any): boolean {
        return typeof data != "undefined" && data != null;
    }

}