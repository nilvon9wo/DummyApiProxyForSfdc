import { LightningElement, api } from 'lwc';
import { createElement } from 'lwc';
import DapUserItem from 'c/dapUserItem';

const elementUnderTest = 'c-dap-user-item';
const mockUser = {
  firstName: 'John',
  lastName: 'Doe'
};

describe(elementUnderTest, () => {
    describe('element renders', () => {
      it('renders lightning-formatted-name', () => {
        // Arrange
        const element = createElement(elementUnderTest, {
                is: DapUserItem,
            });
        element.user = mockUser;

        // Act
        document.body.appendChild(element);

        // Assert
        const listElement = element.shadowRoot.querySelector('lightning-formatted-name')
        expect(listElement)
            .toBeTruthy();

        // Cleanup
        document.body.removeChild(element);
      });
    });
});
