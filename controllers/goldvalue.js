let gold = 0;

exports.getGoldValue = async (req, res, next) => {
    res.status(200).json({
        success:true,
        data: req.body
    })
    gold = req.body.data
}

exports.displayGoldValue = async (req, res, next) => {
    const value = {
        "value": {
            "data": gold,
       }
    }
    console.log(value)
    res.status(200).send(value)
}