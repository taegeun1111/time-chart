export interface IResponseData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface IChart extends IResponseData {
  time: string;
}
