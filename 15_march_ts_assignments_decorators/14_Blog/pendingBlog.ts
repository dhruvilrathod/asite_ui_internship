const pendingBlogs = localStorage.getItem("pendingBlogs");

let pendingBlogsArr: any;
if (pendingBlogs) {
  pendingBlogsArr = JSON.parse(pendingBlogs);
}

const approveBlog = (blogIndex: any) => {
  if (window.confirm("Are you sure want to Approve this Blog ?")) {
    const popedBlog = pendingBlogsArr.splice(blogIndex, 1);
    localStorage.setItem("pendingBlogs", JSON.stringify(pendingBlogsArr));

    const approvedBlogs = localStorage.getItem("approvedBlogs");

    if (approvedBlogs === null) {
      let newApprovedBlogs = [];
      newApprovedBlogs.push(popedBlog[0]);

      localStorage.setItem("approvedBlogs", JSON.stringify(newApprovedBlogs));
    } else {
      let curApprovedBlogs = JSON.parse(approvedBlogs);
      curApprovedBlogs.push(popedBlog[0]);

      localStorage.setItem("approvedBlogs", JSON.stringify(curApprovedBlogs));
    }
    window.location.reload();
  }
}

const rejectBlog = (blogIndex: any) => {
  if (window.confirm("Are you sure want to Reject this Blog ?")) {
    const popedBlog = pendingBlogsArr.splice(blogIndex, 1);

    localStorage.setItem("pendingBlogs", JSON.stringify(pendingBlogsArr));
    window.location.reload();
  }
}

if (pendingBlogsArr.length > 0) {

  for (let i = 0; i < pendingBlogsArr.length; i++) {
    let mainSection: HTMLElement = document.getElementById('mainSection') as HTMLElement;
    let singleBlog: HTMLElement = document.createElement('div') as HTMLElement;
    singleBlog.setAttribute('class', 'singleBlog');

    singleBlog.innerHTML = `<img src="${i + 1}.png" alt="Nature">
      <div class="blogDetails">
        <div class="user">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M49.9998 50.0003C45.4165 50.0003 41.4929 48.3684 38.229 45.1045C34.9651 41.8406 33.3332 37.917 33.3332 33.3337C33.3332 28.7503 34.9651 24.8267 38.229 21.5628C41.4929 18.2989 45.4165 16.667 49.9998 16.667C54.5832 16.667 58.5068 18.2989 61.7707 21.5628C65.0346 24.8267 66.6665 28.7503 66.6665 33.3337C66.6665 37.917 65.0346 41.8406 61.7707 45.1045C58.5068 48.3684 54.5832 50.0003 49.9998 50.0003ZM16.6665 83.3337V71.667C16.6665 69.3059 17.2748 67.135 18.4915 65.1545C19.7054 63.1767 21.3193 61.667 23.3332 60.6253C27.6387 58.4725 32.0137 56.8573 36.4582 55.7795C40.9026 54.7045 45.4165 54.167 49.9998 54.167C54.5832 54.167 59.0971 54.7045 63.5415 55.7795C67.9859 56.8573 72.3609 58.4725 76.6665 60.6253C78.6804 61.667 80.2943 63.1767 81.5082 65.1545C82.7248 67.135 83.3332 69.3059 83.3332 71.667V83.3337H16.6665Z"
              fill="#808080" />
          </svg>
          <div class="details">
            <p>
              ${pendingBlogsArr[i].fname} ${pendingBlogsArr[i].lname}
            </p>
            <p>
              ${pendingBlogsArr[i].country}
            </p>
          </div>
        </div>
  
        <h3>${pendingBlogsArr[i].title}</h3>
        <h5>Blog description</h5>
        <p class="desc">
          ${pendingBlogsArr[i].description}
        </p>
        <div class="btnBar">
          <button onclick="approveBlog(${i})" class="approve">
            Approve
          </button>
          <button onclick="rejectBlog(${i})" class="reject">
            Reject
          </button>
        </div>
      </div>`

    mainSection.appendChild(singleBlog);
  }
} else {
  let mainSection: HTMLElement = document.getElementById('mainSection') as HTMLElement;
  let singleBlog: HTMLElement = document.createElement('div') as HTMLElement;

  singleBlog.innerHTML = `<h1 class="noData">
  No Pending Blogs Found
</h1>`
  mainSection.appendChild(singleBlog);
}
