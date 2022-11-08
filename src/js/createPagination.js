import { refs } from "./refs";

export default function createPagination(totalPages, page, ref) {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) { //показывает следующую страницу если значение пейдж больше чем один
        liTag += `<li class="btn prev"><span><i class="fas fa-angle-left"></i> &#171;</span></li>`;
    }
    if (page > 2) { //если значение пейдж меньше чем 2 - тогда добавь один после предыдущей кнопки
        liTag += `<li class="first numb"><span>1</span></li>`;
        if (page > 3) { //если значение пейдж больше чем 3 - тогда добавь ... полсе первой лишки или пейдж
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    if (page == totalPages) { //сколько страниц или лишек показывается перед текущей Ли
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }

    if (page == 1) { //сколько страниц или лишек показывается после текущей Ли
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage = afterPage + 1;
    }
    for (let plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) { //если длина пейдж больше чем тоталпейдж тогда продолжай
            continue;
        }
        if (plength == 0) {
            plength = plength + 1;
        }
        if (page == plength) {
            active = "active"; //навешивает активный клас
        } else {
            active = "";
        }
        liTag += `<li class="numb ${active}"><span>${plength}</span></li>`;//рендэрит разметку строки с текущим активным номером страници
    }
    if (page < totalPages - 1) {
        if (page < totalPages - 2) {//рендерит разметку троиточие если страниц меньше чем две
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="last numb"><span>${totalPages}</span></li>`;
    }
    if (page < totalPages) { //показывает следующую кнопку если значени страницы меньше 20
        liTag += `<li class="btn next"><span>&#187 <i class="fas fa-angle-right"></i></span></li>`;
    }
    ref.innerHTML = liTag; // добавляет все лишки в список разметки
    return liTag;
}