// 👉 Import Product model and zod for validation
// import Product from "../models/product.model.js";
// import { z } from "zod";

// 👉 Create zod schema for validating product data
// const productValidator = z.object({
//   name: z.string().min(2, "Product name too short"),
//   price: z.number().positive("Price must be positive"),
//   stock: z.number().int().nonnegative(),
//   category: z.string().optional(),
// });

// 👉 Define controller functions:
// - getProducts: Fetch all products
// - getProduct: Fetch single product by ID
// - createProduct: Validate input then save to DB
// - updateProduct: Validate and update product by ID
// - deleteProduct: Remove product from DB

// 👉 Wrap all functions in try/catch blocks
// 👉 Use proper HTTP status codes and validation error handling
