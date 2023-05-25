var pendingBlogs = localStorage.getItem("pendingBlogs");
var pendingBlogsArr;
if (pendingBlogs) {
    pendingBlogsArr = JSON.parse(pendingBlogs);
}
var approveBlog = function (blogIndex) {
    if (window.confirm("Are you sure want to Approve this Blog ?")) {
        var popedBlog = pendingBlogsArr.splice(blogIndex, 1);
        localStorage.setItem("pendingBlogs", JSON.stringify(pendingBlogsArr));
        var approvedBlogs = localStorage.getItem("approvedBlogs");
        if (approvedBlogs === null) {
            var newApprovedBlogs = [];
            newApprovedBlogs.push(popedBlog[0]);
            localStorage.setItem("approvedBlogs", JSON.stringify(newApprovedBlogs));
        }
        else {
            var curApprovedBlogs = JSON.parse(approvedBlogs);
            curApprovedBlogs.push(popedBlog[0]);
            localStorage.setItem("approvedBlogs", JSON.stringify(curApprovedBlogs));
        }
        window.location.reload();
    }
};
var rejectBlog = function (blogIndex) {
    if (window.confirm("Are you sure want to Reject this Blog ?")) {
        var popedBlog = pendingBlogsArr.splice(blogIndex, 1);
        localStorage.setItem("pendingBlogs", JSON.stringify(pendingBlogsArr));
        window.location.reload();
    }
};
if (pendingBlogsArr.length > 0) {
    for (var i = 0; i < pendingBlogsArr.length; i++) {
        var mainSection = document.getElementById('mainSection');
        var singleBlog = document.createElement('div');
        singleBlog.setAttribute('class', 'singleBlog');
        singleBlog.innerHTML = "<img src=\"".concat(i + 1, ".png\" alt=\"Nature\">\n      <div class=\"blogDetails\">\n        <div class=\"user\">\n          <svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M49.9998 50.0003C45.4165 50.0003 41.4929 48.3684 38.229 45.1045C34.9651 41.8406 33.3332 37.917 33.3332 33.3337C33.3332 28.7503 34.9651 24.8267 38.229 21.5628C41.4929 18.2989 45.4165 16.667 49.9998 16.667C54.5832 16.667 58.5068 18.2989 61.7707 21.5628C65.0346 24.8267 66.6665 28.7503 66.6665 33.3337C66.6665 37.917 65.0346 41.8406 61.7707 45.1045C58.5068 48.3684 54.5832 50.0003 49.9998 50.0003ZM16.6665 83.3337V71.667C16.6665 69.3059 17.2748 67.135 18.4915 65.1545C19.7054 63.1767 21.3193 61.667 23.3332 60.6253C27.6387 58.4725 32.0137 56.8573 36.4582 55.7795C40.9026 54.7045 45.4165 54.167 49.9998 54.167C54.5832 54.167 59.0971 54.7045 63.5415 55.7795C67.9859 56.8573 72.3609 58.4725 76.6665 60.6253C78.6804 61.667 80.2943 63.1767 81.5082 65.1545C82.7248 67.135 83.3332 69.3059 83.3332 71.667V83.3337H16.6665Z\"\n              fill=\"#808080\" />\n          </svg>\n          <div class=\"details\">\n            <p>\n              ").concat(pendingBlogsArr[i].fname, " ").concat(pendingBlogsArr[i].lname, "\n            </p>\n            <p>\n              ").concat(pendingBlogsArr[i].country, "\n            </p>\n          </div>\n        </div>\n  \n        <h3>").concat(pendingBlogsArr[i].title, "</h3>\n        <h5>Blog description</h5>\n        <p class=\"desc\">\n          ").concat(pendingBlogsArr[i].description, "\n        </p>\n        <div class=\"btnBar\">\n          <button onclick=\"approveBlog(").concat(i, ")\" class=\"approve\">\n            Approve\n          </button>\n          <button onclick=\"rejectBlog(").concat(i, ")\" class=\"reject\">\n            Reject\n          </button>\n        </div>\n      </div>");
        mainSection.appendChild(singleBlog);
    }
}
else {
    var mainSection = document.getElementById('mainSection');
    var singleBlog = document.createElement('div');
    singleBlog.innerHTML = "<h1 class=\"noData\">\n  No Pending Blogs Found\n</h1>";
    mainSection.appendChild(singleBlog);
}
