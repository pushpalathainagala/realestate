export default function Guwahati() {
  return (
    <section className="guwahati-page">
      <style>{`
        .guwahati-page {
          min-height: calc(100vh - 92px);
          background:
            linear-gradient(90deg, rgba(48, 28, 120, 0.88), rgba(86, 51, 210, 0.7)),
            url('https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1300&q=80') center/cover;
          color: #ffffff;
          display: grid;
          align-items: center;
          padding: 80px 0;
        }

        .guwahati-content {
          width: min(1120px, calc(100% - 44px));
          margin: 0 auto;
        }

        .guwahati-content h1 {
          font-size: 54px;
          margin: 0 0 14px;
          text-shadow: 0 3px 0 rgba(0, 0, 0, 0.16);
        }

        .guwahati-content p {
          font-size: 22px;
          max-width: 720px;
          line-height: 1.55;
          margin: 0 0 30px;
          font-weight: 650;
        }

        .guwahati-search {
          background: #ffffff;
          color: #6e6975;
          border-radius: 10px;
          width: min(850px, 100%);
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px;
        }

        .guwahati-search input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          font-size: 19px;
        }

        .city-stats {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .city-stats span {
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 8px;
          padding: 13px 18px;
          font-weight: 800;
        }
      `}</style>
      <div className="guwahati-content">
        <h1>Properties to buy in Guwahati</h1>
        <p>Explore apartments, villas, plots, and local market insights across Guwahati's fast-growing neighborhoods.</p>
        <div className="guwahati-search">
          <span>Search:</span>
          <input placeholder="Search Guwahati locality, project, or builder" />
          <button className="primary-btn" type="button">Search</button>
        </div>
        <div className="city-stats">
          <span>Verified listings</span>
          <span>Popular localities</span>
          <span>Owner properties</span>
        </div>
      </div>
    </section>
  )
}
