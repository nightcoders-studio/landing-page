const FilterButton = ({
  name,
  variant = 'inactive',
  onClick,
}: {
  name: string
  variant?: 'active' | 'inactive'
  onClick?: () => void
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-3xl ring-1 min-w-[79px] text-sm ring-primary transition-colors duration-200
        ${
          variant === 'active'
            ? 'bg-quaternary text-white hover:bg-quaternary/80'
            : 'bg-white text-black hover:bg-gray-100'
        }
      `}
    >
      {name}
    </button>
  )
}

export default FilterButton
