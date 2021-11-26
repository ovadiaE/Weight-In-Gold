let data
exports.getGoldValue = async (req, res, next) => {
    try {

        res.status(200).json({
            success:true,
            data: req.body});
            userOnScale = true
            data = await req.body;
            
    } 
    catch (error) {
        console.log(error)
    }
 } 

 exports.displayGoldValue = async(req, res, next) => {
     try {
        if (data){
            res.status(200).json({
                success: true,
                data: data 
            })
           res.send({data: data, success: true});
           console.log('hello')
        }
     } catch(error) {
        console.log(error)
     }
 }