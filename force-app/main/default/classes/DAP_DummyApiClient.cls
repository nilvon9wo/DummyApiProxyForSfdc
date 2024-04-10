public with sharing class DAP_DummyApiClient {
    private final DAO_DummyApiSettingsSelector dummyApiSettingsSelector;
    private final J2O_JsonToApexObjectParser jsonToApexObjectParser;
    private final J2O_ParserConfig parserConfig;

    private DAP_DummyApiClient(
            DAO_DummyApiSettingsSelector dummyApiSettingsSelector,
            J2O_JsonToApexObjectParser jsonToApexObjectParser,
            J2O_ParserConfig parserConfig
        )
    {
        this.dummyApiSettingsSelector = dummyApiSettingsSelector;
        this.jsonToApexObjectParser = jsonToApexObjectParser;
        this.parserConfig = parserConfig;
    }

    private DAP_DummyApiClient()
    {
        this(DAO_DummyApiSettingsSelector.getInstance(), J2O_JsonToApexObjectParser.getInstance(), createParserConfig());
    }

    private static J2O_ParserConfig createParserConfig() {
        return new J2O_ParserConfig(DAP_UserDataEnvelope.class)
                .setReplacementPropertyNameByJsonPropertyMap(new Map<String, String>{
                        'data' => 'users',
                        'total' => 'countAtSource',
                        'page' => 'pageNumber',
                        'limit' => 'maxRecordsOnPage'
                });
    }

    private static DAP_DummyApiClient INSTANCE;
    public static DAP_DummyApiClient getInstance(){
        if (INSTANCE == null) {
            INSTANCE = new DAP_DummyApiClient();
        }

        return INSTANCE;
    }


    public DAP_UserDataEnvelope getUsers() {
        /* TODO
            1. Get custom settings.
            2. Request users from Dummy Api
         */
        String response = '';
        return (DAP_UserDataEnvelope) this.jsonToApexObjectParser.parseDocumentToObject(response, parserConfig);
    }


}