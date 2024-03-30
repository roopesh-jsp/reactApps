export default function Userinputs({ inputs, fun }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial ivestment</label>
          <input
            type="number"
            required
            value={inputs.initialInvestment}
            onChange={(event) => fun("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>annual ivestment</label>
          <input
            type="number"
            required
            value={inputs.annualInvestment}
            onChange={(event) => fun("annualInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={inputs.expectedReturn}
            onChange={(event) => fun("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={inputs.duration}
            onChange={(event) => fun("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
