import mongoose from "mongoose";

// 👉 Define cart schema structure
// Each cart usually belongs to a specific user and holds multiple products.

// Example fields you might include:
// - userId: reference to User model (required)
// - items: array of objects containing
//      - productId: reference to Product model
//      - quantity: number (default 1)
// - totalPrice: number (can be calculated automatically)
// - status: string (e.g., "active", "ordered", "cancelled")
// - createdAt / updatedAt (handled by timestamps)

// 👉 Example setup:
// const cartSchema = new mongoose.Schema({ ... }, { timestamps: true });

// 👉 Add virtuals or pre-save middleware to auto-calculate total price if needed

// 👉 Export the Cart model
// export default mongoose.model("Cart", cartSchema);
