import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

// Estado persistente: El carrito se guarda en el localstorage del navegador.
// Inicialmente undefined, se poblará cuando interactuemos con Medusa.
export const cartIdStore = persistentAtom<string | undefined>('deiman_cart_id', undefined);

// Estado persistente: Región de la tienda (ej. Argentina = ARS)
// Es vital para que Medusa calcule los precios correctos.
export const regionIdStore = persistentAtom<string | undefined>('deiman_region_id', undefined);

// Estado UI reactivo: Controla si el Sidecart (el drawer interactivo) está abierto o cerrado
export const isCartOpenStore = atom<boolean>(false);

// Estado de caché: Guarda el objeto completo del carrito para evitar redundancia de fetch.
export const cartDataStore = atom<Record<string, unknown> | null>(null);
