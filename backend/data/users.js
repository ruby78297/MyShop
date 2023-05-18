import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: "true",
  },
  {
    name: "jhon doe",
    email: "jhon@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "jane doe",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
