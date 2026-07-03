const heroImage = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80'
const cityImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'

export default function Home({ navigate }) {
  return (
    <div className="home-page">
      <style>{`
        .home-hero {
          min-height: 646px;
          background:
            linear-gradient(90deg, rgba(41, 22, 119, 0.92), rgba(99, 72, 223, 0.86)),
            url(${cityImage}) center/cover;
          position: relative;
          overflow: hidden;
          color: #ffffff;
        }

        .home-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.14) 1px, transparent 1px);
          background-size: 170px 170px;
          opacity: 0.35;
        }

        .hero-person {
          position: absolute;
          right: 3%;
          top: 34px;
          width: min(500px, 34vw);
          height: 590px;
          border-radius: 58px 58px 120px 120px;
          object-fit: cover;
          border: 4px solid rgba(255, 255, 255, 0.34);
          transform: rotate(-8deg);
          box-shadow: 0 26px 54px rgba(31, 18, 89, 0.38);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          width: min(1120px, calc(100% - 36px));
          margin: 0 auto;
          padding-top: 120px;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 48px;
          line-height: 1.15;
          margin: 0 0 12px;
          text-shadow: 0 3px 0 rgba(0, 0, 0, 0.18);
        }

        .hero-content p {
          margin: 0;
          font-size: 24px;
          font-weight: 800;
        }

        .search-box {
          width: min(1120px, 100%);
          margin: 52px auto 0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 24px 46px rgba(26, 18, 78, 0.25);
          text-align: left;
        }

        .search-tabs {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          background: rgba(26, 18, 67, 0.93);
          min-height: 66px;
          align-items: center;
        }

        .search-tab {
          color: #c6bddb;
          font-weight: 850;
          text-align: center;
          font-size: 17px;
        }

        .search-tab.active {
          color: #ffffff;
          text-decoration: underline;
          text-decoration-thickness: 3px;
          text-underline-offset: 12px;
        }

        .search-row {
          height: 100px;
          background: #ffffff;
          display: flex;
          align-items: center;
          padding: 0 22px 0 42px;
          color: #737178;
        }

        .search-input {
          flex: 1;
          border: 0;
          font-size: 22px;
          outline: none;
          color: #5c5962;
        }

        .search-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          border: 3px solid #77747d;
          border-radius: 50%;
          position: relative;
          flex: 0 0 24px;
        }

        .search-icon::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 3px;
          background: #77747d;
          right: -8px;
          bottom: 0;
          transform: rotate(45deg);
        }

        .localities {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 44px;
          font-size: 22px;
          font-weight: 850;
        }

        .chip {
          border: 0;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 20px;
          border-radius: 6px;
          font-size: 20px;
          font-weight: 750;
          cursor: pointer;
        }

        .owner-strip {
          position: relative;
          z-index: 1;
          width: min(552px, calc(100% - 36px));
          margin: 62px auto 0;
          background: rgba(33, 22, 91, 0.86);
          color: #ffffff;
          border-radius: 26px 26px 0 0;
          padding: 16px 28px;
          font-size: 18px;
          font-weight: 800;
          text-align: center;
        }

        .insights-section,
        .seller-section {
          padding: 76px 0;
        }

        .insight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .insight-card {
          min-height: 252px;
          border: 1px solid #d7d5dc;
          border-radius: 8px;
          text-align: center;
          padding: 24px;
          display: grid;
          place-items: center;
        }

        .insight-card img {
          height: 118px;
          width: 210px;
          object-fit: cover;
          border-radius: 8px;
        }

        .insight-card h3 {
          margin: 18px 0 6px;
          font-size: 24px;
          color: #424047;
        }

        .insight-card p {
          margin: 0;
          color: #66616c;
          font-size: 18px;
        }

        .sell-banner {
          border: 1px solid #d9d7de;
          border-radius: 18px;
          min-height: 184px;
          display: grid;
          grid-template-columns: 1fr 1.8fr 1fr;
          align-items: center;
          overflow: hidden;
        }

        .sell-banner img {
          width: 100%;
          height: 184px;
          object-fit: cover;
        }

        .sell-copy {
          text-align: center;
          padding: 20px;
        }

        .sell-copy h3 {
          margin: 0 0 18px;
          font-size: 27px;
          font-weight: 500;
          color: #46424d;
        }

        @media (max-width: 900px) {
          .hero-person {
            display: none;
          }

          .hero-content h1 {
            font-size: 36px;
          }

          .search-tabs,
          .insight-grid,
          .sell-banner {
            grid-template-columns: 1fr;
          }

          .search-row {
            height: auto;
            min-height: 92px;
            flex-wrap: wrap;
            gap: 14px;
            padding: 22px;
          }

          .localities {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <section className="home-hero">
        <img className="hero-person" src={heroImage} alt="Happy home buyers" />
        <div className="hero-content">
          <h1>Properties to buy in Guntakal</h1>
          <p>9K+ listings added daily and 73K+ total verified</p>
          <div className="search-box">
            <div className="search-tabs">
              {['BUY', 'RENT', 'COMMERCIAL', 'PG/CO-LIVING', 'PLOTS'].map((tab, index) => (
                <div className={`search-tab ${index === 0 ? 'active' : ''}`} key={tab}>{tab}</div>
              ))}
            </div>
            <div className="search-row">
              <span className="search-icon" aria-hidden="true"></span>
              <input className="search-input" placeholder="Search for locality, landmark, project, or builder" />
              <button className="primary-btn" type="button">Search</button>
            </div>
          </div>
          <div className="localities">
            <span>Popular Localities</span>
            {['Vidya Nagar', 'Broipet', 'Syamala Nagar'].map((item) => (
              <button className="chip" type="button" key={item}>{item} &gt;</button>
            ))}
          </div>
          <div className="owner-strip">Are you a Property Owner? <u>Sell / Rent for FREE</u></div>
        </div>
      </section>

      <section className="insights-section page-wrap">
        <h2 className="section-title">Research and Insights</h2>
        <div className="insight-grid">
          {[
            ['Price Trends', 'Find property rates & price trends of top locations', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80'],
            ['City Insights', 'Get to know about top cities before you invest', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80'],
            ['Housing Research', 'Find reports on Indian residential market', 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=500&q=80'],
          ].map(([title, text, image]) => (
            <article className="insight-card" key={title}>
              <img src={image} alt={title} />
              <div>
                <h3>{title} &gt;</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="seller-section page-wrap">
        <h2 className="section-title">Have a property to sell?</h2>
        <div className="sell-banner">
          <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=500&q=80" alt="House key handover" />
          <div className="sell-copy">
            <h3>List your property & connect with clients faster!</h3>
            <button className="outline-btn" type="button" onClick={() => navigate('/post-property')}>Sell your property</button>
          </div>
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=500&q=80" alt="Modern property" />
        </div>
      </section>
    </div>
  )
}
