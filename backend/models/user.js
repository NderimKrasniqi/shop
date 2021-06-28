import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      require: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    next(error);
  }
});

userSchema.statics.getUser = async function (id) {
  try {
    let user;
    if (mongoose.Types.ObjectId.isValid(id)) {
      user = this.findById(id);
    }
    if (user) {
      return user;
    }
    throw new Error({
      message: 'User does not exist',
    });
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

export default User;
