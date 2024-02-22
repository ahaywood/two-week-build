import rss, { pagesGlobToRssItems } from '@astrojs/rss';



export async function GET(context) {
  // Generate an RSS feed for all updates, based on updates within Supabase
  const { data, error } = await supabase
    .from("updates")
    .select("*, projects(*, users(*))");
  const items = data.map((update) => {
    return {
      link: `${context.site}/updates/${update.id}`,
      content: update.content,
    }
  })

  return rss({
    title: 'Two Week Build Updates',
    description: 'All Project Updates for Two Week Build',
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob('../content/updates/*.md')),
    customData: `<language>en-us</language>`,
  });
}