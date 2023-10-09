// slices/cartTypes.ts

// Define the state type
export type CartState = number; // Since our state is just a number representing the count

// Define the action type for adding to cart
export interface AddToCartAction {
  type: 'cart/addToCart';
  payload: number;  // The quantity to be added or removed
}
