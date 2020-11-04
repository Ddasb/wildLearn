const WilderModel = require("../models/wilder");

module.exports = {
    create: (req, res) => {
        let datas = req.body;
        if (Object.keys(datas).length > 0) {
            WilderModel.init().then(() => {
                const firstWilder = new WilderModel(datas);
                return firstWilder;
            })
            .then((resFirstWilder) => {
                return resFirstWilder.save();
            })
            .then(() => {
                res.send("La requête a bien insérer une personne.");
            })
            .catch((err) => {
                res.json(err);
            })
        }
        else {
            res.send("La requête n'a rien insérer.");
        }
    },

    update: (req, res) => {
        let datas = req.body;
        let dataName = datas.identity.name;
        let dataFirstname = datas.identity.firstName;
        if (Object.keys(datas).length > 0) {
            WilderModel.find()
            .where('identity.firstName')
            .equals(dataFirstname)
            .where('identity.name')
            .equals(dataName)
            .exec()
            .then((result) => {
                let personID = result[0]._id;
                console.log(personID);
                return personID;
            })
            .then((personneID) => {
                let filter = {
                    "_id": personneID
                }
                let update = datas

                return WilderModel.findOneAndUpdate(filter, update);
            })
            .then(() => {
                res.send("Le wilder a bien été modifié.")
            })
            .catch((err) => {
                res.json(err);
            })
        }
    },

    getAll: (req, res) => {
        WilderModel.find()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    remove: (req, res) => {
        let wilderID = req.params.wilderID;
        console.log(wilderID);
        if (wilderID) {
            WilderModel
            .deleteMany({ "_id": wilderID})
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            })
        }
    }
}