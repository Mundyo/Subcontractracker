const mongoose = require('mongoose');
const express = require('express');
const FormModel = require('./model/FormModel');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const slugify = require('slugify');
const DOMPurify = require('dompurify');
const cors = require('cors');
// const nodemailer = require('nodemailer');



const app = express();
const PORT = 3001;

// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));



  const DB =
 'mongodb+srv://Chelsea:Kasongi2014!@cluster0.ali2jhg.mongodb.net/';

console.log(DB);

mongoose.set("strictQuery", true);

const connectDB = async () => {
  await mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Mongodb is connected");
};

connectDB();



app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// const transporter = nodemailer.createTransport({
 
//   service: 'gmail',
//   auth: {
//     user: 'subcontractracker@gmail.com',
//     pass: 'chelseawalters'
//   }
// });

app.post('/submit-form', async (req, res) => {
  try {

  const formData = req.body; 

  console.log('Received form data:', formData);

    const formEntry = new FormModel(formData);
    await formEntry.save();

    // const mailOptions ={

    //   from: 'subcontractracker@gmail.com',
    //   to:   'cowalters@gmail.com',
    //   subject: 'New Form Submission',
    //   text: JSON.stringify(formData)
    // }

    // await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});







app.listen(PORT , () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});












