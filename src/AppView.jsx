import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'

function getPath() {
  return window.location.pathname || '/'
}

export default function AppView({ routes }) {
  const [path, setPath] = useState(getPath())
  const Page = routes[path] || routes['/']

  useEffect(() => {
    const onPopState = () => setPath(getPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (nextPath) => {
    if (nextPath === path) return
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="housing-app">
      <style>{`
        .housing-app {
          min-height: 100vh;
          background: #ffffff;
          color: #34303d;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        .housing-app * {
          box-sizing: border-box;
        }

        .page-wrap {
          width: min(1536px, calc(100% - 48px));
          margin: 0 auto;
        }

        .section-title {
          color: #3e3d42;
          font-size: 38px;
          line-height: 1.15;
          margin: 0 0 26px;
          font-weight: 800;
        }

        .section-subtitle {
          color: #6d6878;
          font-size: 17px;
          margin: -14px 0 28px;
        }

        .primary-btn {
          border: 0;
          background: #6128e8;
          color: #ffffff;
          padding: 15px 28px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(73, 31, 176, 0.22);
        }

        .outline-btn {
          background: #ffffff;
          border: 1px solid #6226f0;
          color: #5420d8;
          padding: 14px 26px;
          border-radius: 8px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 760px) {
          .page-wrap {
            width: min(100% - 28px, 1536px);
          }

          .section-title {
            font-size: 28px;
          }
        }
      `}</style>
      <Header currentPath={path} navigate={navigate} />
      <main>
        <Page navigate={navigate} />
      </main>
    </div>
  )
}
