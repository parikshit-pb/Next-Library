import { FaBookOpen, FaUsers, FaShieldAlt, FaClock } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Large Book Collection",
      description:
        "Browse hundreds of books across different categories and discover your next favorite read.",
      icon: <FaBookOpen className="text-4xl text-primary" />,
    },
    {
      id: 2,
      title: "Easy Borrowing",
      description:
        "Borrow books with just a few clicks using a simple and user-friendly interface.",
      icon: <FaUsers className="text-4xl text-primary" />,
    },
    {
      id: 3,
      title: "Secure Platform",
      description:
        "Your account and borrowing history are protected with modern authentication.",
      icon: <FaShieldAlt className="text-4xl text-primary" />,
    },
    {
      id: 4,
      title: "Available Anytime",
      description:
        "Access the library 24/7 from anywhere and manage your borrowed books easily.",
      icon: <FaClock className="text-4xl text-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-primary">Next Library?</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We make reading easier, faster, and more enjoyable with a modern
            digital library experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="card-body items-center text-center">
                {feature.icon}

                <h3 className="text-xl font-semibold mt-4">
                  {feature.title}
                </h3>

                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}