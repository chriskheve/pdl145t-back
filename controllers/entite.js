const Entite = require('../models/Entite')

exports.create = async (req, res) => {
    const { entite, description, territoire, latitude, longitude } = req.body

    
    try{

        const entiteExist = await Entite.findOne({entite})
        console.log(entiteExist)
        if (entiteExist) {
            return res.status(400).json({
                errorMessage: `${entite} already exist`
            })
        }

        let newEntite = new Entite();
        newEntite.entite = entite;
        newEntite.description = description;
        newEntite.territoire = territoire;
        newEntite.latitude = latitude;
        newEntite.longitude = longitude;

        newEntite = await newEntite.save();
        res.status(200).json({
            successMessage: `${newEntite.entite} was created!`
        })
    } catch (err){
        console.log('territoire create error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
}


exports.readAll = async (req, res) => {    
    try{
        const entites = await Entite.find({})
        // .populate(
		// 	'territoire'
		// );
        .populate({ 
            path: 'territoire',
            populate: {
              path: 'province',
              model: 'Province'
            } 
         })

        res.status(200).json({
            entites
        })
    } catch (err){
        console.log('territoire read all error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
}


exports.read = async (req, res) => {
	try {
		const entiteId = req.params.entiteId;
		const entite = await Entite.findById(entiteId);

		res.json(entite);
	} catch (err) {
		console.log(err, 'entiteController.read error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};



exports.readByEnt = async (req, res) => {
	try {
		// const entiteId = req.params.entiteId;
		// const entite = await Entite.findById(entiteId);
        const wamba = "Wamba"

		// res.json(entite);
    const user = await Entite.aggregate([
        {
            $lookup: {
                from: "territoires",
                localField: "territoire",
                foreignField: "_id",
                as: "territoires",
            },
        },
        
    {
        // 111111111
        $project: 
        {
          territoires: 
          { 
            $size: {

                $filter: 
                { 
                  input: "$territoires", 
                  as: "territoire", 
                  cond: { $eq: [ "$$territoire.nom", wamba ] } 
                } 
            }
          } 
        } 
      } 
    ]);
        res.json(user)
	} catch (err) {
		console.log(err, 'entiteController.read error');
		res.status(500).json({
			errorMessage:  err,
		});
	}
};

// db.users.aggregate([ 
//     { 
//       $lookup: 
//       { 
//         from: "pets", 
//         localField: "id", 
//         foreignField: "owner", 
//         as: "pets" 
//       } 
//     }, 
//     {
//       $project: 
//       {
//         name: 1,
//         pets: 
//         { 
//           $filter: 
//           { 
//             input: "$pets", 
//             as: "pet", 
//             cond: { $gte: [ "$$pet.age", 1 ] } 
//           } 
//         } 
//       } 
//     } 
//     ]);