import ContainerComponent from "./components/container-component.js";
import FlexContainerComponent from "./Components/flex-container-component.js";
import PhonesTableComponents from "./components/phones-table-component.js";
import ApiService from "./services/api-service.js";
import ErrorComponent from "./components/error-component.js";
import PhonesFormComponent from "./components/phones-form-component.js";

let errorComponent;
let phonesTableComponents;
let phonesFormComponent;

let phones;
let editRowID = null;

const handlePhoneDelete = async (id) => {
    try {
        await ApiService.deletePhone(id);
        phones = await ApiService.getPhones();
        phonesTableComponents.renderPhones(phones, editRowID);
    } catch (error) {
        errorComponent.show(error.message);
    }
}

const handlePhoneCreate = async (phoneProps) => {
    try {
        await ApiService.createPhone(phoneProps);
        phones = await ApiService.getPhones();
        phonesTableComponents.renderPhones(phones, editRowID);
    } catch (error) {
        errorComponent.show(error.message);
    }
}

const handlePhoneUpdate = async (phoneProps) => {
    try {
        await ApiService.updatePhone(editRowID, phoneProps);
        phones = await ApiService.getPhones();
        editRowID = null;
        phonesFormComponent.disableEdit();
        phonesTableComponents.renderPhones(phones, editRowID);
    } catch (error) {
        errorComponent.show(error.message);
    }
}

const handlePhoneEdit = async (phoneProps) => {
    if (editRowID === phoneProps.id) editRowID = null;
    else editRowID = phoneProps.id;

    phonesTableComponents.renderPhones(phones, editRowID);
    if (editRowID === null) {
        phonesFormComponent.disableEdit();
        phonesFormComponent.onSubmit = handlePhoneCreate
    } else {
        phonesFormComponent.enableEdit(phoneProps);
        phonesFormComponent.onSubmit = handlePhoneUpdate;
    }
}

(async function initialize() {
        const rootHtmlElement = document.querySelector('#root');
        const containerComponent = new ContainerComponent();
        errorComponent = new ErrorComponent();
        containerComponent.addComponents(errorComponent);
        rootHtmlElement.append(containerComponent.htmlElement);
        try {
            phones = await ApiService.getPhones()
            phonesTableComponents = new PhonesTableComponents({ 
                phones,
                onDelete: handlePhoneDelete,
                onEdit: handlePhoneEdit,
            });
            phonesFormComponent = new PhonesFormComponent({
                onSubmit: handlePhoneCreate,
            });
            const flexContainerComponent = new FlexContainerComponent();
            flexContainerComponent.addComponents(phonesTableComponents, phonesFormComponent);
            containerComponent.addComponents(flexContainerComponent);
        } catch (error) {
            errorComponent.show(error.message);
            console.log(':>> ', error);
        }
    })();