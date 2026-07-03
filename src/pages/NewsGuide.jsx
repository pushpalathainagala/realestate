export default function NewsGuide() {
  const posts = [
    ['How to compare property prices', 'A quick guide for checking rates before you shortlist a home.'],
    ['What buyers should verify', 'Documents, title, approvals, and builder details to review.'],
    ['City growth signals', 'Transport, jobs, and civic upgrades that can shape demand.'],
  ]

  return (
    <section className="news-page page-wrap">
      <style>{`
        .news-page {
          padding: 72px 0 96px;
        }

        .news-lead {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: center;
          margin-bottom: 36px;
        }

        .news-lead h1 {
          font-size: 48px;
          margin: 0 0 16px;
          color: #30283e;
        }

        .news-lead p {
          color: #6d6877;
          font-size: 19px;
          line-height: 1.6;
          margin: 0;
        }

        .news-lead img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .news-card {
          border: 1px solid #e0dde6;
          border-radius: 8px;
          padding: 24px;
        }

        .news-card h3 {
          margin: 0 0 12px;
          color: #322d3e;
          font-size: 24px;
        }

        .news-card p {
          margin: 0 0 18px;
          color: #6d6877;
          line-height: 1.5;
        }

        .news-card a {
          color: #5d2ee7;
          font-weight: 850;
          text-decoration: none;
        }

        @media (max-width: 850px) {
          .news-lead,
          .news-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="news-lead">
        <div>
          <h1>News & Guide</h1>
          <p>Research, market updates, and practical property guides for buyers, tenants, sellers, and investors.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80" alt="Property news desk" />
      </div>
      <div className="news-grid">
        {posts.map(([title, text]) => (
          <article className="news-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#read" onClick={(event) => event.preventDefault()}>Read guide &gt;</a>
          </article>
        ))}
      </div>
    </section>
  )
}
