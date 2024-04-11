public with sharing class DAP_DummyApiClient {
    private final DAP_DummyApiClientUserRequestFty userRequestFactory;
    private final Http http;
    private final J2O_JsonToApexObjectParser jsonToApexObjectParser;
    private final J2O_ParserConfig parserConfig;

    private DAP_DummyApiClient(
            DAP_DummyApiClientUserRequestFty userRequestFactory,
            Http http,
            J2O_JsonToApexObjectParser jsonToApexObjectParser,
            J2O_ParserConfig parserConfig
        )
    {
        this.userRequestFactory = userRequestFactory;
        this.http = http;
        this.jsonToApexObjectParser = jsonToApexObjectParser;
        this.parserConfig = parserConfig;
    }

    private DAP_DummyApiClient()
    {
        this(
                DAP_DummyApiClientUserRequestFty.getInstance(),
                new Http(),
                J2O_JsonToApexObjectParser.getInstance(),
                createParserConfig()
        );
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
        HttpRequest request = this.userRequestFactory.create();
        System.debug(LoggingLevel.DEBUG, '############ request' + request);
        System.debug(LoggingLevel.DEBUG, '############ request app-id' + request.getHeader('app-id'));
        HttpResponse response = this.http.send(request);
        System.debug(LoggingLevel.DEBUG, '############ response' + response);
        String responseBody = response.getBody();
        System.debug(LoggingLevel.DEBUG, '############ responseBody' + responseBody);
        return (DAP_UserDataEnvelope) this.jsonToApexObjectParser
                .parseDocumentToObject(responseBody, parserConfig);
    }


}