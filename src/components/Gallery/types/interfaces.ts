import { Basic } from "unsplash-js/dist/methods/users/types";

export interface GalleryProps {
  imageList: Basic[];
}

interface ImageProps {
  alt_description: string;
  blur_hash?: string;
  categories?: [];
  color?: string;
  created_at?: string;
  current_user_collections?: [];
  description?: string;
  height?: number;
  id: string;
  liked_by_user?: Boolean;
  likes?: number;
  links?: linksProps;
  promoted_at?: string;
  sponsorship?: sponsorshipProps;
  updated_at?: string;
  urls: urlsProps;
  user?: userProps;
  width?: number;
}

interface linksProps {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

interface sponsorshipProps {
  impression_urls: string[];
  sponsor: sponsorProps;
  tagline: string;
  tagline_url: string;
}

interface sponsorProps {}

interface urlsProps {
  full: string;
  raw: string;
  regular: string;
  small: string;
}

interface userProps {}
