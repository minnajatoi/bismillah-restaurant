const FB_PAGE_URL = "https://www.facebook.com/BismillahRestaurantOfficial"; // example page
const INSTA_PAGE_URL = "https://www.instagram.com/bismillahrestaurant"; // example page

const Social = () => {
  return (
    <section id="social" className="py-5 bg-dark text-light">
      <div className="container text-center">
        <h2 className="display-5 fw-bold font-serif mb-5 text-warning">
          Find Us On Social Media
        </h2>
        <div className="row g-4 justify-content-center">
          {/* 🟦 Facebook Section */}
          <div className="col-lg-5">
            <div className="bg-black p-4 rounded-3 shadow-lg border border-warning border-opacity-25">
              <h3 className="fs-4 fw-semibold text-white mb-4">Facebook</h3>

              {/* Restaurant Image */}
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" // sample restaurant image
                alt="Bismillah Restaurant"
                className="rounded mb-3"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              {/* Facebook Logo (Clickable) */}
              <a
                href={FB_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block mb-3"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook Logo"
                  style={{
                    width: "80px",
                    filter: "brightness(0) invert(1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>

              <p className="text-light mb-3">
                Follow us on Facebook for updates, offers, and delicious posts!
              </p>

              {/* Facebook Embed */}
              <div
                className="w-100 bg-dark d-flex align-items-center justify-content-center text-light"
                style={{ minHeight: "400px" }}
              >
                <iframe
                  src={FB_PAGE_URL}
                  title="Bismillah Restaurant Facebook Page"
                  width="100%"
                  height="400"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* 🟣 Instagram Section */}
          <div className="col-lg-4">
            <div className="bg-black p-4 rounded-3 shadow-lg border border-warning border-opacity-25">
              <h3 className="fs-4 fw-semibold text-white mb-4">Instagram</h3>

              {/* Restaurant Image */}
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349" // another restaurant-style photo
                alt="Bismillah Restaurant Instagram"
                className="rounded mb-3"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              {/* Instagram Logo (Clickable) */}
              <a
                href={INSTA_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block mb-3"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram Logo"
                  style={{
                    width: "80px",
                    borderRadius: "15px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>

              <p className="text-light mb-3">
                Follow us on Instagram for mouthwatering food pictures and stories!
              </p>

              {/* Instagram Embed */}
              <div className="d-flex justify-content-center bg-dark p-2 rounded">
                <iframe
                  className="rounded"
                  src={`${INSTA_PAGE_URL}/embed`}
                  title="Bismillah Restaurant Instagram Post"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  loading="lazy"
                  style={{
                    height: "400px",
                    width: "100%",
                    maxWidth: "340px",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;

