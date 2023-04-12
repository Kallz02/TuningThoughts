import scrapy
import json

class YouTubeCommunitySpider(scrapy.Spider):
    name = 'youtube_community'
    allowed_domains = ['youtube.com']
    
    def start_requests(self):
        # Replace CHANNEL_ID with the ID of the YouTube channel you want to scrape
        url = f'https://www.youtube.com/channel/{CHANNEL_ID}/community'
        yield scrapy.Request(url=url, callback=self.parse)
    
    def parse(self, response):
        # Extract the JSON data containing the community posts
        data = response.xpath('//script[contains(text(),"ytInitialData")]/text()').get()
        data = json.loads(data)['contents']['twoColumnBrowseResultsRenderer']['tabs'][1]['tabRenderer']['content']['sectionListRenderer']['contents'][0]['itemSectionRenderer']['contents']
        
        # Extract the relevant information from each post and yield the results
        for post in data:
            post_text = post['messageGroupRenderer']['messageRenderer']['text']['runs'][0]['text']
            post_author = post['messageGroupRenderer']['authorName']['simpleText']
            post_timestamp = post['messageGroupRenderer']['timestampText']['simpleText']
            
            yield {
                'text': post_text,
                'author': post_author,
                'timestamp': post_timestamp
            }
