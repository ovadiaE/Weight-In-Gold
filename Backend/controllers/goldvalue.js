let data
exports.getGoldValue = async (req, res, next) => {
    try {

        res.status(200).json({
            success:true,
            data: req.body});
            } 
    catch (error) {
        res.status(500).json({
            success:false,
            error: error});
    }
 };