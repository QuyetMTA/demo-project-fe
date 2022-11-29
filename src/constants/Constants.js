/* eslint-disable import/no-anonymous-default-export */
export default {
    APP_ID: 'BUSINESS_IHRMS',
    TABLE: {
        PAGESIZE_DEFAULT: 50, ROWS: 10, SIZE_PER_PAGE: [10, 20, 50, 100, 200]
    },

    TABLE_SPEC: {
        PAGESIZE_DEFAULT: 50, ROWS: 20, SIZE_PER_PAGE: [10, 20, 50, 100, 200]
    },

    ACTION: {
        INSERT: "INSERT", UPDATE: "UPDATE", DELETE: "DELETE", VIEW: "VIEW"
    },
    PERMISSION: {
        AnnualLeave: "/annual-leave/create",
        ShiftAssign: "/shift-assign/create",
        TabDlvr: "/effort-summary/tab-dlvr/create",
        TabThxl: "/effort-summary/tab-thxl/create",
        TabBc: "/effort-summary/tab-bc/create",
        EffortKind: "/EffortKind/update",
    },

    STATUS: {
        ACTIVE: 1, INACTIVE: 0
    },

    SERVICE_CODE: {
        SUCCESS: "API-000", NULL_PARAM: "API-00001", UNKNOW: "API-99999",
    },
    DATE_FORMAT: "DD/MM/YYYY",
    DATE_TIME_FORMAT: "DD/MM/YYYY HH:mm:ss",
    DATE_FORMAT_REV: "YYYY-MM-DD",
    DATE_TIME_FORMAT_REV: "YYYY-MM-DD HH:mm:ss",
    DATE_AND_TIME: "DD-MM-YYYY HH:mm:ss",
    DATE_TIME_FORMAT_ISO: "YYYY-MM-DDTHH:mm:ss",
    TIME_FORMAT: "HH:mm:ss",
    FORMAT_DATE_PICKER: ["DD/MM/YYYY", "DDMMYYYY", "DD/MM/YYYY HH:mm:ss", "DDMMYYYY HHmmss", "DDMMYYYY HH:mm:ss", "D/MM/YYYY", "D/M/YYYY", "D/M/YY", "D/MM/YY", "DD/M/YYYY", "DD/M/YY", "DD/MM/YY"],
    MONTH_FORMAT: "MM/YYYY",
    WEEK_FORMAT: "ww-YYYY",
    QUARTER_FORMAT: "QQ-YYYY",
    YEAR_FORMAT: "YYYY",
    WORK_TIME_FORMAT: "HH:mm",

    DECIMAL_SEPARATOR: ".",
    THOUSAND_SEPARATOR: ",",

    REGEX_EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    THEME: {
        COLOR: '#174f9a',
    },

    CONSOLE_CLEAR: false,
    CHECK_PERMISSION_BUTTON: false,

    ButtonPermission: {
        search: "search",
        insert: "insert",
        update: "update",
        save: "save",
        delete: "delete",
        upload: "upload",
        export: "export"
    },

    RESPONSE_CODE: {
        SUCCESS: "API-000",
        ERROR: "ERROR",
        EXCEPTION: "VALID-001",
        DUPLICATE: "DUPLICATE",
        NOT_FOUND: "VALID-003",
        INVALID_DATA: "VALID-004",
        MAX_LENGTH: "VALID-005",
        FOREIGN_KEY: "VALID-006",
        NULL_OBJ: "VALID-007"

    },
    LocalStorageKey: {
        userInfo: "userInfo"
    },
    ORG_ID: {
        TCT: 125
    },
}
