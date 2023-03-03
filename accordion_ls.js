const accordionItemHeadersls = document.querySelectorAll(".accordion-item-headerls");

accordionItemHeadersls.forEach(accordionItemHeaderls => {
    accordionItemHeaderls.addEventListener("click", event => {
        //const currentlyActiveAccordionItemHeaderls = document.querySelector(".accordion-item-headerls.active");
        //if (currentlyActiveAccordionItemHeaderls && currentlyActiveAccordionItemHeaderls!==accordionItemHeaderls) {
        //    currentlyActiveAccordionItemHeaderls.classList.toggle("active");
        //    currentlyActiveAccordionItemHeaderls.nextElementSibling.style.maxHeight = 0;
        //}

        accordionItemHeaderls.classList.toggle("active");
        const accordionItemBodyls =accordionItemHeaderls.nextElementSibling;
        if(accordionItemHeaderls.classList.contains("active")) {
            accordionItemBodyls.style.maxHeight = accordionItemBodyls.scrollHeight + "px";
        }
        else {
            accordionItemBodyls.style.maxHeight = 0;
        
        }
    });
});