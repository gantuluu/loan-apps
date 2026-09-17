import { useEffect, useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem('loan-theme') === 'dark');
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); document.documentElement.style.colorScheme = dark ? 'dark' : 'light'; localStorage.setItem('loan-theme', dark ? 'dark' : 'light'); }, [dark]);
  return { dark, setDark };
}
