import { create } from "zustand";

interface SampleStoreState {
    price: number;
    amount: number;
    count: number;
  }
  
  interface SampleStoreActions {
    increment: () => void;
    decrement: () => void;
    getTotal: () => number;
  }

const useSampleStore = create<SampleStoreState & SampleStoreActions>((set, get) => ({
  price: 30, // data
  amount: 10,
  count: 0,
  increment: () => {
    set((state) => ({
      ...state,
      count: state.count + 1,
    }));
  }, // action
  decrement: () => {
    set((state) => ({
        ...state,
        count: state.count -1,
    }));
  },
  getTotal()  {
    return get().price * get().amount
  },
}));

export default useSampleStore;
