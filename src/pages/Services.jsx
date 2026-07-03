export default function Services() {
  const services = [
    ['Home Loans', 'Check eligibility and compare loan partners.'],
    ['Legal Assistance', 'Get title checks and agreement support.'],
    ['Packers & Movers', 'Move into your new home with trusted vendors.'],
    ['Property Valuation', 'Understand fair value before buying or selling.'],
  ]

  return (
    <section className="services-page page-wrap">
      <style>{`
        .services-page {
          padding: 72px 0 96px;
        }

        .services-header {
          display: flex;
          justify-content: space-between;
          gap: 32px;
          align-items: end;
          margin-bottom: 34px;
        }

        .services-header h1 {
          margin: 0;
          color: #30293d;
          font-size: 48px;
        }

        .services-header p {
          max-width: 540px;
          color: #6d6877;
          font-size: 18px;
          line-height: 1.55;
          margin: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .service-card {
          border: 1px solid #e0dde6;
          border-radius: 8px;
          padding: 24px;
          min-height: 230px;
          background: #ffffff;
        }

        .service-icon {
          width: 54px;
          height: 54px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: #f1edff;
          color: #6132df;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .service-card h3 {
          margin: 0 0 10px;
          color: #363140;
          font-size: 23px;
        }

        .service-card p {
          margin: 0;
          color: #6d6877;
          font-size: 16px;
          line-height: 1.5;
        }

        @media (max-width: 940px) {
          .services-header,
          .services-grid {
            grid-template-columns: 1fr;
            display: grid;
          }
        }
      `}</style>
      <div className="services-header">
        <h1>Services for every property step</h1>
        <p>Helpful tools for financing, moving, legal checks, and price discovery so the property journey feels less scattered.</p>
      </div>
      <div className="services-grid">
        {services.map(([title, text], index) => (
          <article className="service-card" key={title}>
            <div className="service-icon">{index + 1}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
