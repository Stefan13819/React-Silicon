import React, { useState, useEffect } from 'react';
import quoteIcon from '../assets/images/quote.png';

const TestimonialsField = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section aria-label="testimonials" className="testimonials-section">
      <div className="container space-y-3">
        <div className="Our-App">
          <h2 className="h2">Clients are<br /> Loving Our App</h2>
        </div>

        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonials-card">
              <div className="icon-quote">
                <img src={quoteIcon} alt="Quote" />
              </div>
              <div className="icon-stars">
                <span className="stars">{'★'.repeat(testimonial.starRating)}{'☆'.repeat(5 - testimonial.starRating)}</span>
              </div>
              <p>{testimonial.comment}</p>
              <div className="user-info">
                <img src={testimonial.avatarUrl} alt={testimonial.author} className="user-avatar" />
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.jobRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsField;

