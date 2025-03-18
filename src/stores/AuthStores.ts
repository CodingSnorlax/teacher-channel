import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthStoreState {
  price: number;
  amount: number;
  count: number;
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthStoreActions {
  increment: () => void;
  decrement: () => void;
  getTotal: () => number;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreState & AuthStoreActions>((set, get) => ({
  price: 30, // data
  amount: 10,
  count: 0,
  user: null,
  isAuthenticated: false,
  increment: () => {
    set((state) => ({
      ...state,
      count: state.count + 1,
    }));
  }, // action
  decrement: () => {
    set((state) => ({
      ...state,
      count: state.count - 1,
    }));
  },
  getTotal() {
    return get().price * get().amount;
  },
  setUser: (user) => {
    set((state) => ({
      ...state,
      user,
      isAuthenticated: !!user,
    }));
  },
  logout: () => {
    set((state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
    }));
  },
}));

export default useAuthStore;
