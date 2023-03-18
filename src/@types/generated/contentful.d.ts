// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.
import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPostFields {
  /** Title */
  title: string;

  /** HeaderImage */
  headerImage: Asset;

  /** Body */
  body: Document;

  /** Author */
  author: Entry<{ [fieldId: string]: unknown }>;
  
  /** datePublished */
  datePublished: string;

}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProfileFields {
  /** Name */
  name: string;

  /** Avatar */
  avatar: Asset;

  /** Description */
  description: string;
}

/** Information about blog owner */

export interface IProfile extends Entry<IProfileFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "profile";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "post" | "profile";

export type IEntry = IPost | IProfile;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
