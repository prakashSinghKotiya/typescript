//The important point is that TypeScript automatically assigns numeric values:
enum Role {
    userr,   // 0
    adminn   // 1
} // but here we need to do role.userr === 0 then it iis use or role.user===1 than admin not a good way
// to figure so  we do the following to fix this:

enum Role {
    user = "user",

    admin = "admin"
}
// 
// now role.user === "user" and role.admin === "admin"