export function showSpinner(spinnerRef, elementRef) {
  spinnerRef.classList.remove('is-hidden');
  elementRef?.classList.add('is-hidden');

  // refs1.classList.add('is-hidden');
  // refs2.classList.remove('is-hidden');
}

export function hideSpinner(spinnerRef, elementRef) {
  spinnerRef.classList.add('is-hidden');
  elementRef?.classList.remove('is-hidden');

  // refs3.classList.add('is-hidden');
  // refs4.classList.remove('is-hidden');
}
