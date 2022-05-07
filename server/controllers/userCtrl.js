const user = require("../models/user");

exports.getAllUsers = async (req, res, next) => {
    try {
      const allUsers = await user.find();
  
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
  
  exports.addUser = async (req, res, next) => {
    try {
      await user.create(req.body)
      .then(() => {
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
    }
  };