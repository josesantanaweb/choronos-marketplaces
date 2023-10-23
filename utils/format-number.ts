import { abbreviateNumber } from "./abbreviate-number";

export type ICurrency = "USD" | "ETH" | "CHR" | undefined;

export interface IOptionsFormatNumber {
  currency?: ICurrency;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  abbreviate?: boolean;
}

export const formatNumber = (
  value: any,
  options: IOptionsFormatNumber = {}
) => {
  let { currency, minimumFractionDigits, maximumFractionDigits, abbreviate } =
    options;

  let valueNumber = Number(value);
  let abbr = "";

  if (isNaN(valueNumber)) return '';

  if (typeof minimumFractionDigits === "undefined") {
    minimumFractionDigits = currency ? 2 : 0;
  }

  if (typeof maximumFractionDigits === "undefined") {
    maximumFractionDigits = currency ? undefined : 20;
  }

  if (abbreviate && valueNumber > 999) {
    let [, matchNumber, matchAbbr] =
      abbreviateNumber(value, minimumFractionDigits).match(
        /([\d|\.]+)([a-z])/i
      ) || [];

    valueNumber = Number(matchNumber);
    abbr = matchAbbr;
  }

  let toLocaleStringOptions: {
    minimumFractionDigits: number;
    maximumFractionDigits: number | undefined;
    style?: string;
    currency?: string;
  } = {
    minimumFractionDigits,
    maximumFractionDigits,
  };

  if (currency) {
    toLocaleStringOptions.style = "currency";
    toLocaleStringOptions.currency = "USD";
  }

  let numberToCurrency = valueNumber.toLocaleString(
    "en",
    toLocaleStringOptions
  );

  if (abbr) {
    numberToCurrency = `${numberToCurrency}${abbr}`;
  }

  if (currency === "ETH" || currency === "CHR") {
    numberToCurrency = `${numberToCurrency.replace("$", "")} ${currency}`;
  }

  return numberToCurrency;
};
