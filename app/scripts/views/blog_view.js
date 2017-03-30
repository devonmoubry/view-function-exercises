export default function blogMaker() {
  console.log('this export thing works');

  let html = $(`
     <div id="blogContainer">
     <form id="blog-form">
     <label for="blogTitle">title</label>
     <input type="text" value="" placeholder="Catchy Title" id="blogTitle">
     <label for="blogBody">body</label>
     <input type="text" value="" placeholder="Tell me story, do the voices" id="blogBody">
     <label for="saveBlog">Click Here To Save</label>
     <input type="submit" class="submit" value="SAVE" id="saveBlog">
     </form>
     </div>
   `);

   $(html).find('#blog-form').submit(function(event) {
     event.preventDefault();
     let title = event.target.elements['blogTitle'].value;
     let body = event.target.elements['blogBody'].value;

     let settings = {
       type: 'POST',
       contentType: 'application/json',
       url: 'http://tiny-za-server.herokuapp.com/collections/devonmoubry-blogMaker',
       data: JSON.stringify ({
         title: title,
         body: body
       })
     }

    $.ajax(settings).then(function(data, status, xhr) {

    })

   });

   return html;
};
