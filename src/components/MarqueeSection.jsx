"use client";

import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <section className="py-6 bg-base-200 overflow-hidden">
      <Marquee speed={50} pauseOnHover gradient={false}>
        <div className="flex gap-12 items-center text-lg font-semibold">
          <span>📚 Discover Your Next Favorite Book</span>
          <span>✨ Borrow • Read • Enjoy</span>
          <span>📖 Thousands of Books Available</span>
          <span>🚀 Easy & Fast Book Borrowing</span>
          <span>❤️ Read More, Learn More</span>
        </div>
      </Marquee>
    </section>
  );
};

export default MarqueeSection;