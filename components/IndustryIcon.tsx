export type IndustryIconName =
  | "shield"
  | "layers"
  | "phone"
  | "user"
  | "calendar"
  | "database"
  | "bolt"
  | "pin"
  | "clock"
  | "camera"
  | "cart"
  | "pencil";

const paths: Record<IndustryIconName, React.ReactNode> = {
  shield: <path d="M12 3l7 3v5.5c0 4.6-3 8.2-7 9.5-4-1.3-7-4.9-7-9.5V6l7-3z" />,
  layers: (
    <>
      <rect x="7" y="7" width="13" height="14" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 2v6M16 2v6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />,
  pin: (
    <>
      <path d="M12 22s7-6.6 7-12.2A7 7 0 1 0 5 9.8C5 15.4 12 22 12 22z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  cart: (
    <>
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17.5" cy="20" r="1.3" />
      <path d="M3 4h2l2.2 11.2h10.3L19.5 8H6.4" />
    </>
  ),
  pencil: (
    <>
      <path d="M3 21l1-5 12-12 4 4-12 12-5 1z" />
      <path d="M14 4l4 4" />
    </>
  ),
};

export function IndustryIcon({
  name,
  size = 20,
  style,
}: {
  name: IndustryIconName;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ display: "inline-block", flexShrink: 0, ...style }}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </g>
    </svg>
  );
}
