import { LightningElement, track } from 'lwc';
import { createElement } from 'lwc';
import { reduceErrors } from 'c/ldsUtilities';
import DapUserList from 'c/dapUserList';
import getDummyApiUsers from '@salesforce/apex/DAP_DummyApiProxyAuraCtrl.getDummyApiUsers';

const mockGetDummyApiUsersWithMultipleUsers = require('./data/getDummyApiUsersWithMultipleUsers.json');
const mockGetDummyApiUsersWithNoUsers = require('./data/getDummyApiUsersWithNoUsers.json');
const mockGetDummyApiUsersWithOneUser = require('./data/getDummyApiUsersWithOneUser.json');

jest.mock(
  '@salesforce/apex/DAP_DummyApiProxyAuraCtrl.getDummyApiUsers',
  () => {
    const {
      createApexTestWireAdapter
    } = require('@salesforce/sfdx-lwc-jest');
    return {
      default: createApexTestWireAdapter(jest.fn())
    };
  },
  { virtual: true }
);

const elementUnderTest = 'c-dap-user-list';
const childUserElement = 'c-dap-user-item';
describe(elementUnderTest, () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    jest.clearAllMocks();
  });

  describe('getDummyApiUsers @wire data', () => {
    it('renders one user', () => {
      // Arrange
     getDummyApiUsers.mockResolvedValue(mockGetDummyApiUsersWithOneUser);
     const element = createElement(elementUnderTest, {
        is: DapUserList
      });

      // Act
      document.body.appendChild(element);

      return Promise.resolve()
        .then(() => {
              // Assert
            const userElements = element.shadowRoot.querySelectorAll(childUserElement);
            expect(userElements.length).toBe(mockGetDummyApiUsersWithOneUser.length);
          });
    });

    it('renders multiple users', () => {
      // Arrange
      getDummyApiUsers.mockResolvedValue(mockGetDummyApiUsersWithMultipleUsers);
      const element = createElement(elementUnderTest, {
        is: DapUserList
      });

      // Act
      document.body.appendChild(element);

      return Promise.resolve()
        .then(() => {
              // Assert
            const userElements = element.shadowRoot.querySelectorAll(childUserElement);
            expect(userElements.length).toBe(mockGetDummyApiUsersWithMultipleUsers.length);
          });
    });

    it('renders no users', () => {
      // Arrange
      getDummyApiUsers.mockResolvedValue(mockGetDummyApiUsersWithNoUsers);
      const element = createElement(elementUnderTest, {
        is: DapUserList
      });

      // Act
      document.body.appendChild(element);

      return Promise.resolve()
        .then(() => {
              // Assert
              const userElements = element.shadowRoot.querySelectorAll(childUserElement);
              expect(userElements.length).toBe(mockGetDummyApiUsersWithNoUsers.length);

              const noUsersMessage = element.shadowRoot.querySelectorAll('p');
              expect(noUsersMessage.textContent).toBe('No users returned.');
          });
    });
  });
});
