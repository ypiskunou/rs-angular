export namespace SearchItem {

  export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
  }

  interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }

  interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
      standard: Thumbnail;
    };
    channelTitle: string;
    tags: string[];
  }

  export interface VideoItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
  }
}
