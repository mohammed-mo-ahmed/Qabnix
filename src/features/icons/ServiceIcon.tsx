export function ServiceIcon({ id }: { id: number }) {
  if (id === 0)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l10 6v12l-10 6-10-6V10z" stroke="#3b6ef5" strokeWidth="1.8" fill="none" />
        <path d="M16 10l5 3v6l-5 3-5-3v-6z" fill="#dbeafe" />
        <path d="M8 14l8 5 8-5" stroke="#3b6ef5" strokeWidth="1.5" fill="none" />
        <line x1="16" y1="19" x2="16" y2="28" stroke="#3b6ef5" strokeWidth="1.5" />
      </svg>
    );
  if (id === 1)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="17" rx="2" stroke="#3b6ef5" strokeWidth="1.8" />
        <path d="M10 28h12M16 23v5" stroke="#3b6ef5" strokeWidth="1.8" />
        <path d="M12 14l2 2 4-4" stroke="#3b6ef5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  if (id === 2)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="5" width="22" height="22" rx="3" stroke="#3b6ef5" strokeWidth="1.8" />
        <path d="M5 11h22" stroke="#3b6ef5" strokeWidth="1.5" />
        <circle cx="9" cy="8" r="1.2" fill="#3b6ef5" />
        <circle cx="13" cy="8" r="1.2" fill="#3b6ef5" />
        <path d="M10 17h12M10 21h8" stroke="#3b6ef5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  if (id === 3)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="8" width="14" height="10" rx="2" stroke="#3b6ef5" strokeWidth="1.8" />
        <rect x="19" y="11" width="9" height="7" rx="1.5" stroke="#3b6ef5" strokeWidth="1.5" />
        <path d="M6 21v3M11 21v3M8 24h6" stroke="#3b6ef5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  if (id === 4)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#3b6ef5" strokeWidth="1.8" />
        <path d="M12 16l3 3 6-6" stroke="#3b6ef5" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 6v3M16 23v3M6 16h3M23 16h3" stroke="#3b6ef5" strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
      </svg>
    );
  return null;
}
