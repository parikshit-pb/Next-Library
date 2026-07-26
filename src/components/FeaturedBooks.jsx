import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    description:
      "A beautiful story about dreams, destiny, and finding your purpose.",
    availableCopies: 5,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    description:
      "A practical guide to building good habits and breaking bad ones.",
    availableCopies: 3,
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description:
      "Learn important lessons about money, investing, and financial independence.",
    availableCopies: 7,
  },
  {
    id: 4,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Personal Growth",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    description:
      "A guide to living in the present moment and developing mindfulness.",
    availableCopies: 0,
  },
];

const FeaturedBooks = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Books
          </h2>

          <p className="mt-3 text-gray-500">
            Explore some of our most popular books and find your next
            favorite read.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
