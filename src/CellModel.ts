import CellStyle from "./CellStyle";

export default class CellModel {
  public value: string;
  public rowSpan: number;
  public columnSpan: number;

  public style: CellStyle;

  constructor(
    value?: string,
    rowSpan?: number,
    columnSpan?: number,
    style?: CellStyle,
  ) {
    this.value = value || "";
    this.rowSpan = rowSpan || 0;
    this.columnSpan = columnSpan || 0;
    this.style = style || new CellStyle();
  }
}
