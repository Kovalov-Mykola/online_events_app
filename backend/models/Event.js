const { required, string } = require('joi');
const {Schema, model} = require('mongoose');
const Joi = require('joi');

const eventSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Event name is required']
    },
    type: {
        type: String,
        required: [true, 'Event type is required']
    },
    date: {
        type: String,
        required: [true, 'Event date is required']
    },
    owner: {
        type: Schema.Types.ObjectId,
        re: 'user'
    }
}, {versionKey: false, timestamps: true});

const eventJoiSchema = Joi.object({
   name: Joi.string().required(),
   type: Joi.string().required(),
   date: Joi.string().required() 
})

const Event = model('event', eventSchema);

module.exports = {
    Event,
    eventJoiSchema
}