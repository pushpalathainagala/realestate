export default function DownloadApp() {
  return (
    <section className="download-page">
      <style>{`
        .download-page {
          padding: 72px 0 100px;
          background: linear-gradient(135deg, #f7f4ff, #ffffff);
        }

        .download-panel {
          width: min(1100px, calc(100% - 44px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 38px;
          align-items: center;
        }

        .download-copy h1 {
          color: #30283e;
          font-size: 50px;
          line-height: 1.1;
          margin: 0 0 16px;
        }

        .download-copy p {
          color: #6d6877;
          font-size: 20px;
          line-height: 1.55;
          margin: 0 0 26px;
        }

        .store-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .store-btn {
          border: 0;
          background: #17131f;
          color: #ffffff;
          border-radius: 8px;
          padding: 14px 20px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .phone-card {
          background: #ffffff;
          border-radius: 28px;
          border: 10px solid #221a31;
          min-height: 510px;
          padding: 28px 20px;
          box-shadow: 0 22px 54px rgba(60, 37, 138, 0.18);
        }

        .phone-card img {
          width: 100%;
          height: 270px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 22px;
        }

        .app-listing {
          border: 1px solid #ece9f4;
          border-radius: 8px;
          padding: 14px;
          margin-bottom: 12px;
        }

        .app-listing strong {
          display: block;
          color: #332d40;
          margin-bottom: 4px;
        }

        .app-listing span {
          color: #706a78;
        }

        @media (max-width: 820px) {
          .download-panel {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="download-panel">
        <div className="download-copy">
          <h1>Download the Housing app</h1>
          <p>Search homes, save listings, contact sellers, and get property alerts wherever you are.</p>
          <div className="store-row">
            <button className="store-btn" type="button">Get it on Google Play</button>
            <button className="store-btn" type="button">Download on App Store</button>
          </div>
        </div>
        <div className="phone-card">
          <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=700&q=80" alt="Mobile app preview" />
          <div className="app-listing"><strong>2 BHK Apartment</strong><span>Verified owner listing</span></div>
          <div className="app-listing"><strong>Price alert enabled</strong><span>Track saved localities</span></div>
        </div>
      </div>
    </section>
  )
}
