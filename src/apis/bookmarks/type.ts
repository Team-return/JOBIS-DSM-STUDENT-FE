export interface BookmarkResponseType {
  bookmarks: BookmarkItemsType[];
}

export interface BookmarkItemsType {
  "company_logo_url": string;
  "company_name": string;
  "recruitment_id": number;
  "created_at": string;
}