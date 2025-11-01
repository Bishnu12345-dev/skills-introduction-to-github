import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },           // User's full name
    email: { type: String, required: true, unique: true }, // Unique email for each user
    age: { type: Number, required: true },            // User's age

    // 👉 Example: Add a password field
    // password: { type: String, required: true },

    // 👉 Example: Add an address (object structure)
    // address: {
    //   street: String,
    //   city: String,
    //   country: String,
    // },

    // 👉 Example: Add a role with default value
    // role: { type: String, enum: ["user", "admin"], default: "user" },

    // 👉 Example: Add boolean field
    // isActive: { type: Boolean, default: true },

    // 👉 Example: Add array of strings
    // hobbies: [{ type: String }],

    // 👉 Example: Add reference to another collection
    // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Export model
export default mongoose.model("User", userSchema);
