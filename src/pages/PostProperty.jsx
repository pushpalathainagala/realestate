import { useState } from 'react'

export default function PostProperty() {
  const [type, setType] = useState('Sell')

  return (
    <section className="post-page page-wrap">
      <style>{`
        .post-page {
          padding: 72px 0 100px;
        }

        .post-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 34px;
          align-items: start;
        }

        .post-intro h1 {
          font-size: 48px;
          color: #30283e;
          margin: 0 0 16px;
        }

        .post-intro p {
          color: #6d6877;
          font-size: 20px;
          line-height: 1.55;
          margin: 0 0 24px;
        }

        .post-intro img {
          width: 100%;
          height: 320px;
          border-radius: 8px;
          object-fit: cover;
        }

        .post-form {
          border: 1px solid #dfdbe7;
          border-radius: 8px;
          padding: 26px;
          background: #ffffff;
          box-shadow: 0 18px 46px rgba(42, 32, 84, 0.08);
        }

        .toggle-row {
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
        }

        .toggle-row button {
          flex: 1;
          border: 1px solid #ded9ea;
          background: #ffffff;
          color: #4d465a;
          padding: 13px;
          border-radius: 8px;
          font-weight: 850;
          cursor: pointer;
        }

        .toggle-row button.active {
          border-color: #6430e8;
          background: #f0ebff;
          color: #5c2fe0;
        }

        .field-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .post-form label {
          display: grid;
          gap: 7px;
          color: #4b4457;
          font-weight: 750;
        }

        .post-form input,
        .post-form select {
          height: 48px;
          border: 1px solid #ded9e7;
          border-radius: 7px;
          padding: 0 13px;
          font: inherit;
        }

        .post-form .wide {
          grid-column: 1 / -1;
        }

        .post-form .primary-btn {
          margin-top: 22px;
          width: 100%;
        }

        @media (max-width: 850px) {
          .post-layout,
          .field-grid {
            grid-template-columns: 1fr;
          }

          .post-form .wide {
            grid-column: auto;
          }
        }
      `}</style>
      <div className="post-layout">
        <div className="post-intro">
          <h1>Post property for free</h1>
          <p>Share the essentials, add photos, and start receiving matching buyer or tenant enquiries.</p>
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80" alt="Property posting" />
        </div>
        <form className="post-form">
          <div className="toggle-row">
            {['Sell', 'Rent'].map((name) => (
              <button className={type === name ? 'active' : ''} type="button" key={name} onClick={() => setType(name)}>{name}</button>
            ))}
          </div>
          <div className="field-grid">
            <label>Property Type<select><option>Apartment</option><option>Independent House</option><option>Plot</option></select></label>
            <label>City<input defaultValue="Guntakal" /></label>
            <label className="wide">Locality<input placeholder="Enter locality" /></label>
            <label>Expected Price<input placeholder="Example: 45 Lac" /></label>
            <label>Phone Number<input placeholder="Mobile number" /></label>
          </div>
          <button className="primary-btn" type="button">Submit property</button>
        </form>
      </div>
    </section>
  )
}
