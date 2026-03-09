import { medusaClient } from './medusa';
import { cartIdStore, regionIdStore, cartDataStore } from '../store/client';

export const getCart = async (forceFetch = false) => {
  const cartId = cartIdStore.get();
  if (!cartId) {
    cartDataStore.set(null);
    return null;
  }

  const cached = cartDataStore.get();
  if (!forceFetch && cached && (cached as Record<string, unknown>).id === cartId) {
    return cached;
  }

  try {
    const { cart } = await medusaClient.store.cart.retrieve(cartId, {
      fields: '*items,*items.variant,*items.variant.product'
    });
    cartDataStore.set(cart);
    return cart;
  } catch (error: unknown) {
    console.error('Error fetching cart:', error);
    const err = error as { status?: number; response?: { status?: number } };
    if (err?.status === 404 || err?.response?.status === 404) {
      cartIdStore.set(undefined);
      cartDataStore.set(null);
    }
    return null;
  }
};

export const createCart = async () => {
  try {
    const regionId = regionIdStore.get();
    
    // Necesitamos que al menos haya una region seleccionada o predeterminada
    const payload = regionId ? { region_id: regionId } : {};
    
    const { cart } = await medusaClient.store.cart.create(payload);
    
    // Persistimos el ID en localstorage
    cartIdStore.set(cart.id);
    return cart;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error;
  }
};

export const getOrSetCart = async () => {
  let cart = await getCart();
  if (!cart) {
    cart = await createCart();
  }
  return cart;
};

export const addToCart = async ({ variantId, quantity }: { variantId: string; quantity: number }) => {
  try {
    const cart = await getOrSetCart();
    
    const { cart: updatedCart } = await medusaClient.store.cart.createLineItem(cart.id, {
      variant_id: variantId,
      quantity: quantity
    }, {
      fields: '*items,*items.variant,*items.variant.product'
    });

    cartDataStore.set(updatedCart);
    return updatedCart;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const updateCartItem = async ({ lineId, quantity }: { lineId: string; quantity: number }) => {
  const cartId = cartIdStore.get();
  if (!cartId) throw new Error('No cart found');

  try {
    const { cart: updatedCart } = await medusaClient.store.cart.updateLineItem(cartId, lineId, {
      quantity: quantity
    }, {
      fields: '*items,*items.variant,*items.variant.product'
    });

    cartDataStore.set(updatedCart);
    return updatedCart;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

export const removeCartItem = async (lineId: string) => {
  const cartId = cartIdStore.get();
  if (!cartId) throw new Error('No cart found');

  try {
    const { cart: updatedCart } = await medusaClient.store.cart.deleteLineItem(cartId, lineId, {
      fields: '*items,*items.variant,*items.variant.product'
    });

    cartDataStore.set(updatedCart);
    return updatedCart;
  } catch (error) {
    console.error('Error removing cart item:', error);
    throw error;
  }
};

// --- CHECKOUT API WRAPPERS ---

export const updateCartEmail = async (email: string) => {
  const cartId = cartIdStore.get();
  if (!cartId) throw new Error('No cart found');

  try {
    const { cart: updatedCart } = await medusaClient.store.cart.update(cartId, {
      email
    }, {
      fields: '*items,*items.variant,*items.variant.product'
    });
    cartDataStore.set(updatedCart);
    return updatedCart;
  } catch (error) {
    console.error('Error updating cart email:', error);
    throw error;
  }
};

export const updateShippingAddress = async (address: Record<string, unknown>) => {
  const cartId = cartIdStore.get();
  if (!cartId) throw new Error('No cart found');

  try {
    const { cart: updatedCart } = await medusaClient.store.cart.update(cartId, {
      shipping_address: address
    }, {
      fields: '*items,*items.variant,*items.variant.product'
    });
    cartDataStore.set(updatedCart);
    return updatedCart;
  } catch (error) {
    console.error('Error updating shipping address:', error);
    throw error;
  }
};

export const getShippingOptions = async () => {
  const cartId = cartIdStore.get();
  if (!cartId) throw new Error('No cart found');

  try {
    const { shipping_options } = await medusaClient.store.fulfillment.listCartOptions({ cart_id: cartId });
    return shipping_options;
  } catch (error) {
    console.error('Error fetching shipping options:', error);
    throw error;
  }
};

export const addShippingMethod = async (optionId: string) => {
  const cartId = cartIdStore.get();
  if (!cartId) throw new Error('No cart found');

  try {
    const { cart: updatedCart } = await medusaClient.store.cart.addShippingMethod(cartId, {
      option_id: optionId
    });
    return updatedCart;
  } catch (error) {
    console.error('Error adding shipping method:', error);
    throw error;
  }
};

export const initiatePaymentSessions = async () => {
  try {
    const cart = await getCart();
    if (!cart) throw new Error('No cart found');

    const { payment_collection } = await medusaClient.store.payment.initiatePaymentSession(cart, {
      provider_id: "pp_system_default" // default manual payment
    });
    return payment_collection;
  } catch (error) {
    console.error('Error initiating payment sessions:', error);
    throw error;
  }
};

export const completeCart = async () => {
  const cartId = cartIdStore.get();
  if (!cartId) throw new Error('No cart found');

  try {
    const { type, order, cart, error } = await medusaClient.store.cart.complete(cartId);
    
    if (type === 'order') {
       cartIdStore.set(undefined); // Limpiamos el carrito local
       return order;
    } else {
       console.error("Cart completion failed or requires further action:", error);
       return cart;
    }
  } catch (error) {
    console.error('Error completing cart:', error);
    throw error;
  }
};
