import FloatingIllustration from './FloatingIllustration';

/** A relative section contains absolute decorations; content stays above them. */
export default function FloatingIllustrationsExample() {
  return (
    <section className="relative isolate mx-auto min-h-[580px] max-w-6xl overflow-hidden px-6 py-40 md:min-h-[640px] md:px-12 md:py-48"
      aria-labelledby="floating-example-title">
      <FloatingIllustration
        src="/images/illustrations/love-letter-transparent.webp"
        staticSrc="/images/illustrations/love-letter-transparent-still.png"
        alt=""
        animationType="bob"
        className="absolute left-4 top-8 w-20 -rotate-12 opacity-75 sm:left-12 sm:w-28 md:left-20 md:top-20 md:w-36"
      />
      <FloatingIllustration
        src="/images/illustrations/record-player-transparent.webp"
        staticSrc="/images/illustrations/record-player-transparent-still.png"
        alt=""
        animationType="drift"
        className="absolute right-4 top-12 w-24 rotate-6 opacity-70 [--float-delay:-2s] [--float-duration:7s] sm:right-10 sm:w-32 md:right-12 md:top-24 md:w-44"
      />
      <FloatingIllustration
        src="/images/illustrations/dancing-friends-transparent.webp"
        staticSrc="/images/illustrations/dancing-friends-transparent-still.png"
        alt=""
        animationType="sway"
        className="absolute bottom-4 right-8 w-24 opacity-65 [--float-delay:-3s] [--float-duration:8s] sm:bottom-8 sm:right-16 sm:w-32 md:right-24 md:w-40"
      />
      <div className="relative z-10 mx-auto max-w-md text-center">
        <p className="eyebrow mb-6">A LITTLE ROOM TO DAYDREAM</p>
        <h2 id="floating-example-title">A slower kind<br/>of afternoon.</h2>
        <p className="mx-auto mt-6 max-w-xs">A good record, your favourite cup, and nowhere else you need to be.</p>
        <a href="/#drinks" className="button filled mt-8">Find your favourite <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
