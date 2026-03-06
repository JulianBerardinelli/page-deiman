import { medusaClient } from './medusa';

// Store Auth token if we are using JWT rather than Cookie sessions.
// For Medusa v2, you can use session cookies explicitly by calling `/auth/session`.
// By default, `medusaClient.auth.login` handles the session creation logic.
// However, the cleanest approach for SPAs/Islands is often saving the JWT token and passing it.

/**
 * Log in a customer using their email and password.
 * Uses Medusa v2 Auth API: POST /auth/customer/emailpass
 */
export async function loginCustomer(email: string, password: string): Promise<string | null> {
  try {
    // According to Medusa v2 auth patterns:
    const response = await medusaClient.auth.login(
       "customer",
       "emailpass",
       {
         email,
         password
       }
    );
    
    // In SDK v2, the login method returns a token string directly or an object with location
    if (response && typeof response === "string") {
        // Store it so you can attach it to subsequent requests if not using httpOnly cookies.
        if (typeof window !== "undefined") {
            localStorage.setItem("medusa_auth_token", response);
        }
        return response;
    }

    return "ok"; // Indicates success (either cookie set or other success indicator)
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}

/**
 * Register a new customer.
 * Uses Medusa v2 Auth API: POST /auth/customer/emailpass/register
 */
export async function registerCustomer(first_name: string, last_name: string, email: string, password: string) {
  try {
    // 1. Crear la Identidad del usuario (Devuelve un token temporal de registro)
    const token = await medusaClient.auth.register(
       "customer",
       "emailpass",
       {
         email,
         password
       }
    );

    // 2. Crear el Cliente en la tienda usando el token de registro
    const response = await medusaClient.store.customer.create(
       {
         email,
         first_name,
         last_name
       },
       undefined,
       {
          Authorization: `Bearer ${token}`
       }
    );

    return response.customer;
  } catch (error) {
    console.error("Error al registrar cliente:", error);
    throw error;
  }
}

/**
 * Obtains the current authenticated Customer using the JWT or session cookie.
 */
export async function getMe() {
  try {
      // Intentar obtener el token si estamos usando modo JWT
      let headers = {};
      if (typeof window !== "undefined") {
          const token = localStorage.getItem("medusa_auth_token");
          if (token) {
              headers = { Authorization: `Bearer ${token}` };
          }
      }

      const response = await medusaClient.store.customer.retrieve(undefined, headers);
      return response.customer;
  } catch {
      // Generalmente sucede si la cookie/token expiró o es inválido.
      console.warn("No hay cliente autenticado activo.");
      return null;
  }
}

/**
 * Log out the customer, clearing the session or token.
 */
export async function logoutCustomer() {
    try {
        await medusaClient.auth.logout();
    } catch(err) {
        console.warn("Error al intentar cerrar sesión en server:", err);
    } finally {
        if (typeof window !== "undefined") {
            localStorage.removeItem("medusa_auth_token");
        }
    }
}

/**
 * ======= FASE 5.6: CUSTOMER PORTAL WRAPPERS =======
 */

// Helpers to get the auth headers easily
function getAuthHeaders(): Record<string, string> {
    if (typeof window === "undefined") return {};
    const token = localStorage.getItem("medusa_auth_token");
    return token ? { Authorization: `Bearer ${token}` } : {};
}

/**
 * Updates the current authenticated customer's profile (name, phone, etc).
 * Uses API: POST /store/customers/me
 */
export async function updateCustomerProfile(data: Record<string, unknown>) {
    try {
        const response = await medusaClient.client.fetch("/store/customers/me", {
            method: "POST",
            headers: getAuthHeaders(),
            body: data,
        }) as any;
        return response.customer;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
}

/**
 * Adds a new address to the customer's address book.
 * Uses API: POST /store/customers/me/addresses
 */
export async function addCustomerAddress(addressData: Record<string, unknown>) {
    try {
        const response = await medusaClient.client.fetch("/store/customers/me/addresses", {
            method: "POST",
            headers: getAuthHeaders(),
            body: addressData,
        }) as any;
        return response.address || response.customer; // SDK might return the updated customer or just the address
    } catch (error) {
        console.error("Error adding address:", error);
        throw error;
    }
}

/**
 * Updates a specific customer address.
 * Uses API: POST /store/customers/me/addresses/:id
 */
export async function updateCustomerAddress(addressId: string, addressData: Record<string, unknown>) {
    try {
        const response = await medusaClient.client.fetch(`/store/customers/me/addresses/${addressId}`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: addressData,
        }) as any;
        return response.address || response.customer;
    } catch (error) {
        console.error("Error updating address:", error);
        throw error;
    }
}

/**
 * Deletes a specific customer address.
 * Uses API: DELETE /store/customers/me/addresses/:id
 */
export async function deleteCustomerAddress(addressId: string) {
    try {
        const response = await medusaClient.client.fetch(`/store/customers/me/addresses/${addressId}`, {
            method: "DELETE",
            headers: getAuthHeaders()
        }) as any;
        return response;
    } catch (error) {
        console.error("Error deleting address:", error);
        throw error;
    }
}
