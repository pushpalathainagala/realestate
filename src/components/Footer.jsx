export default function Footer({ navigate }) {
  const go = (event, path) => {
    event.preventDefault()
    navigate(path)
  }

  return (
    <footer className="site-footer">
      <style>{`
        .site-footer {
          background: #21104f;
          color: #ffffff;
          padding: 54px 0 22px;
        }

        .footer-wrap {
          width: min(1536px, calc(100% - 48px));
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(3, 1fr);
          gap: 34px;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .footer-mark {
          width: 30px;
          height: 30px;
          border-radius: 4px;
          background: #ffdd00;
          position: relative;
        }

        .footer-mark::before,
        .footer-mark::after {
          content: '';
          position: absolute;
          background: #6330ea;
          height: 6px;
          width: 16px;
          top: 12px;
        }

        .footer-mark::before {
          left: 6px;
          transform: rotate(-42deg);
        }

        .footer-mark::after {
          right: 5px;
          transform: rotate(42deg);
        }

        .footer-logo-main {
          font-size: 27px;
          line-height: 1;
        }

        .footer-logo-dot {
          font-size: 15px;
          opacity: 0.9;
        }

        .footer-about {
          max-width: 430px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        .footer-title {
          margin: 4px 0 16px;
          font-size: 17px;
          font-weight: 850;
          color: #ffdd00;
        }

        .footer-list {
          display: grid;
          gap: 11px;
        }

        .footer-link,
        .footer-text {
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.45;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-bottom {
          margin-top: 38px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: rgba(255, 255, 255, 0.66);
          font-size: 14px;
        }

        .footer-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-tag {
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          padding: 7px 12px;
        }

        @media (max-width: 900px) {
          .site-footer {
            padding-top: 42px;
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-brand-block {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 560px) {
          .footer-wrap {
            width: min(100% - 28px, 1536px);
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <div className="footer-wrap">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <a className="footer-brand" href="/" onClick={(event) => go(event, '/')}>
              <span className="footer-mark" />
              <span className="footer-logo-main">HOUSING</span>
              <span className="footer-logo-dot">.COM</span>
            </a>
            <p className="footer-about">
              Find verified homes, plots, rental properties, and commercial spaces in Guntakal with simple search tools and helpful local guidance.
            </p>
          </div>

          <div>
            <h2 className="footer-title">Explore</h2>
            <div className="footer-list">
              <a className="footer-link" href="/buyers" onClick={(event) => go(event, '/buyers')}>Buy Properties</a>
              <a className="footer-link" href="/buyers" onClick={(event) => go(event, '/buyers')}>Rent Homes</a>
              <a className="footer-link" href="/services" onClick={(event) => go(event, '/services')}>Services</a>
              <a className="footer-link" href="/news-guide" onClick={(event) => go(event, '/news-guide')}>News & Guide</a>
            </div>
          </div>

          <div>
            <h2 className="footer-title">Owners</h2>
            <div className="footer-list">
              <a className="footer-link" href="/post-property" onClick={(event) => go(event, '/post-property')}>Post Property Free</a>
              <a className="footer-link" href="/sellers" onClick={(event) => go(event, '/sellers')}>Seller Dashboard</a>
              <a className="footer-link" href="/download-app" onClick={(event) => go(event, '/download-app')}>Download App</a>
              <a className="footer-link" href="/login" onClick={(event) => go(event, '/login')}>Login</a>
            </div>
          </div>

          <div>
            <h2 className="footer-title">Contact</h2>
            <div className="footer-list">
              <span className="footer-text">Guntakal, Andhra Pradesh</span>
              <span className="footer-text">support@housing.example</span>
              <span className="footer-text">Mon - Sat, 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright 2026 Housing.com. All rights reserved.</span>
          <div className="footer-tags">
            <span className="footer-tag">Verified Listings</span>
            <span className="footer-tag">Local Search</span>
            <span className="footer-tag">Owner Leads</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
