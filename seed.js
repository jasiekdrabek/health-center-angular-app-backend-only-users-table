const mongoose = require("mongoose");
const User = require("./models/user");

mongoose
  .connect(
    "mongodb+srv://admin:CnY5kZTI81OJMkMs@cluster0.p0ijowp.mongodb.net/health-center-angular-app?retryWrites=true&w=majority",
    {}
  )
  .then(() => console.log("Connected to Mongodb......"));

const seedUsers = [
  {
    login: "drJan",
    password:
      "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2",
    name: "Jan Drabek",
    pesel: "93071534761",
    role: "doctor",
  },
  {
    login: "nurseZofia",
    password:
      "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2",
    name: "Zofia Drabek",
    pesel: "82011481283",
    role: "nurse",
  },
  {
    login: "patientMama",
    password:
      "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2",
    name: "Agnieszka Drabek",
    pesel: "56050374312",
    role: "patient",
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
};

seedDB().then(() => {
  mongoose.connection.close();
});
