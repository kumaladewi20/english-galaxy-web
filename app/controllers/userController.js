const User = require("../../src/db/models/user");

exports.register = async (req, res) => {
    try {
      const { name, username, password } = req.body;

      const user = await User.create({ name, username, password });
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed!', error });
    }
  };

exports.login = async (req, res) => {

  try {

    const {user, pass} = req.body;

    const username = user;
    const targetUser = await User.findOne ({where: {username}});
    console.log(targetUser);
  
    if(!targetUser) return res.status(401).json({message:'username is incorrect'})
    if(pass !== targetUser.password)return res.status(401).json({message:'password incorrect'})


      res.status(200).json({ message: 'Login successful', targetUser });
    } catch (error){
      res.status(500).json({ message: 'Login failed!', error });
    }
  };

