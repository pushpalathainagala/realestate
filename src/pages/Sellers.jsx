export default function Sellers() {
  return (
    <section className="sellers-page">
      <style>{`
        .sellers-page {
          padding: 72px 0 100px;
          background: #fbfbfd;
        }

        .seller-panel {
          width: min(1180px, calc(100% - 44px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 38px;
          align-items: center;
        }

        .seller-panel img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          border-radius: 8px;
        }

        .seller-copy h1 {
          color: #30283e;
          margin: 0 0 16px;
          font-size: 48px;
        }

        .seller-copy p {
          color: #6d6876;
          font-size: 20px;
          line-height: 1.6;
          margin: 0 0 24px;
        }

        .seller-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 28px;
        }

        .seller-points span {
          background: #ffffff;
          border: 1px solid #e6e2ee;
          border-radius: 8px;
          padding: 14px;
          font-weight: 750;
          color: #4b4359;
        }

        @media (max-width: 820px) {
          .seller-panel,
          .seller-points {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="seller-panel">
        <img src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=900&q=80" alt="Seller listing property" />
        <div className="seller-copy">
          <h1>Sell or rent your property faster</h1>
          <p>Create a high-quality listing, receive buyer leads, and manage responses from a focused seller workspace.</p>
          <div className="seller-points">
            <span>Free property posting</span>
            <span>Verified buyer leads</span>
            <span>Photo-rich listing page</span>
            <span>Local price guidance</span>
          </div>
          <button className="primary-btn" type="button">Post property free</button>
        </div>
      </div>
    </section>
  )
}
