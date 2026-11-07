import type { Metadata } from 'next';
import FloatingIllustrationsExample from '@/components/FloatingIllustrationsExample';
export const metadata: Metadata = { title: 'A little room to daydream — Beyond the Date' };
export default function FloatingDemoPage() {
  return (
    <main>
      <header className="header">
        <a className="logo" href="/">beyond<br/>the date.</a>
        <a className="button outline" href="/">Back to the café <span aria-hidden="true">↗</span></a>
      </header>
      <FloatingIllustrationsExample />
    </main>
  );
}
