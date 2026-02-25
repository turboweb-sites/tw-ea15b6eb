function isMobile(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function getCallLinkProps(): { href: string; target?: string; rel?: string } {
  if (isMobile()) {
    return { href: 'tel:+18588000080' };
  }
  return {
    href: 'https://wa.me/18588000080',
    target: '_blank',
    rel: 'noopener noreferrer',
  };
}