import { LightningElement, api } from 'lwc';
import { createElement } from 'lwc';
import DapUserItem from 'c/dapUserItem';

const elementUnderTest = 'c-dap-user-item';
const mockUser = {
  firstName: 'John',
  lastName: 'Doe'
};

describe(elementUnderTest, () => {
  it('renders user name with lightning-formatted-name', () => {
    // Arrange
    const element = createElement(elementUnderTest, {
      is: DapUserItem,
      user: mockUser
    });

    // Act
    document.body.appendChild(element);

    // Assert
    const formattedName = element.shadowRoot.querySelector('lightning-formatted-name');

    expect(formattedName)
        .toBeTruthy();
    expect(formattedName.textContent)
        .toBe(`${mockUser.firstName} ${mockUser.lastName}`);

    // Cleanup
    document.body.removeChild(element);
  });
});