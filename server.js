const path = require('path');
const express = require('express');

const app = express();

// 视图引擎配置
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'html');
//使用ejs渲染html模板引擎
app.engine('html', require('ejs').renderFile);
// 模板缓存
app.enable('view cache');

app.use((req, res, next) => {
    if (req.hostname != 'www.hw.mangofun.cn') {
        return res.json('非法请求')
    }
    return next();
});

app.use(express.static('./dist'));

app.get('/sub', function (req, res) {
    res.render('index', {});
});
  
app.listen(3001, function () {
    console.log('gameAdmin listening on port 3001!');
});