public with sharing class DAP_DummyApiProxyAuraCtrl {
    @AuraEnabled
    public static List<DAP_UserOutputDto> getDummyApiUsers() {
        DAP_UserOutputDto user1 = new DAP_UserOutputDto();
        user1.id = 'efwefw343';
        user1.firstName = 'John';
        user1.lastName = 'Doe';
        //return new List<DAP_UserOutputDto>{user1};
        throw new DAP_DummyApiProxyException('No users available.');
    }
}