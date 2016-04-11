'use strict';function normalizeValidator(validator) {
    if (validator.validate !== undefined) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}
exports.normalizeValidator = normalizeValidator;
function normalizeAsyncValidator(validator) {
    if (validator.validate !== undefined) {
        return function (c) { return Promise.resolve(validator.validate(c)); };
    }
    else {
        return validator;
    }
}
exports.normalizeAsyncValidator = normalizeAsyncValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplX3ZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtWWRjclFDRTYudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZGlyZWN0aXZlcy9ub3JtYWxpemVfdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVZhbGlkYXRvciIsIm5vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yIl0sIm1hcHBpbmdzIjoiQUFHQSw0QkFBbUMsU0FBa0M7SUFDbkVBLEVBQUVBLENBQUNBLENBQWFBLFNBQVVBLENBQUNBLFFBQVFBLEtBQUtBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xEQSxNQUFNQSxDQUFDQSxVQUFDQSxDQUFrQkEsSUFBS0EsT0FBWUEsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBbENBLENBQWtDQSxDQUFDQTtJQUNwRUEsQ0FBQ0E7SUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDTkEsTUFBTUEsQ0FBY0EsU0FBU0EsQ0FBQ0E7SUFDaENBLENBQUNBO0FBQ0hBLENBQUNBO0FBTmUsMEJBQWtCLHFCQU1qQyxDQUFBO0FBRUQsaUNBQXdDLFNBQXVDO0lBQzdFQyxFQUFFQSxDQUFDQSxDQUFhQSxTQUFVQSxDQUFDQSxRQUFRQSxLQUFLQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNsREEsTUFBTUEsQ0FBQ0EsVUFBQ0EsQ0FBa0JBLElBQUtBLE9BQUFBLE9BQU9BLENBQUNBLE9BQU9BLENBQWFBLFNBQVVBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEVBQW5EQSxDQUFtREEsQ0FBQ0E7SUFDckZBLENBQUNBO0lBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ05BLE1BQU1BLENBQW1CQSxTQUFTQSxDQUFDQTtJQUNyQ0EsQ0FBQ0E7QUFDSEEsQ0FBQ0E7QUFOZSwrQkFBdUIsMEJBTXRDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSBcIi4uL21vZGVsXCI7XG5pbXBvcnQge1ZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFzeW5jVmFsaWRhdG9yRm59IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVWYWxpZGF0b3IodmFsaWRhdG9yOiBWYWxpZGF0b3JGbiB8IFZhbGlkYXRvcik6IFZhbGlkYXRvckZuIHtcbiAgaWYgKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikudmFsaWRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoYzogQWJzdHJhY3RDb250cm9sKSA9PiAoPFZhbGlkYXRvcj52YWxpZGF0b3IpLnZhbGlkYXRlKGMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8VmFsaWRhdG9yRm4+dmFsaWRhdG9yO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBc3luY1ZhbGlkYXRvcih2YWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3IpOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgaWYgKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikudmFsaWRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoYzogQWJzdHJhY3RDb250cm9sKSA9PiBQcm9taXNlLnJlc29sdmUoKDxWYWxpZGF0b3I+dmFsaWRhdG9yKS52YWxpZGF0ZShjKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxBc3luY1ZhbGlkYXRvckZuPnZhbGlkYXRvcjtcbiAgfVxufVxuIl19