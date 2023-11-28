export interface BookmarkResponseType {
  bookmarks: BookmarkItemsType[];
}

export interface BookmarkItemsType {
  company_name: string;
  recruitment_id: number;
  created_at: string;
}
