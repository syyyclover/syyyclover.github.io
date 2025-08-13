var posts=["/workstation/","2025/04/11/day1/full/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };