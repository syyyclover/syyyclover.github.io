var posts=["2025/08/13/工作站部门职责与应聘要求/","2025/04/11/day1/full/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };