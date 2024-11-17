import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhoneVolume, faCommentDots, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        setFaqs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-label="faqs" className="faqs-section">
      <div className="container space-y-3">
        <div className="faq-left-side space-y-1">
          <h2 className="h2">Any questions?<br />Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>


        {loading && <p>Loading FAQs...</p>}
        {error && <p>Error: {error}</p>}


        {!loading && !error && (
          <div className="faq">
            {faqs.map((faq, index) => (
              <div className={`faq-card ${openIndex === index ? 'open' : ''}`} key={faq.id}>
                <div className="question" onClick={() => handleToggle(index)}>
                  <p>{faq.title}</p>
                  <button className="btn-round">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
                {openIndex === index && (
                  <div className="answer">
                    <div className="expandable">{faq.content}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

     
      <a href="" id="faq-btn" className="button">Contact Us Now</a>

      <div className="contact-options">
        <div className="contact-card">
          <div className="icon">
            <FontAwesomeIcon icon={faPhoneVolume} style={{ color: '#6366f1' }} />
          </div>
          <p>Still have questions?</p>
          <a href="#">Contact us</a>
          <FontAwesomeIcon icon={faArrowLeft} className="fa-rotate-180 fa-2xs" style={{ color: '#6366f1' }} />
        </div>
        <div className="contact-card-2">
          <div className="icon">
            <FontAwesomeIcon icon={faCommentDots} style={{ color: '#22c55e' }} />
          </div>
          <p>Don't like phone calls?</p>
          <a href="#">Contact us</a>
          <FontAwesomeIcon icon={faArrowLeft} className="fa-rotate-180 fa-2xs" style={{ color: '#22c55e' }} />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
