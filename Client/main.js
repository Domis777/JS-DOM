import ContainerComponent from "./components/container-component.js";
import FlexContainerComponent from "./Components/flex-container-component.js";
// import ApiService from "./services/api-service.js";



(async function initialize() {
        const rootHtmlElement = document.querySelector('#root')
        const containerComponent = new ContainerComponent()
        rootHtmlElement.append(containerComponent.htmlElement)
        try {
            const flexContainerComponent = new FlexContainerComponent();
            containerComponent.addComponents(flexContainerComponent)
        } catch (error) {
            
            console.log(':>> ', error);
        }
    })();