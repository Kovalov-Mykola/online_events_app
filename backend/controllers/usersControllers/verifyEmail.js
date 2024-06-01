const{User} = require('../../models/User');
const HTTPError = require('../../helpers/HTTPError');

const verifyEmail = async (req, res) => {
const {verificationToken} = req.params;
const user = await User.findOne({verificationToken});
if(!user){
    throw HTTPError(404, 'Not found')
}

await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: null});

res.status(200).json({
    message: "Verification successful"
})
}

module.exports = verifyEmail;