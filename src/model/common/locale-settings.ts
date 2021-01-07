export interface ILocaleSettings {
  lang: string;
  dateFormat: IDateFormat;
  monthYearFormat: IDateFormat;
}

export interface IDateFormat {
  unicode: string;
  moment: string;
}

export const HR: ILocaleSettings = {
  dateFormat: {
    moment: "DD.MM.YYYY",
    unicode: "dd.MM.yyyy"
  },
  lang: "hr",
  monthYearFormat: {
    moment: "MM.YYYY",
    unicode: "MM.yyyy"
  }
};
export const EN: ILocaleSettings = {
  dateFormat: {
    moment: "MM/DD/YYYY",
    unicode: "MM/dd/yyyy"
  },
  lang: "en",
  monthYearFormat: {
    moment: "MM/YYYY",
    unicode: "MM/yyyy"
  }
};
