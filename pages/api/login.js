import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from 'crypto-js';
var jwt = require('jsonwebtoken');
const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
        try {
            let user = await User.findOne({ "email": req.body.email });
            if (user) {
                const bytes = CryptoJS.AES.decrypt(user.password, 'secret key 123');
                let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
                if (req.body.password === decryptedPassword) {
                    var token = jwt.sign({ email: user.email, name: user.name }, 'jwtsecret',{
                        expiresIn: "2d"
                    });
                    res.status(200).json({success: true, token});
                } else {
                    res.status(200).json({ success: false, error: "Incorrect Credentials" });
                }
            } else {
                res.status(200).json({ success: false, error: "No user found" });
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" });
    }
};

export default connectDb(handler);
