//const { Schema, Model } = require('mongoose');
const { Schema, model } = require('mongoose');
//const Movie = require('./Movie');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
{
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Email does not match, try again!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    //savedMovies: [Movie]
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// middleware for pwd
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare input pwd with hashed pwd
userSchema.methods.isCorrectPassword = async function(password) {
    //return await bcrypt.compare(password, this.password);
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});
//const User = new Model('User', userSchema);
const User = model('User', userSchema);

module.exports = User;