const express = require("express");
const bodyParaser = require("body-parser");
const routes = require("./routes/routes");
const contactRoutes = require("./routes/contact");
const app = express ();

// view engine
app.set('view engine', 'ejs');

// middleware
app.use(bodyParaser.json());
app.use(bodyParaser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);
app.use(contactRoutes);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT ||3000}`)
})