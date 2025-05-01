const FilterButton = ({ name, variant }: { name: string; variant?: 'active' | 'inactive' }) => {
  return (
    <button
      className={`px-4 py-2 rounded-3xl ring-1 w-[79px] ring-primary hover:bg-gray-200 ${variant === 'active' ? 'bg-quaternary text-white hover:bg-gray-700' : ''}`}
    >
      {name}
    </button>
  )
}

export default FilterButton
