const {User} = require('../../models/User');

const userLogout = async (req, res) => {
const {_id} = req.body;
await User.findByIdAndUpdate(_id, {token: null});
res.status(204).json()
}

module.exports = userLogout;