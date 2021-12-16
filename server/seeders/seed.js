// Seeder file for the db
const db = require("../config/connection");
const { Passenger, Ride, Form } = require("../models");

db.once("open", async () => {
  // First feed the test rides
  await Ride.deleteMany();

  const rides = await Ride.insertMany([
    // Create rides to test them on the app
    {
      date: 2021 - 02 - 05,
      pickupZone: "Test pickup adress 1",
      dropoffZone: "Test drop off adress 1",
      billAmmount: 100,
    },
    {
      date: 2021 - 02 - 05,
      pickupZone: "Test pickup adress 2",
      dropoffZone: "Test drop off adress 2",
      billAmmount: 200,
    },
    {
      date: 2021 - 02 - 05,
      pickupZone: "Test pickup adress 3",
      dropoffZone: "Test drop off adress 3",
      billAmmount: 500,
    },
    {
      date: 2021 - 02 - 05,
      pickupZone: "Test pickup adress 4",
      dropoffZone: "Test drop off adress 4",
      billAmmount: 110,
    },
    {
      date: 2021 - 02 - 05,
      pickupZone: "Test pickup adress 5",
      dropoffZone: "Test drop off adress 5",
      billAmmount: 105,
    },
    {
      date: 2021 - 02 - 05,
      pickupZone: "Test pickup adress 6",
      dropoffZone: "Test drop off adress 6",
      billAmmount: 100,
    },
  ]);

  // Create test forms
  await Form.deleteMany();

  const forms = await Form.insertMany([
    // Create rides to test them on the app
    {
      companyName: "Company Name 1",
      taxPayerNumber: 1234,
      dropoffZone: "Test drop off adress 1",
      rides: [rides[0]._id],
    },
    {
      companyName: "Company Name 2",
      taxPayerNumber: 12343,
      dropoffZone: "Test drop off adress 2",
      rides: [rides[5]._id, rides[2]._id, rides[1]._id],
    },
    {
      companyName: "Company Name 3",
      taxPayerNumber: 123422,
      dropoffZone: "Test drop off adress 3",
      rides: [rides[5]._id, rides[4]._id, rides[1]._id],
    },
    {
      companyName: "Company Name 4",
      taxPayerNumber: 123412,
      dropoffZone: "Test drop off adress 4",
      rides: [rides[1]._id, rides[1]._id, rides[1]._id],
    },
    {
      companyName: "Company Name 5",
      taxPayerNumber: 123400,
      dropoffZone: "Test drop off adress 5",
      rides: [rides[2]._id, rides[3]._id, rides[1]._id],
    },
    {
      companyName: "Company Name 6",
      taxPayerNumber: 123467,
      dropoffZone: "Test drop off adress 6",
      rides: [rides[4]._id, rides[1]._id, rides[1]._id],
    },
  ]);

  // Delete if there is any information else
  await Passenger.deleteMany();

  await Passenger.create([
    {
      name: "Andres",
      email: "andres@email.com",
      password: "password01",
      rides: [rides[0]._id, rides[1]._id],
      form: [forms[0]._id, forms[1]._id],
    },
  ]);

  // Let us know that the seeds went well
  console.log("users seeded");

  process.exit();
});
