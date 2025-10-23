import "server-only";

import { Client } from "@notionhq/client";
import sortBy from "es-toolkit/compat/sortBy";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchJokes = () => {
  return notion.dataSources
    .query({
      data_source_id: process.env.NOTION_DATASOURCE_ID!,
    })
    .then((response) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return sortBy(response.results, ["created_time"]).map((page) => page.properties["Joke"].title[0].plain_text);
    });
};
