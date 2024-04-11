
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
    console.log("Received request body:", req); 
    const {name:Name, phone, email, message } = req.body;

    if (!Name || !phone || !email || !message) {
        return next(new ErrorHandler("Please fill full callback request form!!", 400));
    }
    try {
        await Reservation.create({ Name, phone, email, message });
        res.status(200).json({
            success: true,
            message: "Request sent Successfully!",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(","), 400));
        }
        return next(error);
    }
};
