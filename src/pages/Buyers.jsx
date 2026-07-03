export default function Buyers() {
  const cards = [
    ['Verified Homes', 'Explore inspected apartments, independent houses, and builder projects.'],
    ['Price Trends', 'Compare nearby localities before booking a visit.'],
    ['Shortlist Tools', 'Save homes and keep your family decisions in one place.'],
  ]

  return (
    <section className="buyers-page page-wrap">
      <style>{`
        .buyers-page {
          padding: 72px 0 96px;
        }

        .buyers-hero {
          min-height: 330px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
          align-items: center;
        }

        .buyers-hero h1 {
          font-size: 52px;
          line-height: 1.08;
          margin: 0 0 18px;
          color: #2d263d;
        }

        .buyers-hero p {
          font-size: 20px;
          color: #6e6877;
          margin: 0 0 26px;
        }

        .buyers-hero img {
          width: 100%;
          height: 330px;
          object-fit: cover;
          border-radius: 8px;
        }

        .buyer-grid {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .buyer-card {
          border: 1px solid #e1dfe8;
          border-radius: 8px;
          padding: 26px;
          min-height: 170px;
        }

        .buyer-card h3 {
          margin: 0 0 10px;
          color: #332d41;
          font-size: 24px;
        }

        .buyer-card p {
          color: #68616f;
          margin: 0;
          font-size: 17px;
        }

        @media (max-width: 820px) {
          .buyers-hero,
          .buyer-grid {
            grid-template-columns: 1fr;
          }

          .buyers-hero h1 {
            font-size: 36px;
          }
        }
      `}</style>
      <div className="buyers-hero">
        <div>
          <h1>Find your next home with confidence</h1>
          <p>Browse clean listings, compare localities, and contact verified sellers from one buyer dashboard.</p>
          <button className="primary-btn" type="button">Start searching</button>
        </div>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" alt="House exterior" />
      </div>
      <div className="buyer-grid">
        {cards.map(([title, text]) => (
          <article className="buyer-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
