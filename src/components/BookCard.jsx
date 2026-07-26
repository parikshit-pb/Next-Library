const BookCard = ({ book }) => {
  const {
    title,
    author,
    category,
    image,
    description,
    availableCopies,
  } = book;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 hover:shadow-xl transition-all duration-300">
      <figure className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center gap-2">
          <span className="badge badge-primary">{category}</span>

          <span
            className={`badge ${
              availableCopies > 0 ? "badge-success" : "badge-error"
            }`}
          >
            {availableCopies > 0 ? "Available" : "Unavailable"}
          </span>
        </div>

        <h2 className="card-title mt-2">{title}</h2>

        <p className="text-sm text-gray-500">By {author}</p>

        <p className="text-sm line-clamp-2">
          {description}
        </p>

        <div className="card-actions justify-between items-center mt-3">
          <span className="font-medium">
            Copies: {availableCopies}
          </span>

          <button className="btn btn-primary btn-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;