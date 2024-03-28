import { createSlice } from '@reduxjs/toolkit'

const cartslice = createSlice({
  name: 'cartslice',
  initialState: {
    cart: [],
  },

  reducers: {
    addtocart: (state, action) => {
      const productdata = action.payload.attributes
      const curritem = productdata
        ? {
            title: productdata.title,
            key: productdata.key,
            price: productdata.price,
            image: productdata.image,
          }
        : action.payload

      const index = state.cart.findIndex((item) => item.key === curritem.key)

      if (index === -1) {
        state.cart.push({ ...curritem, quantity: 1 })
      } else {
        state.cart[index].quantity += 1
      }
    },

    removefromcart: (state, action) => {
      const currkey = action.payload?.attributes?.key || action.payload.key;

      const index = state.cart.findIndex((item) => item.key === currkey)
      if (index === -1) return

      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== currkey)
      } else {
        state.cart[index].quantity -= 1
      }
    },

    resetcart: (state, action) => {
      // console.log("resetcart ",action.payload);
      const currkey = action.payload.key
      // const index = state.cart.findIndex((item) => item.key === currkey)

     state.cart=state.cart.filter(item=>item.key!==currkey);
    },
  },
})

export default cartslice.reducer
export const { addtocart, removefromcart, resetcart } = cartslice.actions
