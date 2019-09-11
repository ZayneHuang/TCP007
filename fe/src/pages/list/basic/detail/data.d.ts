export interface TableListItem {
  id: number;
  correct: number;
  predict: number;
  isRight: number;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  name: string;
  sorter: string;
  status: string;
  pageSize: number;
  currentPage: number;
}
