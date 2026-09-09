export const CONTACT_ENDPOINT =
  'https://formsubmit.co/ajax/kubradmrgc965@gmail.com'

const RATE_KEY = 'kd-contact-at'
const RATE_MS = 45_000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type ContactPayload = {
  name: string
  email: string
  message: string
  website?: string
}

export type ContactResult =
  | { ok: true; activation?: boolean }
  | { ok: false; error: string }

function tooSoon() {
  const last = Number(sessionStorage.getItem(RATE_KEY) || 0)
  return Date.now() - last < RATE_MS
}

export function validateContact(data: ContactPayload): string | null {
  if (data.website?.trim()) return null
  if (data.name.trim().length < 2) return 'Ad en az 2 karakter olmalı.'
  if (!EMAIL_RE.test(data.email.trim())) return 'Geçerli bir e-posta girin.'
  if (data.message.trim().length < 12) return 'Mesaj en az 12 karakter olmalı.'
  if (tooSoon()) return 'Biraz bekleyip tekrar deneyin.'
  return null
}

export async function sendContact(data: ContactPayload): Promise<ContactResult> {
  if (data.website?.trim()) return { ok: true }

  const invalid = validateContact(data)
  if (invalid) return { ok: false, error: invalid }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
      _replyto: data.email.trim(),
      _subject: 'Portfolyo iletişim formu',
      _template: 'table',
      _captcha: false,
    }),
  })

  let result: { success?: boolean | string; message?: string } = {}
  try {
    result = (await response.json()) as {
      success?: boolean | string
      message?: string
    }
  } catch {
    return {
      ok: false,
      error: 'Form servisi yanıt vermedi. Doğrudan e-posta yazabilirsiniz.',
    }
  }
  const activation = /activat/i.test(String(result.message || ''))
  const accepted =
    result.success === true ||
    result.success === 'true' ||
    activation

  if (!response.ok || !accepted) {
    return { ok: false, error: 'Form servisi mesajı alamadı.' }
  }

  sessionStorage.setItem(RATE_KEY, String(Date.now()))
  return { ok: true, activation }
}
