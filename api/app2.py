from flask import Flask, jsonify
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from youtube_spider import YouTubeCommunitySpider

app = Flask(__name__)

@app.route('/youtube/<channel_id>')
def scrape_youtube(channel_id):
    # Run the Scrapy spider to scrape the community posts
    process = CrawlerProcess(get_project_settings())
    process.crawl(YouTubeCommunitySpider, CHANNEL_ID=channel_id)
    process.start()
    
    # Return the scraped data as a JSON response
    scraped_data = process.spider.results
    return jsonify(scraped_data)

if __name__ == '__main__':
    app.run(debug=True)
