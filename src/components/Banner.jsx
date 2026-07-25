import Link from "next/link";

const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200">

      <div className="hero-content text-center">

        <div className="max-w-3xl">

          <h1 className="text-6xl font-bold">

            Find Your Next Read

          </h1>

          <p className="py-8 text-lg">

            Discover thousands of books and borrow
            your favourite ones instantly.

          </p>

          <Link
            href="/books"
            className="btn btn-primary btn-lg"
          >
            Browse Now
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Banner;