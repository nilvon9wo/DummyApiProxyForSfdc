# UserList Demo Project

This project demonstrates how to set up a simple user interface to view user profiles from dummyapi.io. It uses Apex, Lightning Web Components, and Named Credentials to interact with the dummyapi.io API.

## Prerequisites

To run this project, ensure you have deployment permissions on a Salesforce org.
This project has been tested on a "Developer org". 
It will most likely work under different environments, but compatibility is not guaranteed.

## Setup Instructions

1. **Clone the repository**

   Clone this repository to your local machine using your favorite Git client or the following command:

   ```bash
   git clone https://github.com/nilvon9wo/DummyApiProxy.git
   ```

2. **Deploy to your Salesforce org**
  
   The simplest solution may be to connect your IDE (e.g. Intelli-J with Illuminated Cloud) to your org,
   and then use your IDE for deployment.
   
   Alternatively, to use the Salesforce CLI, see [Salesforce CLI Command Reference / sf / deploy Commands](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_deploy_commands_unified.htm)

3. **Configure API Key**
In your Salesforce org:
   1. Click the gear in the upper right.
   2. Click Setup.
   3. In the "Quick Find", type "named" and then click "Named Credentials".
   4. Click "Dummy Api Named Credential".
   5. Click "Dummy Api External Credential".
   6. In the "Principals" section, click "New".
   7. Give your new principal a name (e.g., "Dummy Api Principal").
   8. In the "Authentication Parameters" section, click "Add".
   9. Give Parameter 1 the name "DummyApiClientKey".
   10. Assign your dummyapi.io API key to "Value"

4. **Authorize users**
   Grant one or more users to the "Dummy_Api_Permissions" Permission Set.

   Replace SOME_VALID_API_KEY with your valid API key from dummyapi.io.

5. **View the Lightning App**
   1. Click the App Launcher (a.k.a. Navigation Grid/Menu, Waffle Menu).
   2. Search for and select "Dummy Api Proxy App"
   
## Contributing
Feel free to fork the project and submit pull requests for any improvements or fixes.

## License
This project is open-sourced under the MIT License. See the LICENSE file for more details.
