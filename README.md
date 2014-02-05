爬取南京邮电大学校园卡卡号信息。

ruby的版本可以跑了，node版没写好。 

```bash
bundle install
ruby app.rb
```

然后目录下面就有一个data.json的文件了。

```javascript
[
  [
    "阿不都克依木·努尔买买提", // 姓名
    "B12010421",   //学号
    "", //单位
    "110201200059800", // 校园卡号
    "http://my.njupt.edu.cn/ccs/main/searchUser.do?page=5948" // 信息来源网址
  ],
  [
    "戴晨拓",
    "Y060905\n",
    "",
    "121000Y06090500",
    "http://my.njupt.edu.cn/ccs/main/searchUser.do?page=5948"
  ]
]
```


实际运行的话会有几千个HTTP请求和解析HTML的过程，会持续一段时间。
