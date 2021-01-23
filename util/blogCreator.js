const fs = require ('fs');
const ejs = require ('ejs');
//blog posts
// *try converting from string to object*
let pages = fs.readFileSync('DATA/data.json', 'utf8');

// console.log(pages);
//index.html
// console.log(pages);
var blogNames=[];
pages=JSON.parse(pages);
let blog_template = fs.readFileSync('src/views/blog.ejs', 'utf8');
for (let i = 0; i < pages.length; i++) {
   if (!blogNames.includes(pages[i].industry)) {
       blogNames.push(pages[i].industry);
    }
}
// console.log(blogNames);
let industries = [];
for (let i = 0; i < pages.length; i++) {
   if (!industries.includes(pages[i].industry)) {
     var industryfull = [];
     industries.push(pages[i].industry);
     for (let j=pages.length-1; j>1; j--) {
       if (pages[j].industry==pages[i].industry) {
         var industryyear = {
         }
         // console.log(pages[j]);
         industryyear['title']= pages[j].year;
         industryyear['jan']=pages[j].month.jan;
         industryyear['feb']=pages[j].month.feb;
         industryyear['mar']=pages[j].month.mar;
         industryyear['apr']=pages[j].month.apr;
         industryyear['may']=pages[j].month.may;
         industryyear['jun']=pages[j].month.jun;
         industryyear['jul']=pages[j].month.jul;
         industryyear['aug']=pages[j].month.aug;
         industryyear['sep']=pages[j].month.sep;
         industryyear['oct']=pages[j].month.oct;
         industryyear['nov']=pages[j].month.nov;
         industryyear['dec']=pages[j].month.dec;
         industryyear['annual']=pages[j].annual;
         industryyear['analysis']=pages[j].analysis;
         industryfull.push(industryyear);
       }
     }
     // console.log(industryfull);
     let dataAnalysis = industryfull[0].analysis;
     // console.log(dataAnalysis);
     industryfull=JSON.stringify(industryfull);
     let blog_html = ejs.render(blog_template, {
       filename: __dirname.replace("/util", "") + '/src/views/blog.ejs',
       data: industryfull,
       analysis: dataAnalysis,
       blogTitle: pages[i].industry,
       blogTitles: blogNames
     });
     fs.writeFileSync('build/micropages/' + pages[i].industry.replace(/ /g, "-" ) + '.html', blog_html, 'utf8');
     // console.log(industryfull);
   }
}
pages=JSON.stringify(pages);
let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
let index_html = ejs.render(index_template, {
  filename: __dirname.replace("/util", "") + '/src/views/index.ejs',
    data: pages,
    blogTitles: blogNames
  });
fs.writeFileSync("build/index.html", index_html, 'utf8');
//about.html
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');
let about_html = ejs.render(about_template, {
  filename: __dirname.replace("/util", "") + '/src/views/about.ejs',
    blogTitles: blogNames
  });
fs.writeFileSync("build/about.html", about_html, 'utf8');
