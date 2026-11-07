import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title: 'Beyond the Date — Good drinks. Better company.',description: 'More than a coffee date. A little café for good drinks, long catch-ups, and memories worth keeping.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
