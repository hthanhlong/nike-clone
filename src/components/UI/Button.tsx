const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: {
  label: string
  iconURL?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  fullWidth?: boolean
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none transition-all duration-300 hover:scale-105 hover:opacity-90
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'border-coral-red bg-coral-red text-white'
      } rounded-full ${fullWidth && 'w-full'}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 h-5 w-5 rounded-full bg-white"
        />
      )}
    </button>
  )
}

export default Button
