class ErrorComponent{
    htmlElement;
    errorHtmlElement;
    errorTextElement;

    constructor() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'shadow'
        this.htmlElement.innerHTML = `
        <div class="d-flex gap-2 alert alert-danger alert-dismissible fade show d-none h5" role="alert">
        <i class="bi bi-exclamation-triangle-fill"></i>
            <div class="js-error-text"></div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

        this.errorHtmlElement = this.htmlElement.querySelector('.alert');
        this.errorTextElement = this.htmlElement.querySelector('.js-error-text');
        const errorDelBtnHtmlElement = this.htmlElement.querySelector('button');
        errorDelBtnHtmlElement.addEventListener('click', this.hide);
    }

    hide = () => {
        this.errorHtmlElement.classList.add('d-none');
    }

    show(message) {
        this.errorHtmlElement.classList.remove('d-none');
        this.errorTextElement.innerHTML = message;
    }
}

export default ErrorComponent;