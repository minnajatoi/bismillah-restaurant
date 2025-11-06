import { reviews } from '../data';

const Reviews = () => {
    return(
        <section id="reviews" className="py-5 bg-black text-light">
            <div className="container-text-center">
                <h2 className="display-5 fw-bold font-serif mb-3 text-warning">
                    What Our Customers Say
                </h2>
                <p className="fs-5 text-light mb-5">We value your feedback.</p>

                <div className="row g-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card bg-dark text-white p-4 rounded-3 shadow-lg border border-warning border-opacity-25 h-100">
                                <div className="card-body">
                                    <p className="text-light my-4 fst-italic"> "{review.review}"</p>
                                    <h4 className="fs-5 fw-bold text-warning">- {review.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;