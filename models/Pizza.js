const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    // For the timestamp field, createdAt, we set a default value to
    // the JavaScript Date.now function. If no value is provided in this 
    // field when the user creates new data, the Date.now function will 
    // be executed and will provide a timestamp.
    createdAt: {
        type: Date,
        default: Date.now
      },
      size: {
        type: String,
        default: 'Large'
      },
       toppings: []
    //   toppings: {
    //       type: Array
    //   }
});

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;