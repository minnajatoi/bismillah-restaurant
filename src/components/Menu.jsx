import { menuItems } from "../data";

const Menu = () => {
  return (
    <section id="menu" className="py-5 bg-dark text-light">
      <div className="container text-center">
        <h2 className="display-5 fw-bold font-serif mb-3 text-warning">
          Our Menu
        </h2>
        <p className="fs-5 text-light mb-5">
          A selection of our finest dishes, made with love.
        </p>
        <div className="row g-4">
          {menuItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div
                className="card bg-black text-white h-100 shadow-lg border border-warning border-opacity-25 card-hover"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column p-4">
                  <h3 className="card-title fs-4 fw-semibold text-warning mb-2">
                    {item.name}
                  </h3>
                  <p className="card-text text-light-50 mb-4">{item.desc}</p>
                  <span className="fs-5 fw-bold text-white mb-3">
                    {item.price}
                  </span>

                  {/* 🟡 Order Now Button */}
                  <button
                    className="btn btn-warning text-black fw-semibold mt-auto"
                    style={{
                      borderRadius: "30px",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => alert(`You ordered: ${item.name}`)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
