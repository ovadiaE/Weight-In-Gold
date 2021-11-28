let data = 0;

exports.getGoldValue = async (req, res, next) => {
    res.status(200).json({
        success:true,
        data: req.body
    }).send(req.body)
    console.log(req.body)
}

exports.displayGoldValue = async (req, res, next) => {
    console.log(res)
    const value = {
        "value": {
            "data": data,
       }
    }
    res.status(200).send(value)
}