import { LightningElement } from 'lwc';
import { createElement } from 'lwc';
import DapDummyApiProxy from 'c/dapDummyApiProxy';

const elementUnderTest = 'c-dap-dummy-api-proxy';
describe(elementUnderTest, () => {
    describe('element renders', () => {
      it('renders c-dap-user-list', () => {
        // Arrange
        const element = createElement(elementUnderTest, {
                is: DapDummyApiProxy
            });

        // Act
        document.body.appendChild(element);

        // Assert
        const listElement = element.shadowRoot.querySelector('c-dap-user-list')
        expect(listElement)
            .toBeTruthy();

        // Cleanup
        document.body.removeChild(element);
      });
    });
});
