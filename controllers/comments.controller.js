const Comment = require('../models/Comment.model')

module.exports.commentController = {
    getComments: async(req, res)=>{
        const comments = await Comment.find().populate('userId')

        res.json(comments)
    },
    addComments: async (req, res)=>{
        const { text , userId , newsId } = req.body
        try {
            const newComment = await Comment.create({
                text,
                userId,
                newsId
            })
            const comm = await Comment.findById(newComment._id).populate("userId")
             return res.json(comm)
        } catch (e) {
            return res.status(401).json(e.toString());
        }
    }, 
    deleteComments: async ( req, res)=>{

         try {
            const data = await Comment.findByIdAndDelete(req.params.id)

            return res.json(data)
         } catch (error) {
            return res.status(401).json(e.toString());
         }
    }
}