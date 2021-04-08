export class Border {
  public right: boolean = false;
  public left: boolean = false;
  public top: boolean = false;
  public bottom: boolean = false;

  public color?: string;
  public width?: number;
}

export default class CellStyle {
  public fillColor?: string;
  public textColor?: string;
  public fontSize?: number;

  public border: Border;

  constructor(border?: Border) {
    this.border = border || new Border();
  }
}
