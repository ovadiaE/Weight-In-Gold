let gold = 0;
let err;

exports.getGoldValue = async (req, res, next) => {
    try {
        console.log(req.body)
        res.status(200).json({
            success:true,
        })

    } catch(error){
        res.send(error)
        err = error 
    }
}

exports.displayGoldValue = async (req, res, next) => {
    res.status(200).json({data: gold, error: err})
}