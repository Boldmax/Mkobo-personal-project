const UserModel = require('../models/ActiveInvestment');

let AccountController = { 
    find: async (req, res) => {
        let found = await UserModel.findOne({name: req.params.username});
        res.json(found);
    },
    all: async (req, res) => {
        let allUsers = await UserModel.find()
        res.json(allUsers);
    },
    create: (req, res) => {
        const newUser = new nextOfKinModel(req.body);
        const { userId } = req.params;
        newUser.userProfile = userId;
        return newUser
        .save()
        .then(kin => {
           // console.log(kin)
            return UserModel.findByIdAndUpdate(
                userId, { $addToSet: { nextOfKin: kin } }
            );
        })
        .then((data) => {
            return res.json(data);
        })
        .catch( err => console.log(err));
    },
    getAllInvestments: async (req, res) => {
        let foundUser = await UserModel.find({name: req.params.username}).populate("Account");
        res.json(foundUser);
    }
}

module.exports = AccountController;