'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require("angular2/src/facade/lang");
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require("angular2/src/facade/collection");
var api_1 = require("angular2/src/core/render/api");
var di_1 = require("angular2/src/core/di");
var render_store_1 = require('angular2/src/web_workers/shared/render_store');
var view_1 = require('angular2/src/core/metadata/view');
var serialized_types_1 = require('./serialized_types');
// PRIMITIVE is any type that does not need to be serialized (string, number, boolean)
// We set it to String so that it is considered a Type.
exports.PRIMITIVE = String;
var Serializer = (function () {
    function Serializer(_renderStore) {
        this._renderStore = _renderStore;
    }
    Serializer.prototype.serialize = function (obj, type) {
        var _this = this;
        if (!lang_1.isPresent(obj)) {
            return null;
        }
        if (lang_1.isArray(obj)) {
            return obj.map(function (v) { return _this.serialize(v, type); });
        }
        if (type == exports.PRIMITIVE) {
            return obj;
        }
        if (type == RenderStoreObject) {
            return this._renderStore.serialize(obj);
        }
        else if (type === api_1.RenderComponentType) {
            return this._serializeRenderComponentType(obj);
        }
        else if (type === view_1.ViewEncapsulation) {
            return lang_1.serializeEnum(obj);
        }
        else if (type === serialized_types_1.LocationType) {
            return this._serializeLocation(obj);
        }
        else {
            throw new exceptions_1.BaseException("No serializer for " + type.toString());
        }
    };
    Serializer.prototype.deserialize = function (map, type, data) {
        var _this = this;
        if (!lang_1.isPresent(map)) {
            return null;
        }
        if (lang_1.isArray(map)) {
            var obj = [];
            map.forEach(function (val) { return obj.push(_this.deserialize(val, type, data)); });
            return obj;
        }
        if (type == exports.PRIMITIVE) {
            return map;
        }
        if (type == RenderStoreObject) {
            return this._renderStore.deserialize(map);
        }
        else if (type === api_1.RenderComponentType) {
            return this._deserializeRenderComponentType(map);
        }
        else if (type === view_1.ViewEncapsulation) {
            return view_1.VIEW_ENCAPSULATION_VALUES[map];
        }
        else if (type === serialized_types_1.LocationType) {
            return this._deserializeLocation(map);
        }
        else {
            throw new exceptions_1.BaseException("No deserializer for " + type.toString());
        }
    };
    Serializer.prototype.mapToObject = function (map, type) {
        var _this = this;
        var object = {};
        var serialize = lang_1.isPresent(type);
        map.forEach(function (value, key) {
            if (serialize) {
                object[key] = _this.serialize(value, type);
            }
            else {
                object[key] = value;
            }
        });
        return object;
    };
    /*
     * Transforms a Javascript object (StringMap) into a Map<string, V>
     * If the values need to be deserialized pass in their type
     * and they will be deserialized before being placed in the map
     */
    Serializer.prototype.objectToMap = function (obj, type, data) {
        var _this = this;
        if (lang_1.isPresent(type)) {
            var map = new collection_1.Map();
            collection_1.StringMapWrapper.forEach(obj, function (val, key) { map.set(key, _this.deserialize(val, type, data)); });
            return map;
        }
        else {
            return collection_1.MapWrapper.createFromStringMap(obj);
        }
    };
    Serializer.prototype._serializeLocation = function (loc) {
        return {
            'href': loc.href,
            'protocol': loc.protocol,
            'host': loc.host,
            'hostname': loc.hostname,
            'port': loc.port,
            'pathname': loc.pathname,
            'search': loc.search,
            'hash': loc.hash,
            'origin': loc.origin
        };
    };
    Serializer.prototype._deserializeLocation = function (loc) {
        return new serialized_types_1.LocationType(loc['href'], loc['protocol'], loc['host'], loc['hostname'], loc['port'], loc['pathname'], loc['search'], loc['hash'], loc['origin']);
    };
    Serializer.prototype._serializeRenderComponentType = function (obj) {
        return {
            'id': obj.id,
            'encapsulation': this.serialize(obj.encapsulation, view_1.ViewEncapsulation),
            'styles': this.serialize(obj.styles, exports.PRIMITIVE)
        };
    };
    Serializer.prototype._deserializeRenderComponentType = function (map) {
        return new api_1.RenderComponentType(map['id'], this.deserialize(map['encapsulation'], view_1.ViewEncapsulation), this.deserialize(map['styles'], exports.PRIMITIVE));
    };
    Serializer = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [render_store_1.RenderStore])
    ], Serializer);
    return Serializer;
})();
exports.Serializer = Serializer;
var RenderStoreObject = (function () {
    function RenderStoreObject() {
    }
    return RenderStoreObject;
})();
exports.RenderStoreObject = RenderStoreObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtWWRjclFDRTYudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VyaWFsaXplci50cyJdLCJuYW1lcyI6WyJTZXJpYWxpemVyIiwiU2VyaWFsaXplci5jb25zdHJ1Y3RvciIsIlNlcmlhbGl6ZXIuc2VyaWFsaXplIiwiU2VyaWFsaXplci5kZXNlcmlhbGl6ZSIsIlNlcmlhbGl6ZXIubWFwVG9PYmplY3QiLCJTZXJpYWxpemVyLm9iamVjdFRvTWFwIiwiU2VyaWFsaXplci5fc2VyaWFsaXplTG9jYXRpb24iLCJTZXJpYWxpemVyLl9kZXNlcmlhbGl6ZUxvY2F0aW9uIiwiU2VyaWFsaXplci5fc2VyaWFsaXplUmVuZGVyQ29tcG9uZW50VHlwZSIsIlNlcmlhbGl6ZXIuX2Rlc2VyaWFsaXplUmVuZGVyQ29tcG9uZW50VHlwZSIsIlJlbmRlclN0b3JlT2JqZWN0IiwiUmVuZGVyU3RvcmVPYmplY3QuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF1RSwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xHLDJCQUE4QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBRS9FLDJCQUFnRCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2pGLG9CQUFrQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2pFLG1CQUF5QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2hELDZCQUEwQiw4Q0FBOEMsQ0FBQyxDQUFBO0FBQ3pFLHFCQUEyRCxpQ0FBaUMsQ0FBQyxDQUFBO0FBQzdGLGlDQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBRWhELHNGQUFzRjtBQUN0Rix1REFBdUQ7QUFDMUMsaUJBQVMsR0FBUyxNQUFNLENBQUM7QUFFdEM7SUFFRUEsb0JBQW9CQSxZQUF5QkE7UUFBekJDLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtJQUFHQSxDQUFDQTtJQUVq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LFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLEVBQUVBLHdCQUFpQkEsQ0FBQ0E7WUFDckVBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLGlCQUFTQSxDQUFDQTtTQUNoREEsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFFT1Isb0RBQStCQSxHQUF2Q0EsVUFBd0NBLEdBQXlCQTtRQUMvRFMsTUFBTUEsQ0FBQ0EsSUFBSUEseUJBQW1CQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUNUQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFFQSx3QkFBaUJBLENBQUNBLEVBQ3pEQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxFQUFFQSxpQkFBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDN0VBLENBQUNBO0lBbEhIVDtRQUFDQSxlQUFVQSxFQUFFQTs7bUJBbUhaQTtJQUFEQSxpQkFBQ0E7QUFBREEsQ0FBQ0EsQUFuSEQsSUFtSEM7QUFsSFksa0JBQVUsYUFrSHRCLENBQUE7QUFHRDtJQUFBVTtJQUFnQ0MsQ0FBQ0E7SUFBREQsd0JBQUNBO0FBQURBLENBQUNBLEFBQWpDLElBQWlDO0FBQXBCLHlCQUFpQixvQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBpc0FycmF5LCBpc1ByZXNlbnQsIHNlcmlhbGl6ZUVudW0sIGRlc2VyaWFsaXplRW51bX0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZ1wiO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG5pbXBvcnQge01hcCwgU3RyaW5nTWFwV3JhcHBlciwgTWFwV3JhcHBlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvblwiO1xuaW1wb3J0IHtSZW5kZXJDb21wb25lbnRUeXBlfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaVwiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvZGlcIjtcbmltcG9ydCB7UmVuZGVyU3RvcmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvcmVuZGVyX3N0b3JlJztcbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb24sIFZJRVdfRU5DQVBTVUxBVElPTl9WQUxVRVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnO1xuaW1wb3J0IHtMb2NhdGlvblR5cGV9IGZyb20gJy4vc2VyaWFsaXplZF90eXBlcyc7XG5cbi8vIFBSSU1JVElWRSBpcyBhbnkgdHlwZSB0aGF0IGRvZXMgbm90IG5lZWQgdG8gYmUgc2VyaWFsaXplZCAoc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4pXG4vLyBXZSBzZXQgaXQgdG8gU3RyaW5nIHNvIHRoYXQgaXQgaXMgY29uc2lkZXJlZCBhIFR5cGUuXG5leHBvcnQgY29uc3QgUFJJTUlUSVZFOiBUeXBlID0gU3RyaW5nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VyaWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlclN0b3JlOiBSZW5kZXJTdG9yZSkge31cblxuICBzZXJpYWxpemUob2JqOiBhbnksIHR5cGU6IGFueSk6IE9iamVjdCB7XG4gICAgaWYgKCFpc1ByZXNlbnQob2JqKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiAoPGFueVtdPm9iaikubWFwKHYgPT4gdGhpcy5zZXJpYWxpemUodiwgdHlwZSkpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSBQUklNSVRJVkUpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmICh0eXBlID09IFJlbmRlclN0b3JlT2JqZWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU3RvcmUuc2VyaWFsaXplKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBSZW5kZXJDb21wb25lbnRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VyaWFsaXplUmVuZGVyQ29tcG9uZW50VHlwZShvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVmlld0VuY2Fwc3VsYXRpb24pIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVFbnVtKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBMb2NhdGlvblR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXJpYWxpemVMb2NhdGlvbihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcIk5vIHNlcmlhbGl6ZXIgZm9yIFwiICsgdHlwZS50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBkZXNlcmlhbGl6ZShtYXA6IGFueSwgdHlwZTogYW55LCBkYXRhPzogYW55KTogYW55IHtcbiAgICBpZiAoIWlzUHJlc2VudChtYXApKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkobWFwKSkge1xuICAgICAgdmFyIG9iajogYW55W10gPSBbXTtcbiAgICAgICg8YW55W10+bWFwKS5mb3JFYWNoKHZhbCA9PiBvYmoucHVzaCh0aGlzLmRlc2VyaWFsaXplKHZhbCwgdHlwZSwgZGF0YSkpKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmICh0eXBlID09IFBSSU1JVElWRSkge1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSBSZW5kZXJTdG9yZU9iamVjdCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclN0b3JlLmRlc2VyaWFsaXplKG1hcCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBSZW5kZXJDb21wb25lbnRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVzZXJpYWxpemVSZW5kZXJDb21wb25lbnRUeXBlKG1hcCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBWaWV3RW5jYXBzdWxhdGlvbikge1xuICAgICAgcmV0dXJuIFZJRVdfRU5DQVBTVUxBVElPTl9WQUxVRVNbbWFwXTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IExvY2F0aW9uVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rlc2VyaWFsaXplTG9jYXRpb24obWFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXCJObyBkZXNlcmlhbGl6ZXIgZm9yIFwiICsgdHlwZS50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBtYXBUb09iamVjdChtYXA6IE1hcDxzdHJpbmcsIGFueT4sIHR5cGU/OiBUeXBlKTogT2JqZWN0IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgdmFyIHNlcmlhbGl6ZSA9IGlzUHJlc2VudCh0eXBlKTtcblxuICAgIG1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoc2VyaWFsaXplKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gdGhpcy5zZXJpYWxpemUodmFsdWUsIHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLypcbiAgICogVHJhbnNmb3JtcyBhIEphdmFzY3JpcHQgb2JqZWN0IChTdHJpbmdNYXApIGludG8gYSBNYXA8c3RyaW5nLCBWPlxuICAgKiBJZiB0aGUgdmFsdWVzIG5lZWQgdG8gYmUgZGVzZXJpYWxpemVkIHBhc3MgaW4gdGhlaXIgdHlwZVxuICAgKiBhbmQgdGhleSB3aWxsIGJlIGRlc2VyaWFsaXplZCBiZWZvcmUgYmVpbmcgcGxhY2VkIGluIHRoZSBtYXBcbiAgICovXG4gIG9iamVjdFRvTWFwKG9iajoge1trZXk6IHN0cmluZ106IGFueX0sIHR5cGU/OiBUeXBlLCBkYXRhPzogYW55KTogTWFwPHN0cmluZywgYW55PiB7XG4gICAgaWYgKGlzUHJlc2VudCh0eXBlKSkge1xuICAgICAgdmFyIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgICBTdHJpbmdNYXBXcmFwcGVyLmZvckVhY2gob2JqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwsIGtleSkgPT4geyBtYXAuc2V0KGtleSwgdGhpcy5kZXNlcmlhbGl6ZSh2YWwsIHR5cGUsIGRhdGEpKTsgfSk7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWFwV3JhcHBlci5jcmVhdGVGcm9tU3RyaW5nTWFwKG9iaik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2VyaWFsaXplTG9jYXRpb24obG9jOiBMb2NhdGlvblR5cGUpOiBPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICAnaHJlZic6IGxvYy5ocmVmLFxuICAgICAgJ3Byb3RvY29sJzogbG9jLnByb3RvY29sLFxuICAgICAgJ2hvc3QnOiBsb2MuaG9zdCxcbiAgICAgICdob3N0bmFtZSc6IGxvYy5ob3N0bmFtZSxcbiAgICAgICdwb3J0JzogbG9jLnBvcnQsXG4gICAgICAncGF0aG5hbWUnOiBsb2MucGF0aG5hbWUsXG4gICAgICAnc2VhcmNoJzogbG9jLnNlYXJjaCxcbiAgICAgICdoYXNoJzogbG9jLmhhc2gsXG4gICAgICAnb3JpZ2luJzogbG9jLm9yaWdpblxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9kZXNlcmlhbGl6ZUxvY2F0aW9uKGxvYzoge1trZXk6IHN0cmluZ106IGFueX0pOiBMb2NhdGlvblR5cGUge1xuICAgIHJldHVybiBuZXcgTG9jYXRpb25UeXBlKGxvY1snaHJlZiddLCBsb2NbJ3Byb3RvY29sJ10sIGxvY1snaG9zdCddLCBsb2NbJ2hvc3RuYW1lJ10sIGxvY1sncG9ydCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY1sncGF0aG5hbWUnXSwgbG9jWydzZWFyY2gnXSwgbG9jWydoYXNoJ10sIGxvY1snb3JpZ2luJ10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VyaWFsaXplUmVuZGVyQ29tcG9uZW50VHlwZShvYmo6IFJlbmRlckNvbXBvbmVudFR5cGUpOiBPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICAnaWQnOiBvYmouaWQsXG4gICAgICAnZW5jYXBzdWxhdGlvbic6IHRoaXMuc2VyaWFsaXplKG9iai5lbmNhcHN1bGF0aW9uLCBWaWV3RW5jYXBzdWxhdGlvbiksXG4gICAgICAnc3R5bGVzJzogdGhpcy5zZXJpYWxpemUob2JqLnN0eWxlcywgUFJJTUlUSVZFKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9kZXNlcmlhbGl6ZVJlbmRlckNvbXBvbmVudFR5cGUobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSk6IFJlbmRlckNvbXBvbmVudFR5cGUge1xuICAgIHJldHVybiBuZXcgUmVuZGVyQ29tcG9uZW50VHlwZShtYXBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZXJpYWxpemUobWFwWydlbmNhcHN1bGF0aW9uJ10sIFZpZXdFbmNhcHN1bGF0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlcmlhbGl6ZShtYXBbJ3N0eWxlcyddLCBQUklNSVRJVkUpKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJTdG9yZU9iamVjdCB7fVxuIl19