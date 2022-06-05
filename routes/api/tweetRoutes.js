const router = require('express').Router();

const {
    createdTweet, 
      updatedTweet, 
        addReaction,
          getAllTweets,
            getTweetById,
              deleteTweet,
                deleteReaction,
  } = require('../../controllers/tweet-controller')

  router.route('/').get(getAllTweets).post(createdTweet);

  router.route('/:id').get(getTweetById).post(updatedTweet).delete(deleteTweet);

  router.route('/:tweetId/reactions/').post(addReaction).delete(deleteReaction);

  module.exports = router;