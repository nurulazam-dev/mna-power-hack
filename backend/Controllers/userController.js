import User from "../models/UserSchema.js";

// update_single_User controller
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated user",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Fail to update user" });
  }
};

// delete_single_User controller
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted user",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Fail to delete user" });
  }
};
