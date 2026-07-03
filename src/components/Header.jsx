import { useEffect, useState } from 'react'
import arrowIcon from '../assets/arrow.png'

const cityColumns = [
  ['Gulbarga', 'Guntakal', 'Gurgaon', 'Hailakandi', 'Hanumangarh', 'Hardoi', 'Hathras', 'Himatnagar'],
  ['Gumla', 'Guntur', 'Guwahati', 'Haldia', 'Hapur', 'Haridwar', 'Haveri', 'Hindupur'],
  ['Guna', 'Gurdaspur', 'Gwalior', 'Hamirpur', 'Harda', 'Hassan', 'Hazaribagh', 'Hingoli'],
]

const menu = [
  {
    label: 'For Buyers',
    path: '/buyers',
    items: ['Flats in Guntakal', 'House for sale', 'Verified projects', 'Owner properties'],
  },
  {
    label: 'For Tenants',
    path: '/buyers',
    items: ['Homes for rent', 'PG and co-living', 'Furnished homes', 'Shortlist alerts'],
  },
  {
    label: 'For Sellers',
    path: '/sellers',
    items: ['Post property free', 'Seller dashboard', 'Price estimate', 'Lead manager'],
  },
  {
    label: 'Services',
    path: '/services',
    items: ['Home loans', 'Packers and movers', 'Legal services', 'Property valuation'],
  },
  {
    label: 'News & Guide',
    path: '/news-guide',
    items: ['Price trends', 'City insights', 'Research reports', 'Buying guides'],
  },
]

export default function Header({ currentPath, navigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [city, setCity] = useState('Guntakal')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 34)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (event, path) => {
    event.preventDefault()
    navigate(path)
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 84px;
          display: flex;
          align-items: center;
          padding: 0 34px;
          background: linear-gradient(180deg, #3b2b70 0%, #5c4d95 100%);
          color: #ffffff;
          transition: height 0.25s ease, border-radius 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .site-header--scrolled {
          height: 78px;
          background: #4e2ccd;
          border-bottom-left-radius: 82px 22px;
          border-bottom-right-radius: 82px 22px;
          box-shadow: 0 10px 28px rgba(32, 23, 68, 0.34);
        }

        .header-logo {
          color: #ffffff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-width: 238px;
          font-weight: 900;
          letter-spacing: 0;
        }

        .logo-mark {
          width: 30px;
          height: 30px;
          border-radius: 4px;
          background: #ffdd00;
          position: relative;
        }

        .logo-mark::before,
        .logo-mark::after {
          content: '';
          position: absolute;
          background: #6330ea;
          height: 6px;
          width: 16px;
          top: 12px;
        }

        .logo-mark::before {
          left: 6px;
          transform: rotate(-42deg);
        }

        .logo-mark::after {
          right: 5px;
          transform: rotate(42deg);
        }

        .logo-main {
          font-size: 30px;
          line-height: 1;
        }

        .logo-dot {
          font-size: 17px;
          opacity: 0.92;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 24px;
          flex: 1;
        }

        .nav-item,
        .plain-link,
        .city-button {
          color: #ffffff;
          text-decoration: none;
          border: 0;
          background: transparent;
          font: inherit;
          font-size: 18px;
          font-weight: 750;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 24px 0;
          white-space: nowrap;
        }

        .nav-item.active,
        .plain-link.active {
          color: #fff7a6;
        }

        .chevron {
          width: 10px;
          height: 10px;
          object-fit: contain;
          transform: translateY(1px);
          filter: brightness(0) invert(1);
        }

        .nav-group,
        .city-group {
          position: relative;
        }

        .dropdown-panel,
        .city-panel {
          position: absolute;
          top: 70px;
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          background: #ffffff;
          color: #26222f;
          border-radius: 8px;
          box-shadow: 0 18px 50px rgba(35, 28, 74, 0.24);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }

        .nav-group:hover .dropdown-panel,
        .city-group:hover .city-panel {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-panel::before,
        .city-panel::before {
          content: '';
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 18px solid #ffffff;
        }

        .dropdown-panel {
          width: 310px;
          padding: 18px;
        }

        .dropdown-panel a {
          display: block;
          color: #3f394b;
          text-decoration: none;
          padding: 12px 10px;
          border-radius: 6px;
          font-weight: 650;
        }

        .dropdown-panel a:hover {
          background: #f0edf8;
          color: #5f2fe8;
        }

        .city-panel {
          width: min(676px, calc(100vw - 28px));
          left: 65px;
          transform: translateX(0) translateY(8px);
          overflow: hidden;
        }

        .city-group:hover .city-panel {
          transform: translateX(0) translateY(0);
        }

        .city-panel::before {
          left: 162px;
        }

        .city-search {
          margin: 24px;
          height: 66px;
          border: 1px solid #e2e2e8;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 20px;
          color: #999999;
          font-size: 21px;
          font-weight: 600;
        }

        .city-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 14px;
          max-height: 372px;
          overflow-y: auto;
          padding: 0 24px 14px;
          border-top: 1px solid #ececf2;
        }

        .city-link {
          border: 0;
          background: transparent;
          text-align: left;
          padding: 13px 6px;
          color: #2d2b31;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 5px;
        }

        .city-link:hover,
        .city-link.selected {
          background: #f0f0f7;
          color: #6a38ef;
          font-weight: 800;
        }

        .city-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          background: #f7f7fb;
          padding: 18px 28px;
          color: #111827;
          font-size: 18px;
        }

        .city-footer span {
          padding-right: 18px;
          border-right: 1px solid #d8d8e2;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .free-badge {
          background: #ff1d72;
          font-size: 12px;
          padding: 3px 5px;
          margin-left: 4px;
        }

        .login-shell {
          height: 50px;
          min-width: 134px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          color: #111111;
          background: #ffffff;
          border-radius: 11px;
          font-size: 18px;
          font-weight: 850;
          text-decoration: none;
        }

        .login-shell::after {
          content: '';
          width: 1px;
          height: 28px;
          background: #e0dfe7;
          order: 1;
        }

        .menu-lines {
          order: 2;
          width: 21px;
          height: 16px;
          display: grid;
          gap: 5px;
        }

        .menu-lines span {
          display: block;
          height: 2px;
          background: #2f2f35;
        }

        .site-header--scrolled .header-logo {
          min-width: 224px;
        }

        .site-header--scrolled .logo-mark {
          width: 28px;
          height: 28px;
        }

        .site-header--scrolled .logo-main {
          font-size: 28px;
        }

        .site-header--scrolled .logo-dot {
          font-size: 16px;
        }

        .site-header--scrolled .nav-item,
        .site-header--scrolled .plain-link,
        .site-header--scrolled .city-button {
          font-size: 16px;
          padding: 19px 0;
        }

        .site-header--scrolled .login-shell {
          height: 48px;
          min-width: 128px;
          font-size: 18px;
        }

        .site-header--scrolled .dropdown-panel,
        .site-header--scrolled .city-panel {
          top: 64px;
        }

        @media (max-width: 1180px) {
          .site-header {
            padding: 0 18px;
          }

          .header-logo {
            min-width: 210px;
          }

          .header-nav {
            gap: 18px;
          }

          .nav-item,
          .plain-link,
          .city-button {
            font-size: 15px;
          }
        }

        @media (max-width: 1400px) {
          .site-header {
            padding: 0 24px;
          }

          .header-logo {
            min-width: 230px;
          }

          .logo-main {
            font-size: 27px;
          }

          .logo-dot {
            font-size: 15px;
          }

          .header-nav {
            gap: 18px;
          }

          .header-nav .nav-group:first-of-type {
            display: none;
          }

          .nav-item,
          .plain-link,
          .city-button {
            font-size: 15px;
          }

          .login-shell {
            min-width: 124px;
            font-size: 17px;
          }

          .header-actions .plain-link {
            display: none;
          }
        }

        @media (max-width: 920px) {
          .header-nav {
            display: none;
          }

          .header-logo {
            min-width: 0;
            flex: 1;
          }

          .logo-main {
            font-size: 24px;
          }

          .logo-dot {
            font-size: 13px;
          }

          .header-actions {
            gap: 12px;
          }

          .plain-link.mobile-hide {
            display: none;
          }
        }
      `}</style>

      <a className="header-logo" href="/" onClick={(event) => go(event, '/')}>
        <span className="logo-mark" />
        <span className="logo-main">HOUSING</span>
        <span className="logo-dot">.COM</span>
      </a>

      <nav className="header-nav" aria-label="Main navigation">
        <div className="city-group">
          <button className="city-button" type="button">
            {city} <img className="chevron" src={arrowIcon} alt="" />
          </button>
          <div className="city-panel">
            <div className="city-search">Search for city</div>
            <div className="city-grid">
              {cityColumns.map((column) =>
                column.map((name) => (
                  <button
                    className={`city-link ${name === city ? 'selected' : ''}`}
                    key={name}
                    type="button"
                    onClick={() => {
                      setCity(name)
                      if (name === 'Guwahati') navigate('/guwahati')
                    }}
                  >
                    {name}
                  </button>
                )),
              )}
            </div>
            <div className="city-footer">
              <div>
                <span>All India</span>
                <span>International</span>
              </div>
              <strong>View popular cities &gt;</strong>
            </div>
          </div>
        </div>

        {menu.map((item) => (
          <div className="nav-group" key={item.label}>
            <a
              className={`nav-item ${currentPath === item.path ? 'active' : ''}`}
              href={item.path}
              onClick={(event) => go(event, item.path)}
            >
              {item.label} <img className="chevron" src={arrowIcon} alt="" />
            </a>
            <div className="dropdown-panel">
              {item.items.map((menuItem) => (
                <a href={item.path} key={menuItem} onClick={(event) => go(event, item.path)}>
                  {menuItem}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="header-actions">
        <a className="plain-link mobile-hide" href="/download-app" onClick={(event) => go(event, '/download-app')}>
          Download App
        </a>
        <a className="plain-link mobile-hide" href="/post-property" onClick={(event) => go(event, '/post-property')}>
          Post Property <span className="free-badge">FREE</span>
        </a>
        <a className="login-shell" href="/login" onClick={(event) => go(event, '/login')}>
          Login <span className="menu-lines"><span /><span /><span /></span>
        </a>
      </div>
    </header>
  )
}
