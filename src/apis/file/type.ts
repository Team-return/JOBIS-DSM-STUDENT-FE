export interface UploadFileResponse {
  urls: string[];
}

export interface PresignedURLResponse {
  urls: ResignedURLResponseItem[];
}

interface ResignedURLResponseItem {
  file_path: string;
  pre_signed_url: string;
}
