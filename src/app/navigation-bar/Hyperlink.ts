export interface Hyperlink {
  name: string;
  route?: string;
  dropdown?: {
    value: boolean;
    hyperlinks: Hyperlink[] | [];
  };
}
