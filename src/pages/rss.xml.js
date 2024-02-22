import rss from '@astrojs/rss';

export async function GET(context) {
  // Generate an RSS feed for all updates, based on updates within Supabase
  const { data, error } = await supabase
    .from("updates")
    .select("*, projects(*, users(*))");
  const items = data.map((update) => {
    return {
      // title
      // pubDate
      // customData
      link: `${context.site}/updates/${update.id}`,
      content: update.content,
    }
  })

  return rss({
    title: "Two Week Build - Cohort 1",
    description: "Updates from the Two Week Build Challenge",
    site: 'https://twoweekbuild.com',
    items: { ...items }
  });
}