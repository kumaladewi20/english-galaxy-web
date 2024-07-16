//ES6 
const Express = require("express");
const bodyparser = require("body-parser");
const user = require("./app/routes/user");
const Blogs = require("./app/routes/blog");
const videos = require("./app/routes/video");
const cors = require("cors")

 const app = Express(); 
 const port = 8000; 

const corsOptions = {
    link: 'http://127.0.0.1:5501/'
    // origin: 'http://127.0.0.1:5501/',
  };

 app.use(bodyparser.urlencoded({ extended: true }))
 app.use(bodyparser.json());
 app.use(cors(corsOptions));


app.use("/User", user);
app.use("/Blogs", Blogs);
app.use("/Video", videos);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

