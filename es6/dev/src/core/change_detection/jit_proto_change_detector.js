import { ChangeDetectorJITGenerator } from './change_detection_jit_generator';
export class JitProtoChangeDetector {
    constructor(definition) {
        this.definition = definition;
        this._factory = this._createFactory(definition);
    }
    static isSupported() { return true; }
    instantiate() { return this._factory(); }
    /** @internal */
    _createFactory(definition) {
        return new ChangeDetectorJITGenerator(definition, 'util', 'AbstractChangeDetector', 'ChangeDetectorStatus')
            .generate();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaml0X3Byb3RvX2NoYW5nZV9kZXRlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtS084UHdjdGgudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vaml0X3Byb3RvX2NoYW5nZV9kZXRlY3Rvci50cyJdLCJuYW1lcyI6WyJKaXRQcm90b0NoYW5nZURldGVjdG9yIiwiSml0UHJvdG9DaGFuZ2VEZXRlY3Rvci5jb25zdHJ1Y3RvciIsIkppdFByb3RvQ2hhbmdlRGV0ZWN0b3IuaXNTdXBwb3J0ZWQiLCJKaXRQcm90b0NoYW5nZURldGVjdG9yLmluc3RhbnRpYXRlIiwiSml0UHJvdG9DaGFuZ2VEZXRlY3Rvci5fY3JlYXRlRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ik9BSU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGtDQUFrQztBQUUzRTtJQUlFQSxZQUFvQkEsVUFBb0NBO1FBQXBDQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUEwQkE7UUFDdERBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUVERCxPQUFPQSxXQUFXQSxLQUFjRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU5Q0YsV0FBV0EsS0FBcUJHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBRXpESCxnQkFBZ0JBO0lBQ2hCQSxjQUFjQSxDQUFDQSxVQUFvQ0E7UUFDakRJLE1BQU1BLENBQUNBLElBQUlBLDBCQUEwQkEsQ0FBQ0EsVUFBVUEsRUFBRUEsTUFBTUEsRUFBRUEsd0JBQXdCQSxFQUM1Q0Esc0JBQXNCQSxDQUFDQTthQUN4REEsUUFBUUEsRUFBRUEsQ0FBQ0E7SUFDbEJBLENBQUNBO0FBQ0hKLENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmltcG9ydCB7UHJvdG9DaGFuZ2VEZXRlY3RvciwgQ2hhbmdlRGV0ZWN0b3IsIENoYW5nZURldGVjdG9yRGVmaW5pdGlvbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JKSVRHZW5lcmF0b3J9IGZyb20gJy4vY2hhbmdlX2RldGVjdGlvbl9qaXRfZ2VuZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEppdFByb3RvQ2hhbmdlRGV0ZWN0b3IgaW1wbGVtZW50cyBQcm90b0NoYW5nZURldGVjdG9yIHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZmFjdG9yeTogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZpbml0aW9uOiBDaGFuZ2VEZXRlY3RvckRlZmluaXRpb24pIHtcbiAgICB0aGlzLl9mYWN0b3J5ID0gdGhpcy5fY3JlYXRlRmFjdG9yeShkZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cblxuICBpbnN0YW50aWF0ZSgpOiBDaGFuZ2VEZXRlY3RvciB7IHJldHVybiB0aGlzLl9mYWN0b3J5KCk7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jcmVhdGVGYWN0b3J5KGRlZmluaXRpb246IENoYW5nZURldGVjdG9yRGVmaW5pdGlvbikge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0ZWN0b3JKSVRHZW5lcmF0b3IoZGVmaW5pdGlvbiwgJ3V0aWwnLCAnQWJzdHJhY3RDaGFuZ2VEZXRlY3RvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2hhbmdlRGV0ZWN0b3JTdGF0dXMnKVxuICAgICAgICAuZ2VuZXJhdGUoKTtcbiAgfVxufVxuIl19