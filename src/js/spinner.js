import { refs } from "./refs"

export function showSpinner() {
    refs.iconSearch.classList.add('is-hidden');
    refs.spinner.classList.remove('is-hidden');
}

export function hideSpinner() {
    refs.spinner.classList.add('is-hidden');
    refs.iconSearch.classList.remove('is-hidden');
}

