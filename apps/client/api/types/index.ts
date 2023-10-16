export interface IPostLinkBody {
  original_link: string;
}

export interface IPostLink {
  id: number;
  original_link: string;
  count_click: number;
  short_link: string;
  code_link: string;
}

export interface ILinkList {
  links: IPostLink[];
  total: number;
}
