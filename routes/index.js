// default page

// Max number of items returned from the Rally API call (limit is 2000)
// changing this value also requires change to match in app.js file
const maxItems = 200;
// App title
const title = "Han's White Tiger Tae Kwon Do";

module.exports = function(app) {

  // main page
  app.get('/', function (req, res) {
    res.render('main', {title: title});
  });

  // last exit, all unhandled requests end here
  app.all("*", function (req, res) {
    res.render('main', {title: title});
  });
};
