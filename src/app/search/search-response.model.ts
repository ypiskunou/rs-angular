import { SearchItem } from './search-item.model';

export namespace SearchResponse {

  interface VideoListResponse {
    kind: string;
    etag: string;
    pageInfo: SearchItem.PageInfo;
    items: SearchItem.VideoItem[];
  }
}
