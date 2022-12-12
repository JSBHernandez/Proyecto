import User from "../models/user"
import Jwt from "jsonwebtoken";
import config from "../config";
import role from "../models/role";

export const signup = async(req, res) => {

    const { username, email, password, role } = req.body;

    const userFound = User.find({ email })

    const newUser = new User({
        username,
        email,
        password: User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await role.findOne({ name: "user" })
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();

    const token = Jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400
    })

    res.json({ token })

}

export const signin = async(req, res) => {

    const userFound = await User.findOne({ email: req.body.email })

    if (userFound) return res.status(400).json({ message: "Usuario no encontrado" })

    console.log(userFound)

    res.json({ token: "" })

}