import rss from '@astrojs/rss';
import { supabase } from '../../lib/supabase';

export async function GET(context) {
  // get the [profile] param from the URL
  const { params } = context;
  const username = params.profile;

  // Generate an RSS feed for all updates, based on updates within Supabase
  const { data, error } = await supabase
    .from("updates")
    .select("*, projects(*, users(*))")
    .eq('users.username', username);
  const items = data.map((update) => {
    return {
      title: update.title,
      pubDate: update.created_at,
      link: `/updates/${update.id}`,
      content: update.content,
      description: update.content,
      // customData
    }
  })

  return rss({
    title: "Two Week Build - Cohort 1",
    description: "Updates from the Two Week Build Challenge",
    site: 'https://twoweekbuild.com',
    items
  });
}