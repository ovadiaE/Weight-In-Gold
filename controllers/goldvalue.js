let gold;

exports.getGoldValue = async (req, res, next) => {
    try {
         gold = req.body
         res.status(200).json({
            body: gold
        })

    } catch(error){
         res.json({
             error: error
        })
    }
}

exports.displayGoldValue = async (req, res, next) => {
    try { res.status(200).json({data: gold})} 
    
    catch (error) {
        console.log(error)
   }
}