let data = 0;

exports.getGoldValue = async (req, res, next) => {
    res.status(200).json({
        success:true,
        data: req.body
    });
    data = req.body.value
    console.log(data)
}

exports.displayGoldValue = async (req, res, next) => {
    const value = {
        "value": {
            "data": data
       }
    }
    res.status(200).send(value)
}