fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=50&context=embed").then((data)=>{
   // console.log(data); json format
   return data.json();//convered to object
}).then((objectData)=>{
    console.log(objectData[0].excerpt.rendered);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
                        <td>${values.excerpt.rendered}</td> <br>
                    <B>   <td>${values.date}</td> </B><br>
                    <B> Title: </B>  <td>${values.title.rendered}</td>   <br>
                    <B> Author:</B> <I>  <td>${values.author}</td> </I>  <br>
                    <B> Link:  </B> <I><a href="${values.link}"><td>${values.link}</td></a></I>  <br>
                    
                        
                       
                        
                    </tr>`;
    })
    document.getElementById("collapseOne").
    innerHTML=tableData;
    document.getElementById("collapseTwo").
    innerHTML=tableData;
    document.getElementById("collapseThree").
    innerHTML=tableData;
})