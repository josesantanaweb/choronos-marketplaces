export interface IDealItem {
  name: string;
  category: string;
  price: string;
  label: string;
  imagen: string;
}
export interface INFTItem {
  name: string;
  category: string;
  price: string;
  label: string;
  imagen: string;
  url?: string;
}
export interface ITradeItem {
  step: number;
  title: string;
  description: string;
  button: string;
}
export interface INotificationItem {
  title: string;
  href: string;
}

export interface IFilterOption {
  label: string;
  value: string;
}
export interface IRow {
  name: string;
  category?: string;
  imagen: string;
  price: string;
  date: any;
}
