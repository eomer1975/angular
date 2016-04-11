'use strict';var core_1 = require('angular2/core');
var COMPONENT_SELECTOR = /^[\w|-]*$/;
var SKEWER_CASE = /-(\w)/g;
var directiveResolver = new core_1.DirectiveResolver();
function getComponentInfo(type) {
    var resolvedMetadata = directiveResolver.resolve(type);
    var selector = resolvedMetadata.selector;
    if (!selector.match(COMPONENT_SELECTOR)) {
        throw new Error('Only selectors matching element names are supported, got: ' + selector);
    }
    var selector = selector.replace(SKEWER_CASE, function (all, letter) { return letter.toUpperCase(); });
    return {
        type: type,
        selector: selector,
        inputs: parseFields(resolvedMetadata.inputs),
        outputs: parseFields(resolvedMetadata.outputs)
    };
}
exports.getComponentInfo = getComponentInfo;
function parseFields(names) {
    var attrProps = [];
    if (names) {
        for (var i = 0; i < names.length; i++) {
            var parts = names[i].split(':');
            var prop = parts[0].trim();
            var attr = (parts[1] || parts[0]).trim();
            var capitalAttr = attr.charAt(0).toUpperCase() + attr.substr(1);
            attrProps.push({
                prop: prop,
                attr: attr,
                bracketAttr: "[" + attr + "]",
                parenAttr: "(" + attr + ")",
                bracketParenAttr: "[(" + attr + ")]",
                onAttr: "on" + capitalAttr,
                bindAttr: "bind" + capitalAttr,
                bindonAttr: "bindon" + capitalAttr
            });
        }
    }
    return attrProps;
}
exports.parseFields = parseFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWNNRTdOM1JtLnRtcC9hbmd1bGFyMi9zcmMvdXBncmFkZS9tZXRhZGF0YS50cyJdLCJuYW1lcyI6WyJnZXRDb21wb25lbnRJbmZvIiwicGFyc2VGaWVsZHMiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUF5RCxlQUFlLENBQUMsQ0FBQTtBQUd6RSxJQUFJLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztBQUNyQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDM0IsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHdCQUFpQixFQUFFLENBQUM7QUFvQmhELDBCQUFpQyxJQUFVO0lBQ3pDQSxJQUFJQSxnQkFBZ0JBLEdBQXNCQSxpQkFBaUJBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzFFQSxJQUFJQSxRQUFRQSxHQUFHQSxnQkFBZ0JBLENBQUNBLFFBQVFBLENBQUNBO0lBQ3pDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3hDQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSw0REFBNERBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBO0lBQzNGQSxDQUFDQTtJQUNEQSxJQUFJQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxFQUFFQSxVQUFDQSxHQUFHQSxFQUFFQSxNQUFjQSxJQUFLQSxPQUFBQSxNQUFNQSxDQUFDQSxXQUFXQSxFQUFFQSxFQUFwQkEsQ0FBb0JBLENBQUNBLENBQUNBO0lBQzVGQSxNQUFNQSxDQUFDQTtRQUNMQSxJQUFJQSxFQUFFQSxJQUFJQTtRQUNWQSxRQUFRQSxFQUFFQSxRQUFRQTtRQUNsQkEsTUFBTUEsRUFBRUEsV0FBV0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUM1Q0EsT0FBT0EsRUFBRUEsV0FBV0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxDQUFDQTtLQUMvQ0EsQ0FBQ0E7QUFDSkEsQ0FBQ0E7QUFiZSx3QkFBZ0IsbUJBYS9CLENBQUE7QUFFRCxxQkFBNEIsS0FBZTtJQUN6Q0MsSUFBSUEsU0FBU0EsR0FBZUEsRUFBRUEsQ0FBQ0E7SUFDL0JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1FBQ1ZBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQ3RDQSxJQUFJQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNoQ0EsSUFBSUEsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDM0JBLElBQUlBLElBQUlBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQ3pDQSxJQUFJQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoRUEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBV0E7Z0JBQ3ZCQSxJQUFJQSxFQUFFQSxJQUFJQTtnQkFDVkEsSUFBSUEsRUFBRUEsSUFBSUE7Z0JBQ1ZBLFdBQVdBLEVBQUVBLE1BQUlBLElBQUlBLE1BQUdBO2dCQUN4QkEsU0FBU0EsRUFBRUEsTUFBSUEsSUFBSUEsTUFBR0E7Z0JBQ3RCQSxnQkFBZ0JBLEVBQUVBLE9BQUtBLElBQUlBLE9BQUlBO2dCQUMvQkEsTUFBTUEsRUFBRUEsT0FBS0EsV0FBYUE7Z0JBQzFCQSxRQUFRQSxFQUFFQSxTQUFPQSxXQUFhQTtnQkFDOUJBLFVBQVVBLEVBQUVBLFdBQVNBLFdBQWFBO2FBQ25DQSxDQUFDQSxDQUFDQTtRQUNMQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtBQUNuQkEsQ0FBQ0E7QUFyQmUsbUJBQVcsY0FxQjFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIERpcmVjdGl2ZVJlc29sdmVyLCBEaXJlY3RpdmVNZXRhZGF0YX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi91dGlsJztcblxudmFyIENPTVBPTkVOVF9TRUxFQ1RPUiA9IC9eW1xcd3wtXSokLztcbnZhciBTS0VXRVJfQ0FTRSA9IC8tKFxcdykvZztcbnZhciBkaXJlY3RpdmVSZXNvbHZlciA9IG5ldyBEaXJlY3RpdmVSZXNvbHZlcigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wIHtcbiAgcHJvcDogc3RyaW5nO1xuICBhdHRyOiBzdHJpbmc7XG4gIGJyYWNrZXRBdHRyOiBzdHJpbmc7XG4gIGJyYWNrZXRQYXJlbkF0dHI6IHN0cmluZztcbiAgcGFyZW5BdHRyOiBzdHJpbmc7XG4gIG9uQXR0cjogc3RyaW5nO1xuICBiaW5kQXR0cjogc3RyaW5nO1xuICBiaW5kb25BdHRyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50SW5mbyB7XG4gIHR5cGU6IFR5cGU7XG4gIHNlbGVjdG9yOiBzdHJpbmc7XG4gIGlucHV0czogQXR0clByb3BbXTtcbiAgb3V0cHV0czogQXR0clByb3BbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvbmVudEluZm8odHlwZTogVHlwZSk6IENvbXBvbmVudEluZm8ge1xuICB2YXIgcmVzb2x2ZWRNZXRhZGF0YTogRGlyZWN0aXZlTWV0YWRhdGEgPSBkaXJlY3RpdmVSZXNvbHZlci5yZXNvbHZlKHR5cGUpO1xuICB2YXIgc2VsZWN0b3IgPSByZXNvbHZlZE1ldGFkYXRhLnNlbGVjdG9yO1xuICBpZiAoIXNlbGVjdG9yLm1hdGNoKENPTVBPTkVOVF9TRUxFQ1RPUikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgc2VsZWN0b3JzIG1hdGNoaW5nIGVsZW1lbnQgbmFtZXMgYXJlIHN1cHBvcnRlZCwgZ290OiAnICsgc2VsZWN0b3IpO1xuICB9XG4gIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoU0tFV0VSX0NBU0UsIChhbGwsIGxldHRlcjogc3RyaW5nKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgaW5wdXRzOiBwYXJzZUZpZWxkcyhyZXNvbHZlZE1ldGFkYXRhLmlucHV0cyksXG4gICAgb3V0cHV0czogcGFyc2VGaWVsZHMocmVzb2x2ZWRNZXRhZGF0YS5vdXRwdXRzKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWVsZHMobmFtZXM6IHN0cmluZ1tdKTogQXR0clByb3BbXSB7XG4gIHZhciBhdHRyUHJvcHM6IEF0dHJQcm9wW10gPSBbXTtcbiAgaWYgKG5hbWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcnRzID0gbmFtZXNbaV0uc3BsaXQoJzonKTtcbiAgICAgIHZhciBwcm9wID0gcGFydHNbMF0udHJpbSgpO1xuICAgICAgdmFyIGF0dHIgPSAocGFydHNbMV0gfHwgcGFydHNbMF0pLnRyaW0oKTtcbiAgICAgIHZhciBjYXBpdGFsQXR0ciA9IGF0dHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhdHRyLnN1YnN0cigxKTtcbiAgICAgIGF0dHJQcm9wcy5wdXNoKDxBdHRyUHJvcD57XG4gICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgIGF0dHI6IGF0dHIsXG4gICAgICAgIGJyYWNrZXRBdHRyOiBgWyR7YXR0cn1dYCxcbiAgICAgICAgcGFyZW5BdHRyOiBgKCR7YXR0cn0pYCxcbiAgICAgICAgYnJhY2tldFBhcmVuQXR0cjogYFsoJHthdHRyfSldYCxcbiAgICAgICAgb25BdHRyOiBgb24ke2NhcGl0YWxBdHRyfWAsXG4gICAgICAgIGJpbmRBdHRyOiBgYmluZCR7Y2FwaXRhbEF0dHJ9YCxcbiAgICAgICAgYmluZG9uQXR0cjogYGJpbmRvbiR7Y2FwaXRhbEF0dHJ9YFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhdHRyUHJvcHM7XG59XG4iXX0=