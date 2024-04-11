

import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minLength: [3, "Name must contain at least 3 characters"],
        maxLength: [50, "Name must contain at most 50 characters"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number must contain at least 10 digits"],
        maxLength: [10, "Phone Number must contain at most 10 digits"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email !"],
    },
    message: {
        type: String,
        required: true,
        minLength: [1, "Message must contain at least 2 characters"],
        maxLength: [1000, "Message must contain at most 1000 characters"],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
