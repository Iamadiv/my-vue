// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;


// mock一组数据
const produceNewsData = function(data) {
    let articles = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
             //  Random.csentence( min, max )
            title: Random.csentence(5, 30),
            // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), 
            // Random.cname() 随机生成一个常见的中文姓名
            author_name: Random.cname(), 
            // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            date: Random.date() + ' ' + Random.time()
        }
        articles.push(newArticleObject)
    }
    return {articles: articles}
}
Mock.mock('/news/index', 'post', produceNewsData);

// mock一组数据
const produceEchartsleft1 = function(data) {
    console.log(data);
    let articles = [
        {
            "name": "班级平均用时",
            "type": "bar",
            "data": [
                Random.natural(5, 300),
                Random.natural(5, 300), 
                Random.natural(5, 300), 
                Random.natural(5, 300), 
                Random.natural(5, 300), 
                Random.natural(5, 300)
            ]
        },
        {
            "name": "学生正确用时",
            "type": "bar",
            "data": [
                Random.natural(5, 300),
                Random.natural(5, 300), 
                Random.natural(5, 300), 
                Random.natural(5, 300), 
                Random.natural(5, 300), 
                Random.natural(5, 300)
            ]
        }
    ];
    return articles
}
Mock.mock('/news/echartsleft1', 'post', produceEchartsleft1);