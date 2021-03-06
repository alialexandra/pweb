const User = require("../models/user");



exports.getUserByEmail = async (req, res, next) => {
  try {
    const qry = {
      email: req.params.email
    }
    console.log(qry);
    foundUser = User.findOne(qry)
        .sort({'createdOn': -1})
        .exec()
        .then(docs => res.status(200)
          .json(docs))
          .catch(err => res.status(500)
          .json({
              message: "error finding user by email",
              error: err
        }))
        /*
    return res.status(200).json({
      success: true,
      data: foundUser
    });*/
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getAllUsers = async (req, res, next) => {
    try {
      const allUsers = await User.find();
  
      return res.status(200).json({
        success: true,
        count: allUsers.length,
        data: allUsers
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  exports.addUser = async (req, res) => {
    
    let query = req.body.email; //Extract title from input form
    User.findOne({email:query}, function(err, example){
        if(err) console.log(err);
        if ( example){
            console.log("This email is already registered");
        } else {
 
            let newUser = new User(req.body);
            newUser.save(function(err, example) {
                if(err) console.log(err);
                console.log("New example created");
                res.redirect(`/`);
            });
        }
    });
};

    
    
    /*
      try {
      
        const qry = req.body.email
      
      await user.create(req.body)
      .then(() => {
        console.log(req.body)
          res.status(201).send({
          status: true,
          message: "request added succesfully"
        });
      })
      .catch(() => {
          res.status(400).send({
              status: false,
              message:"Error adding request",
          });
      })
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }*/
  