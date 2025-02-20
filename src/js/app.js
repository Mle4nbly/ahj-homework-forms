import { Tooltip } from "./tooltip";

const button = document.querySelector('.btn')

let actualPopover = null;

const popoversFabric = new Tooltip();

const onFocus = ( event ) => {

    if (!actualPopover) {
        actualPopover = popoversFabric.showTooltip(event.target)
    };

    button.addEventListener('blur', onBlur);
}

const onBlur = () => {
    if (actualPopover) {
        popoversFabric.removeTooltip(actualPopover);
        actualPopover = null;
    }
    
    button.removeEventListener('blur', onBlur)
}

button.addEventListener('focus', onFocus);