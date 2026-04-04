export function getApiErrorMessage(error: unknown): string {
  try {
    const e = error as any;

    if (e?.response?.data?.message) {
      return String(e.response.data.message);
    } else if (e?.message) {
      return String(e.message);
    } else {
      return 'Something went wrong. Please try again.';
    }
  } catch {
    return 'Something went wrong. Please try again.';
  }
}