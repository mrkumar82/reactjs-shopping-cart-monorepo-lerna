import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (newItem) => {
        set((state) => {
          const cart = [...state.cart];
          const findItem = cart.findIndex((item) => item.id === newItem.id);
          if (findItem >= 0) {
            cart[findItem].qty = cart[findItem].qty + 1;
            return { cart };
          } else {
            cart.push({ ...newItem, qty: 1 });
            return { cart };
          }
        });
      },
      removeItem: (itemName) => {
        set((state) => {
          const cart = [...state.cart];
          if (cart?.find((item) => item.id === itemName.id)?.qty === 1) {
            const cartRemaining = cart?.filter(
              (item) => item.id !== itemName.id
            );
            return { cart: [...cartRemaining] };
          } else {
            const remainingItems = cart?.map((item) => {
              if (item.id === itemName.id) {
                return { ...item, qty: item.qty - 1 };
              } else {
                return item;
              }
            });
            return { cart: [...remainingItems] };
          }
        });
      },
    }),
    { name: 'cart' }
  )
);

// const useCart = create(
//   persist(
//     (set, get) => ({
//       total: 0,
//       totalqty: 0,
//       cartContent: [],
//       addTocart: (params) => {
//         set((state) => ({
//           totalqty: state.totalqty + 1,
//           total: state.total + parseFloat(params.price),
//           cartContent: [...state.cartContent, params],
//         }));
//       },
//       updatecart: ({ params, mycart }) => {
//         set((state) => ({
//           totalqty: state.totalqty + 1,
//           total: state.total + parseFloat(params.price),
//           cartContent: mycart,
//         }));
//       },
//       clearCart: () => set({ totalqty:0 total: 0, cartContent: [] }),
//       removeFromCart: (params) =>
//         set((state) => ({
//           total: state.total - params.price * params.quantity,
//           totalqty: state.totalqty - params.quantity,
//           cartContent: state.cartContent.filter(
//             (item) => item.id !== params.id
//           ),
//         })),
//     }),
//     { name: 'cart' }
//   )
// );
