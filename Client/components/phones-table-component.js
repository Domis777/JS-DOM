class PhonesTableComponents{
    htmlElement;
    tbody;
    onDelete;
    onEdit;
    editRowID;

    constructor({ phones, onDelete, onEdit }) {
        this.htmlElement = document.createElement('table');
        this.htmlElement.className = 'table bg-gradient border border-secondary border-1 shadow';
        this.htmlElement.innerHTML = `
        <thead class="bg-secondary bg-gradient fs-6">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th>Release Year</th>
                <th scope="col">Is 5G</th>
                <th class="text-end pe-5" scope="col">Edit</th>
            </tr>
        </thead>
        <tbody class="bg-dark text-white align-middle"></tbody>`;
        this.tbody = this.htmlElement.querySelector('tbody');
        this.onDelete = onDelete;
        this.onEdit = onEdit;
        this.editRowID = null;

        this.renderPhones(phones, null);
    }

    createRowHtmlElement = (phone) => {
        const { id, brand, model, year, have5G } = phone;
        const tr = document.createElement('tr');
        const thisRowEdited = id === this.editRowID;
        if (thisRowEdited) tr.classList.add('bg-warning', 'text-dark');
        tr.innerHTML = `
        <td>${id}</td>
        <td>${brand}</td>
        <td>${model}</td>
        <td>${year}</td>
        <td>${have5G}</td>
        <td>
            <div class="d-flex justify-content-end gap-2 pe-2">
            ${thisRowEdited ? `
            <button type="button" class="btn btn-secondary js-btn-close">
            <i class="bi bi-x"></i></i>
            </button>` : `
            <button type="button" class="btn btn-warning js-btn-close">
            <i class="bi bi-gear"></i>
            </button>`}
                <button type="button" class="btn btn-danger js-btn-delete"><i class="bi bi-trash"></i></button>
            </div>
        </td>`;

        const deleteButton = tr.querySelector('.js-btn-delete');
        deleteButton.addEventListener('click', () => this.onDelete(id))

        const updateButton = tr.querySelector('.js-btn-close');
        updateButton.addEventListener('click', () => this.onEdit(phone))
        
        return tr;
    }

    renderPhones(phones, editRowID) {
        this.editRowID = editRowID;
        const rowsHtmlElements = phones.map(this.createRowHtmlElement);

        this.tbody.innerHTML = null
        this.tbody.append(...rowsHtmlElements);
    }
}

export default PhonesTableComponents;