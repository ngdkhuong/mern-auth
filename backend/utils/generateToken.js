import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
    // cấu hình cookie lưu token trên client và server
    return res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateToken;
