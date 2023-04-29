const MAIN = "/" as const;
const LOGIN = "/login" as const;
const LOGOUT = '/logout' as const;
const REGISTRATION = '/registration' as const;
const PROFILE = '/profile' as const;
const EDITSUMMARIES = '/summaries_edit' as const;
const MYSUMMARIES = '/my_summaries' as const;
const SUMMARIESPAGE = '/summaries' as const;
const ADDSUMMARIES = '/add_summaries' as const;

export const ROUTES = {
    LOGIN,
    LOGOUT,
    MAIN,
    REGISTRATION,
    PROFILE,
    EDITSUMMARIES,
    MYSUMMARIES,
    SUMMARIESPAGE,
    ADDSUMMARIES
} as const;
