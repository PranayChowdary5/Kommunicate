var url_string="https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"
url=new URL(url_string)
var c=url.searchParams.get("c")
console.log(c)
