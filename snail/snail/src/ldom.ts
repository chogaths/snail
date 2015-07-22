// Ldom.disable() [function(element obj, boolean able)]
// Ldom.property() [string function(element obj, string name)]
// Ldom.select.selected() [domelement function(element obj)]    m
// Ldom.textarea.readLine() [string[] function(element obj)]
// Ldom.checkbox.checked() [boolean function(element obj)]

declare var $;

module Ldom {

    function jquery(obj: any) {
        return obj[0] ? obj : $(obj);
    }

    function dom(obj: any): any {
        return obj[0] ? obj[0] : obj;
    }

    export function disable(obj: any, able: boolean) {
        dom(obj).disabled = able;
    }

    export function property(obj: any, name: string): string {
        return dom(obj).getAttribute(name);
    }

    export module select {
        export function selected(obj: any): any {
            var ele = dom(obj);
            return ele.options[ele.selectIndex];
        }
    }

    export module textarea {
        export function readLine(obj: any): Array<string> {
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
    }

    export module checkbox {
        export function checked(obj: any): boolean {
            return dom(obj).checked
        }
    }

}