/**
 * Black-Scholes option pricing model (no dividends)
 */

export type BSInputs = {
  type: "call" | "put";
  S: number; // Stock price
  K: number; // Strike price
  T: number; // Time to expiration (years)
  r: number; // Risk-free rate
  sigma: number; // Volatility
};

export type BSGreeks = {
  delta: number;
  gamma: number;
  theta: number; // per year
  vega: number;
  rho: number;
};

/**
 * Standard normal cumulative distribution function
 * Approximation using Abramowitz and Stegun formula
 */
export function normCDF(x: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x) / Math.sqrt(2.0);

  const t = 1.0 / (1.0 + p * x);
  const y =
    1.0 -
    ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return 0.5 * (1.0 + sign * y);
}

/**
 * Standard normal probability density function
 */
export function normPDF(x: number): number {
  return (1.0 / Math.sqrt(2.0 * Math.PI)) * Math.exp(-0.5 * x * x);
}

/**
 * Calculate d1 parameter for Black-Scholes
 */
export function d1(S: number, K: number, T: number, r: number, sigma: number): number {
  if (T <= 0 || sigma <= 0) return 0;
  return (
    (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) /
    (sigma * Math.sqrt(T))
  );
}

/**
 * Calculate d2 parameter for Black-Scholes
 */
export function d2(S: number, K: number, T: number, r: number, sigma: number): number {
  if (T <= 0 || sigma <= 0) return 0;
  const d1Val = d1(S, K, T, r, sigma);
  return d1Val - sigma * Math.sqrt(T);
}

/**
 * Calculate Black-Scholes option price
 */
export function bsPrice(inputs: BSInputs): number {
  const { type, S, K, T, r, sigma } = inputs;

  if (T <= 0) {
    // At expiration
    if (type === "call") {
      return Math.max(S - K, 0);
    } else {
      return Math.max(K - S, 0);
    }
  }

  if (sigma <= 0) {
    // No volatility
    const intrinsic = type === "call" ? S - K : K - S;
    return Math.max(intrinsic, 0);
  }

  const d1Val = d1(S, K, T, r, sigma);
  const d2Val = d2(S, K, T, r, sigma);

  const Nd1 = normCDF(d1Val);
  const Nd2 = normCDF(d2Val);
  const Nnegd1 = normCDF(-d1Val);
  const Nnegd2 = normCDF(-d2Val);

  if (type === "call") {
    return S * Nd1 - K * Math.exp(-r * T) * Nd2;
  } else {
    return K * Math.exp(-r * T) * Nnegd2 - S * Nnegd1;
  }
}

/**
 * Calculate Black-Scholes Greeks
 */
export function bsGreeks(inputs: BSInputs): BSGreeks {
  const { type, S, K, T, r, sigma } = inputs;

  if (T <= 0 || sigma <= 0) {
    return {
      delta: type === "call" ? (S > K ? 1 : 0) : S < K ? -1 : 0,
      gamma: 0,
      theta: 0,
      vega: 0,
      rho: 0,
    };
  }

  const d1Val = d1(S, K, T, r, sigma);
  const d2Val = d2(S, K, T, r, sigma);
  const Nd1 = normCDF(d1Val);
  const Nnegd1 = normCDF(-d1Val);
  const Nd2 = normCDF(d2Val);
  const Nnegd2 = normCDF(-d2Val);
  const pdfD1 = normPDF(d1Val);

  const sqrtT = Math.sqrt(T);
  const expRT = Math.exp(-r * T);

  // Delta
  const delta = type === "call" ? Nd1 : -Nnegd1;

  // Gamma (same for call and put)
  const gamma = pdfD1 / (S * sigma * sqrtT);

  // Theta (per year)
  const theta =
    type === "call"
      ? -((S * pdfD1 * sigma) / (2 * sqrtT)) -
        r * K * expRT * Nd2
      : -((S * pdfD1 * sigma) / (2 * sqrtT)) +
        r * K * expRT * Nnegd2;

  // Vega (same for call and put)
  const vega = (S * pdfD1 * sqrtT) / 100; // divided by 100 for percentage

  // Rho
  const rho =
    type === "call"
      ? (K * T * expRT * Nd2) / 100 // divided by 100 for percentage
      : (-K * T * expRT * Nnegd2) / 100;

  return {
    delta,
    gamma,
    theta,
    vega,
    rho,
  };
}

