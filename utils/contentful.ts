import {
  POST_GRAPHQL_ARTICLE_FIELDS,
  POST_GRAPHQL_GALLERY_FIELDS,
  POST_GRAPHQL_WORK_FIELDS,
} from "@/data";
import { ContentfulImage, ContentfulWork, Image, Work } from "@/types";

export const fetchGraphQL = async (
  query: string,
  preview = false,
): Promise<any> => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
};

const extractArticle = (fetchResponse: any): any => {
  return fetchResponse?.data?.articleCollection?.items?.[0];
};

const extractGallery = (fetchResponse: any): Image[] => {
  const images: ContentfulImage[] =
    fetchResponse?.data?.galleryCollection?.items?.[0]?.imagesCollection.items;

  return images.map((image) => ({
    src: image.url,
    alt: image.description,
    size: {
      width: image.width,
      height: image.height,
    },
  }));
};

const extractWork = (fetchResponse: any): Work[] => {
  const work: ContentfulWork[] = fetchResponse?.data?.workCollection?.items;
  return work.map((work) => {
    const images = work.imagesCollection?.items?.map((image) => ({
      src: image.url,
      alt: image.description,
      size: {
        width: image.width,
        height: image.height,
      },
    }));

    const { label, title, href, startDate, endDate, description, items, tags } =
      work;

    return {
      label,
      title,
      href,
      date: {
        start: startDate,
        end: endDate,
      },
      images,
      description,
      items,
      tags,
    };
  });
};

export const getArticle = async (
  slug: string,
  preview: boolean,
): Promise<any> => {
  const entry = await fetchGraphQL(
    `query {
        articleCollection(where: { slug: "${slug}" }, preview: ${
          preview ? "true" : "false"
        }, limit: 1) {
          items {
            ${POST_GRAPHQL_ARTICLE_FIELDS}
          }
        }
      }`,
    preview,
  );

  return extractArticle(entry);
};

export const getGallery = async (
  title: string,
  preview: boolean,
): Promise<Image[]> => {
  const entry = await fetchGraphQL(
    `query {
        galleryCollection(where: { title: "${title}" }, preview: ${
          preview ? "true" : "false"
        }, limit: 1) {
          items {
            ${POST_GRAPHQL_GALLERY_FIELDS}
          }
        }
      }`,
    preview,
  );

  return extractGallery(entry);
};

export const getWork = async (preview: boolean): Promise<Work[]> => {
  const entry = await fetchGraphQL(
    `query {
        workCollection(order: [endDate_DESC], preview: ${
          preview ? "true" : "false"
        }) {
          items {
            ${POST_GRAPHQL_WORK_FIELDS}
          }
        }
      }`,
    preview,
  );

  return extractWork(entry);
};
