import User from '../Models/UserSchema.js';
import Booking from '../Models/BookingSchema.js'
import Doctor from '../Models/DoctorSchema.js'
export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        
        res.status(200).json({ success: true, message: 'Successfully updated', data: updateUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update' });
        
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        const User = await User.findByIdAndDelete(id)
        
        res.status(200).json({ success: true, message: 'Successfully deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' });
        
    }
};

export const singleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id)
        
        res.status(200).json({ success: true, message: 'User found', data: user });
    } catch (err) {
        res.status(404).json({ success: false, message: 'No user found' });
        
    }
};

export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({})
        
        res.status(200).json({ success: true, message: 'User found', data: users });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' });
    }
};

export const getUserProfile = async (req, res) => {
    const userId = req.userId;

    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ success: false, message: 'user not found' })
        }

        const { password, ...rest } = user._doc
        
        res.status(200).json({ success: true, message: 'Profile info is getting', data: { ...rest } })

    } catch (err) {
        res.status(500).json({ success: true, message: "Something went wrong,can't get" });
        
    }
};

export const getMyAppointment = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.userId })
        
        const doctorIds = bookings.map(el => el.doctor.id)
        
        const doctors = await Doctor.find({ _id: { $in: doctorIds } })
        
        res.status(200).json({
            success: true, message: 'Appointment are getting', data: doctors
            

        })
    } catch (error) {
        res.status(500).json({ success: true, message: "Something went wrong,can't get" });
        
    }
}