let gold = 0;

exports.getGoldValue = async (req, res, next) => {
    gold = req.body.data.value
    res.status(200).json({
        success:true,
        data: req.body.value,
        body: req.body.data.value
    })
}

exports.displayGoldValue = async (req, res, next) => {
    res.status(200).json({value: gold})
}