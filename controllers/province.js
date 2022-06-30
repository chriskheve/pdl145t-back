const Province = require('../models/Province')

exports.create = async (req, res) => {
    const { nom, description, chef_lieu } = req.body

    
    try{

        const provinceExist = await Province.findOne({nom})
        console.log(provinceExist)
        if (provinceExist) {
            return res.status(400).json({
                errorMessage: `${nom} already exist`
            })
        }

        let newProvince = new Province();
        newProvince.nom = nom;
        newProvince.description = description;
        newProvince.chef_lieu = chef_lieu;

        newProvince = await newProvince.save();
        res.status(200).json({
            successMessage: `${newProvince.nom} was created!`
        })
    } catch (err){
        console.log('province create error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
}


exports.readAll = async (req, res) => {    
    try{
        const provinces = await Province.find({});

        res.status(200).json({
            provinces
        })
    } catch (err){
        console.log('province read all error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
}