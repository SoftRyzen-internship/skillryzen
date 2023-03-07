export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');

  const phoneNumberPattern = /^38(\d{3})(\d{3})(\d{2})(\d{2})$/;

  const matchPattern = cleaned.match(phoneNumberPattern);

  if (matchPattern) {
    return `+3 8 ${matchPattern[1]} ${matchPattern[2]} ${matchPattern[3]} ${matchPattern[4]}`;
  }

  return phoneNumber;
}
