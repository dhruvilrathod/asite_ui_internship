var form = document.getElementById("createBlogForm");
function handleForm(event: any) { event.preventDefault(); }
form?.addEventListener('submit', handleForm);

const submitBlogDetails = (e: any) => {
    let fname: string = (<HTMLInputElement>document.getElementById("fname")).value;
    let lname: string = (<HTMLInputElement>document.getElementById("lname")).value;
    let title: string = (<HTMLInputElement>document.getElementById("title")).value;
    let country: string = (<HTMLInputElement>document.getElementById("country")).value;
    let description: string = (<HTMLInputElement>document.getElementById("description")).value;

    let newBlog = {
        fname, lname, title, country, description
    };

    console.log(newBlog)

    var pendingBlogs = localStorage.getItem("pendingBlogs");
    console.log(pendingBlogs)

    if (pendingBlogs === null) {
        let newPendingBlogs = [];
        newPendingBlogs.push(newBlog);
        localStorage.setItem("pendingBlogs", JSON.stringify(newPendingBlogs));
    }
    else if (pendingBlogs) {
        let curPendingBlogs = JSON.parse(pendingBlogs);
        curPendingBlogs.push(newBlog);
        localStorage.setItem("pendingBlogs", JSON.stringify(curPendingBlogs));
    }

    (<HTMLInputElement>document.getElementById("fname")).value = "";
    (<HTMLInputElement>document.getElementById("lname")).value = "";
    (<HTMLInputElement>document.getElementById("title")).value = "";
    (<HTMLInputElement>document.getElementById("description")).value = "";
}

