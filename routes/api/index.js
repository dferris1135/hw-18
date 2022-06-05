const router = require('express').router();
const userRoutes = require('./user-routes');
const tweetRoutes = require('./tweet-routes');

router.use('/users', userRoutes);
router.use('/tweets', tweetRoutes);

module.exports = router;