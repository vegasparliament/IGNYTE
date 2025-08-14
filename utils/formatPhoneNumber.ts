export function formatPhoneNumber(value: string): string {
  // Remove all non-numeric characters
  const cleaned = value.replace(/\D/g, "")

  // Limit to 10 digits
  const limited = cleaned.slice(0, 10)

  // Format as (XXX) XXX-XXXX
  if (limited.length >= 6) {
    return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`
  } else if (limited.length >= 3) {
    return `(${limited.slice(0, 3)}) ${limited.slice(3)}`
  } else if (limited.length > 0) {
    return `(${limited}`
  }

  return ""
}
