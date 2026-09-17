import { activeLoan, loanHistory, loanOffer } from '../data/mock.js';

export const loanService = {
  getOffer: () => loanOffer,
  getActiveLoan: () => activeLoan,
  getHistory: () => loanHistory,
  calculateInstallment: (amount, tenor, rate = 0.012) => Math.round((amount * (1 + rate)) / tenor),
};
