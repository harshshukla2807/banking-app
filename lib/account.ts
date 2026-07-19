export function generateCustomerId() {
  return `CUST${Math.floor(
    100000 + Math.random() * 900000
  )}`;
}

export function generateAccountNumber() {
  let account = "";

  for (let i = 0; i < 12; i++) {
    account += Math.floor(Math.random() * 10);
  }

  return account;
}