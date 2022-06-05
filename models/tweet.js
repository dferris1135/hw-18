const reactSchema = require('./reaction');
const moment = require('moment');
const { Schema, model } = require('mongoose');

const tweetSchema = new Schema({
    tweetText: {
        type: String, 
          maxLength: 300,
            required: true,
      },
        username: {
          type: String,
            required: true,
        },
          createdAt: {
            type: Date,
              default: Date.now,
                // get: (createdValue) => moment(createdValue).format('YYYY-MM-DD')
            },
            reactions: [reactSchema]
      },{
        toJSON:{
          getters: true,
        },
        id: false,
      
      });

      tweetSchema.virtual('reactCount').get(function(){
          return this.reactions.length;
      });

      const Tweet = model('Tweet', tweetSchema);
      module.exports = Tweet;
