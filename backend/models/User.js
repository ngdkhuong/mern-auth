import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

// todo dùng function thay cho arrow function vì biến this chỉ có trong function
userSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        next();
    } catch (error) {
        next(error);
    }

    
})

userSchema.methods.matchPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error;
    }
}

const User = mongoose.model('User', userSchema);

export default User;