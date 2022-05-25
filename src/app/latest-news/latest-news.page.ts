import { Component, OnInit } from '@angular/core';
import { NewsFeedServiceService } from '../news-feed-service.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.page.html',
  styleUrls: ['./latest-news.page.scss'],
})
export class LatestNewsPage implements OnInit {
  articles: any

  constructor(private newsService:NewsFeedServiceService) { 
    this.loadNews()
  }

  loadNews(){
    this.newsService.getNews("top-headlines?q=COVID&?country=sg").subscribe( news=> {
      this.articles = news['articles'];
      console.log(this.articles);
    })
  }

  ngOnInit() {
  }

}
