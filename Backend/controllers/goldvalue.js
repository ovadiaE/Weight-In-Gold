exports.getGoldValue = async (req, res, next) => {
    res.status(200).json({
        success:true,
        data: req.body});
}