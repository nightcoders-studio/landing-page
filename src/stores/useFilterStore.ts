import { create } from 'zustand'

type FilterState = {
  filterCategory: string
  setFilterCategory: (filterCategory: string) => void
}

const useFilterStore = create<FilterState>((set) => ({
  filterCategory: '',
  setFilterCategory: (filterCategory) => set({ filterCategory }),
}))

export default useFilterStore
