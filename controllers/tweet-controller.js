const { User, Reaction, Tweet } = require('../models');

getAllTweets = (req, res) => {
    Tweet.find({}).populate({path: "reactions", select: '-__v'})
    .select('-__v').then(data=>res.json(data));
}

createdTweet = (req, res) => {
    Tweet.create({username: req.body.username, thoughtText: req.body.thoughtText})
    .then(data => {
      User.findOneAndUpdate({_id: req.body.userId},{$push: { thoughts: data._id}},
        {new: true}).then(data =>res.json(data))
    })
}

getTweetById =(req, res) => {
    console.log('data: ', req.path);
    Tweet.findById(req.params.id).populate({path: 'reactions'}).then(data=>res.json(data))
}

updatedTweet = (req, res) => {
    Tweet.findOneAndUpdate({_id:req.params.id}, body, {new: true}).then(data=>res.json(data))
}

deleteTweet = (req, res) => {
    Tweet.findOneAndDelete({_id:req.params.id},).then(data=>res.json(data));
    User.findOneAndDelete({ username: data.username}, {$pull: { thoughts: req.params.id}})
    .then(data=>res.json(data));
}

addReaction = (req, res) => {
    Tweet.findOneAndUpdate({id: req.params.id}, {$addToSet: {reactions: req.body}}, {new: true})
    .then(data=>res.json(data));
}

deleteReaction = (req, res, {body}) => {
    Tweet.findOneAndUpdate({_id: req.params}, { $pull: {reactions: {reactionId: body.reactionId}}},
      {new: true, runValidators:true},
      )
}

module.exports = { getAllTweets, createdTweet, getTweetById, updatedTweet, deleteTweet, deleteReaction, addReaction,};
