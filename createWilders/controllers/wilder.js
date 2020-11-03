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
        let dataName = datas.name;
        let dataFirstname = datas.firstName;
        if (Object.keys(datas).length > 0) {
            WilderModel.find()
            .where('identity.firstName')
            .equals(datas.firstName)
            .where('identity.name')
            .equals(datas.name)
            .exec()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.json(err);
            })
        }
    },

    getAll: (req, res) => {
        let datas = req.body;
        console.log(datas);
        if (Object.keys(datas).length > 0) {
            WilderModel.find()
            .where('identity.firstName')
            .equals(datas.firstName)
            .where('identity.name')
            .equals(datas.name)
            .exec()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            })
        }
        else {
            res.send("La requête n'a rien trouvé.");
        }
    },

    remove: (req, res) => {
        let datas = req.body;
        let dataName = datas.name;
        let dataFirstname = datas.firstName;
        let delData = {
            identity: {
                name: dataName,
                firstName: dataFirstname
            }
        }
        console.log(dataName);
        console.log(dataFirstname);
        console.log(delData);
        if (Object.keys(datas).length > 0) {
            WilderModel
            .deleteMany()
            .where('identity.firstName')
            .equals(datas.firstName)
            .where('identity.name')
            .equals(datas.name)
            .exec()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            })
        }
    }
}