// var http = require('http');

// var options = {
//     host: 'locallost',
//     port: 9999,
//     path: '/'
// };


// var x = http.request(options,function(res){
//     console.log("Connected");
//     res.on('data',function(data){
//        console.log(data)

//        // var now=new Date();
//        // console.log('本页有', dom.find('div .post').length, '篇文章');
//        // console.log('耗时：'+(new Date().getTime()-now.getTime())+'ms');    });
//     });
// });

// x.end();

var cheerio = require('cheerio');
var http = require('http');
var options = {
    host: 'my.njupt.edu.cn',
    path: '/ccs/main/searchUser.do?page=5943',
    method: 'GET',
  
};
var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
       // console.log(data);
        $ = cheerio.load(data);
        var count = 0;
        $("tr").each(function(i, elem) {
          row = cheerio.load ($(this).html());
          row("td").each(function (i, elem) {
            console.log(count);
            count = count + 1;
            console.log(elem);
          });
          console.log("\n");
        });
        // rows = $("tr")
        // for(var i = 0; i < rows.size; i++)
        //   console.log(rows[i])

    });
});
req.end();