export default function blogMaker() {
  console.log('this export thing works');

  let html = $(`
     <div id="blogContainer">
     <form id="blog-form">
     <label for="blogTitle">title</label>
     <input type="text" value="Catchy Title" placeholder="Catchy Title" id="blogTitle">
     <label for="blogBody">body</label>
     <input type="text" value="Tell me story, do the voices" id="blogBody">
     <label for="saveBlog">Click Here To Save</label>
     <input type="submit" value="SAVE">
     </form>
     </div>
   `);

   
   return html;
};
