const nextOfKinModel = require('../models/nextOfKin');
const UserModel = require('../models/UserProfileSchema');


let nextOfKinController = { 
    find: async (req, res) => {
        return (
            UserModel.findOne({name: req.params.name})
            .populate("nextofkin")
            .exec()
            .then(user => {
              // console.log(user.nextOfKin.relationship)
                return res.json(user.nextOfKin);
            })
            .catch( err => console.log(err))
        )
       /*  let found = await nextOfKinModel.findOne({name: req.params.username});
        res.json(found); */
    },
    all: async (req, res) => {
        let allUsers = await nextOfKinModel.find()
        res.json(allUsers);
    },
    create:  (req, res) => {
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
        let foundUser = await nextOfKinModel.find({name: req.params.username}).populate("Account");
        res.json(foundUser);
    }
}

module.exports = nextOfKinController;