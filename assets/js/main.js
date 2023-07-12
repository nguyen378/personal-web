function changeContent(page){
    var contentDiv = document.getElementById('content')
    var contentFrame = document.getElementById('frame')

    // Thêm nội dung mới dựa trên trang được chọn
    if (page === 'introduction.html') {
        contentFrame.setAttribute('src',page)
    }
    else   if (page === 'CV.html') {
        contentFrame.setAttribute('src',page)
    }
    else   if (page === 'project.html') {
        contentFrame.setAttribute('src',page)
    }
    else   if (page === 'Blog.html') {
        contentFrame.setAttribute('src',page)
    }
    else   if (page === 'contact.html') {
        contentFrame.setAttribute('src',page)
    }
}

