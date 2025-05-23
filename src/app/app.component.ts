import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task';

  head={
    
        headline: "Further restrictions': Warning for NSW",
        title: 'WARNING FOR NSW',
        src: 'https://content.api.news/v3/images/bin/7fb8522d275a99adfaa6e642ea23fa83?width=316',
        link: 'https://www.news.com.au/world/coronavirus/australia/coronavirus-victoria-live-latrobe-university-students-party-during-melbourne-lockdown/live-coverage/e4c83d113632fbdbd9b1c8a5a232fb27',
        standfirst:
          "NSW residents have been urged to think about their movements this weekend, with the premier warning she doesn't want to have to impose further restrictions.",
        primarySectionRouteName: 'NSW & ACT',
      
  };
    articles= [
      
      {
        headline: 'Big W causes frenzy over $40 Nike sale',
        thumbnail: {
          title: 'SHOES',
          width: 316,
          height: 237,
          src: 'https://content.api.news/v3/images/bin/095a7bf5f3d4835128b138d272f76444?width=316',
        },
        link: 'https://www.news.com.au/lifestyle/fashion/big-w-starts-selling-nike-shoes-for-40/news-story/76b64e7689eb958e963a24d5d119b504',
        standfirst:
          'Big W has surprised shoppers by heavily discounting one of the most popular sporting brands, sending fans into a frenzy.',
        primarySectionRouteName: 'Fashion',
      },
      {
        headline: 'Brand removes controversial ingredient',
        thumbnail: {
          title: 'CHOCOLATE',
          width: 316,
          height: 237,
          src: 'https://content.api.news/v3/images/bin/05684bb3139d03ccef1856a71f66fd5b?width=316',
        },
        link: 'https://www.news.com.au/lifestyle/food/eat/darrell-lea-removes-controversial-palm-oil-ingredient-from-chocolate/news-story/bb2d04be500ef0c8b18d4ec821eb5aef',
        standfirst:
          'The iconic Australian chocolate brand will change the ingredients for over 100 of its products – and is now calling on other companies to do the same.',
        primarySectionRouteName: 'Eat',
      }
    ]

}
