"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//The important point is that TypeScript automatically assigns numeric values:
var Role;
(function (Role) {
    Role[Role["userr"] = 0] = "userr";
    Role[Role["adminn"] = 1] = "adminn"; // 1
})(Role || (Role = {})); // but here we need to do role.userr === 0 then it iis use or role.user===1 than admin not a good way
// to figure so  we do the following to fix this:
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
// 
// now role.user === "user" and role.admin === "admin"
//# sourceMappingURL=enum.js.map