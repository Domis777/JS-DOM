class PhonesFormComponent {
    htmlElement;
    onSubmit;
    brandInput;
    modelInput;
    yearInput;
    have5GInput;
    formNameElement;
    createButton;

    constructor({ onSubmit }) {
        this.htmlElement = document.createElement('form');
        this.htmlElement.className = 'd-inline-flex flex-column align-items-center bg-dark bg-gradient text-white p-3 rounded-3 shadow';
        this.htmlElement.innerHTML = `
        <h2 class="h5 text-center">Create New Phone</h2>
        <div class="mb-3 text-center">
            <label for="brand" class="form-label">Brand</label>
            <input type="text" class="form-control" id="brand" name="brand">
        </div>
        <div class="mb-3 text-center">
            <label for="model" class="form-label">Model</label>
            <input type="text" class="form-control" id="model" name="model">
        </div>
        <div class="mb-3 text-center">
            <label for="year" class="form-label">Release Year</label>
            <input type="number" class="form-control" id="year" name="year">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="have5G" name="have5G">
            <label class="form-check-label" for="have5G">Have 5G</label>
        </div>
        <button type="submit" class="btn btn-secondary w-100 fw-bold">Create Phone</button>`;
        this.onSubmit = onSubmit;
        this.brandInput = this.htmlElement.querySelector('[name=brand]');
        this.modelInput = this.htmlElement.querySelector('[name=model]');
        this.yearInput = this.htmlElement.querySelector('[name=year]');
        this.have5GInput = this.htmlElement.querySelector('[name=have5G]');
        this.formNameElement = this.htmlElement.querySelector('h2');
        this.createButton = this.htmlElement.querySelector('button');

        this.htmlElement.addEventListener('submit', this.handleSubmit);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const value = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            year: formData.get('year'),
            have5G: Boolean(formData.get('have5G')),
        }

        this.onSubmit(value);

        event.target.reset();
    }
}

export default PhonesFormComponent;