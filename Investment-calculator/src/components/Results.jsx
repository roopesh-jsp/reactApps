import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ inputs }) {
  let results = calculateInvestmentResults(inputs);
  const initialInvest =
    results[0].valueEndOfYear -
    results[0].annualInvestment -
    results[0].interest;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (year)</th>
          <th>Total Intrest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvest;
          const amountInvested = yearData.valueEndOfYear - yearData.interest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(amountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
