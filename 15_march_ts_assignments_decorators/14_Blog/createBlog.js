var form = document.getElementById("createBlogForm");
function handleForm(event) { event.preventDefault(); }
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleForm);
var submitBlogDetails = function (e) {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var title = document.getElementById("title").value;
    var country = document.getElementById("country").value;
    var description = document.getElementById("description").value;
    var newBlog = {
        fname: fname,
        lname: lname,
        title: title,
        country: country,
        description: description
    };
    console.log(newBlog);
    var pendingBlogs = localStorage.getItem("pendingBlogs");
    console.log(pendingBlogs);
    if (pendingBlogs === null) {
        var newPendingBlogs = [];
        newPendingBlogs.push(newBlog);
        localStorage.setItem("pendingBlogs", JSON.stringify(newPendingBlogs));
    }
    else if (pendingBlogs) {
        var curPendingBlogs = JSON.parse(pendingBlogs);
        curPendingBlogs.push(newBlog);
        localStorage.setItem("pendingBlogs", JSON.stringify(curPendingBlogs));
    }
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
};
