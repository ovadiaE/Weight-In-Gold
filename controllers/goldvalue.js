let body;
exports.getGoldValue = async (req, res, next) => {
    try {
         body = req.body
         console.log(req)
         console.log(req.body)
         res.status(200).json(body)

    } catch(error){
         res.json({
             error: error
        })
    }
}

exports.displayGoldValue = async (req, res, next) => {
    console.log(body)
    try {res.status(200).json(body)} 
    
    catch (error) {
        console.log(error)
   }
}