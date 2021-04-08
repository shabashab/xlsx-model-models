import RowMarkup from "./RowMarkup";
import ColumnMarkup from "./ColumnMarkup";

import { Dictionary } from "typescript-collections";

export default class TableMarkup {
  public rows: Dictionary<number, RowMarkup>;
  public columns: Dictionary<number, ColumnMarkup>;

  constructor(
    rows?: Dictionary<number, RowMarkup>,
    columns?: Dictionary<number, ColumnMarkup>,
  ) {
    this.rows = rows || new Dictionary<number, RowMarkup>();
    this.columns = columns || new Dictionary<number, ColumnMarkup>();
  }
}
