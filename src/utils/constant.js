export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_KEY = "ae5d908c7cf18f1f1808deb1f96cecb6";

export const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTVkOTA4YzdjZjE4ZjFmMTgwOGRlYjFmOTZjZWNiNiIsInN1YiI6IjY1MmZkNjdlY2FlZjJkMDBlMjhkYTE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.781wYFdqrviv2eQy_9Bk20Rhau8DjDt4hDUKRM0czs0";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

// export const OPENAI_KEY = "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"
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
