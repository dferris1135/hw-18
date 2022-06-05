const router = require('express').Router();
const { 
  getAllUsers, 
    addFriend,
      deleteFriend,
        getUserById,
          deleteUser,
          updateUser,
            createUser,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).post(addFriend).delete(deleteFriend);

module.exports = router;