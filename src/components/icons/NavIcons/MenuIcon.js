const MenuIcon = ({ size = 24, active }) => {
  if (active) {
    return (
      <svg
        aria-label="Settings"
        color="var(--default)"
        fill="var(--default)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z" />
      </svg>
    )
  }

  return (
    <svg
      aria-label="Settings"
      color="var(--default)"
      fill="var(--default)"
      height={size}
      role="img"
      viewBox="0 0 24 24"
      width={size}
    >
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x1={3}
        x2={21}
        y1={4}
        y2={4}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x1={3}
        x2={21}
        y1={12}
        y2={12}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x1={3}
        x2={21}
        y1={20}
        y2={20}
      />
    </svg>
  )
}

export default MenuIcon
