const Territoire = require('../models/Territoire')

// exports.create = async (req, res) => {
//     const { territoire, description, province } = req.body

    
//     try{

//         const territoireExist = await Territoire.findOne({territoire})
//         console.log(territoireExist)
//         if (territoireExist) {
//             return res.status(400).json({
//                 errorMessage: `${territoire} already exist!`
//             })
//         }

//         let newTerritoire = new Territoire();
//         newTerritoire.territoire = territoire;
//         newTerritoire.description = description;
//         newTerritoire.province = province;

//         newTerritoire = await newTerritoire.save();
//         res.status(200).json({
//             successMessage: `${newTerritoire.territoire} was created!`
//         })
//     } catch (err){
//         console.log('province create error: ', err);
//         res.status(500).json({
//             errorMessage: 'Please try again later'
//         })
//     }
// }


exports.create = async (req, res) => {
    const { province, description, nom } = req.body

    
    try{

        const territoireExist = await Territoire.findOne({nom})
        console.log("nom", territoireExist)
        if (territoireExist) {
            return res.status(400).json({
                errorMessage: `${nom} already exist`
            })
        }

        let newTerritoire = new Territoire();
        newTerritoire.province = province;
        newTerritoire.nom = nom;
        newTerritoire.description = description;

        newTerritoire = await newTerritoire.save();
        res.status(200).json({
            successMessage: `${newTerritoire.nom} was created!`
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
        const territoires = await Territoire.find({}).populate(
			'province'
		);

        res.status(200).json({
            territoires
        })
    } catch (err){
        console.log('province read all error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
}