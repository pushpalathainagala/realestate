import { useState } from 'react'

export default function Login() {
  const [mobile, setMobile] = useState('')

  return (
    <section className="login-page">
      <style>{`
        .login-page {
          min-height: calc(100vh - 92px);
          display: grid;
          place-items: center;
          padding: 70px 18px;
          background:
            linear-gradient(rgba(55, 34, 132, 0.78), rgba(55, 34, 132, 0.78)),
            url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80') center/cover;
        }

        .login-card {
          width: min(430px, 100%);
          background: #ffffff;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 22px 60px rgba(24, 16, 62, 0.28);
        }

        .login-card h1 {
          margin: 0 0 8px;
          color: #30283e;
          font-size: 34px;
        }

        .login-card p {
          color: #6d6877;
          margin: 0 0 24px;
        }

        .login-card label {
          display: grid;
          gap: 8px;
          color: #4b4457;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .login-card input {
          height: 52px;
          border: 1px solid #ded9e7;
          border-radius: 8px;
          padding: 0 14px;
          font-size: 18px;
        }

        .login-card .primary-btn {
          width: 100%;
        }

        .login-note {
          margin-top: 18px;
          color: #817b8a;
          font-size: 13px;
          text-align: center;
        }
      `}</style>
      <form className="login-card">
        <h1>Login</h1>
        <p>Access saved homes, alerts, seller tools, and enquiries.</p>
        <label>
          Mobile number
          <input value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="Enter mobile number" />
        </label>
        <button className="primary-btn" type="button">Continue</button>
        <div className="login-note">By continuing you agree to receive property updates and service messages.</div>
      </form>
    </section>
  )
}
